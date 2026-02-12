"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Users, Eye, TrendingUp, Clock, Table as TableIcon, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const EngagementDashboard = () => {
    const [visitorStats, setVisitorStats] = useState<any>(null);
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


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

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "88$3p27") {
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Incorrect password. Please try again.");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

                <Card className="w-full max-w-md border border-slate-200 dark:border-slate-800 shadow-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl glass-card rounded-3xl overflow-hidden relative z-10 transition-all">
                    <CardHeader className="space-y-3 text-center pt-10 pb-6">
                        <div className="mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-blue-500/20 rotate-3">
                            <Clock className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-3xl font-black tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">Engagement Dashboard</CardTitle>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Enter your secure access code to view analytics</p>
                    </CardHeader>
                    <CardContent className="px-10 pb-12">
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-3">
                                <input
                                    type="password"
                                    placeholder="Enter access code"
                                    className={`w-full px-6 py-4 rounded-2xl border ${error ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50'} focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-center text-xl font-mono tracking-widest placeholder:text-slate-400 placeholder:font-sans placeholder:text-base placeholder:tracking-normal`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoFocus
                                />
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs text-center font-bold uppercase tracking-wider"
                                    >
                                        {error}
                                    </motion.p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-2xl transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
                            >
                                Access Dashboard
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

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
                                    label={({ name, percent }: { name?: string; percent?: number }) => `${name || ''} ${((percent || 0) * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
