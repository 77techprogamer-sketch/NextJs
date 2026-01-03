"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Users, Eye, TrendingUp, Clock, Table as TableIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const EngagementDashboard = () => {
    const [visitorStats, setVisitorStats] = useState<any>(null);
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // Fetch Visitor Stats
            const { data: statsData, error: statsError } = await supabase.rpc('get_visitor_stats');
            if (statsError) console.error('Error fetching stats:', statsError);
            else if (statsData) setVisitorStats(statsData[0]);

            // Fetch Customer Leads
            const { data: leadsData, error: leadsError } = await supabase
                .from('customers')
                .select('id, name, age, gender, phone, insurance_type, intended_sum_insured, created_at')
                .order('created_at', { ascending: false });

            if (leadsError) {
                console.error('Error fetching leads:', leadsError);
                // If it's a 401 or RLS issue, we'll just have an empty list but log the error
            } else if (leadsData) {
                setLeads(leadsData);
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto p-6 space-y-6">
                <Skeleton className="h-10 w-64" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-32 w-full" />)}
                </div>
                <Skeleton className="h-[400px] w-full" />
            </div>
        );
    }

    // Process data for charts
    const leadsByType = leads.reduce((acc: any, lead) => {
        const type = lead.insurance_type || 'Unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const pieData = Object.keys(leadsByType).map(key => ({
        name: key.replace('_', ' ').toUpperCase(),
        value: leadsByType[key]
    }));

    const mainStats = [
        { label: 'Total Visits', value: visitorStats?.total_visits || 0, icon: Eye, color: 'text-blue-500' },
        { label: 'Unique Visitors', value: visitorStats?.unique_visitors || 0, icon: Users, color: 'text-green-500' },
        { label: 'Total Leads', value: leads.length, icon: TrendingUp, color: 'text-purple-500' },
        { label: 'Conversion Rate', value: `${((leads.length / (visitorStats?.total_visits || 1)) * 100).toFixed(2)}%`, icon: Clock, color: 'text-orange-500' },
    ];

    return (
        <div className="container mx-auto p-6 space-y-8 animate-in fade-in duration-700">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Engagement Dashboard</h1>
                <p className="text-muted-foreground">Last updated: {format(new Date(), 'PPpp')}</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {mainStats.map((stat, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Leads by Type Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Leads by Insurance Type</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Recent Activity (Placeholder for a trend line) */}
                <Card>
                    <CardHeader>
                        <CardTitle>Leads Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={pieData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" hide />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Leads Table */}
            <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                    <TableIcon className="h-5 w-5" />
                    <CardTitle>Recent Customer Leads</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium">Insurance Type</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium">Phone</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {leads.slice(0, 10).map((lead) => (
                                    <tr key={lead.id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-4 align-middle font-medium">{lead.name}</td>
                                        <td className="p-4 align-middle capitalize">{lead.insurance_type?.replace('_', ' ')}</td>
                                        <td className="p-4 align-middle">{lead.phone}</td>
                                        <td className="p-4 align-middle">{format(new Date(lead.created_at), 'MMM d, yyyy')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default EngagementDashboard;
