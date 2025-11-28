"use client";

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, CheckCircle, Shield, Heart, Car, Home, Plane, FireExtinguisher } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { showSuccess, showError } from '@/utils/toast'; // Import from your utility file

const Index = () => {
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    insurance_type: '',
    vehicle_type: '',
    vehicle_number: '',
    vehicle_usage: '',
    source_location: '',
    destination_location: '',
    visit_duration: '',
    purpose_of_visit: '',
    number_of_people: '',
    type_of_property: '',
    intended_sum_insured: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setQuoteData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('customers')
      .insert([
        {
          ...quoteData,
          user_id: user?.id,
        },
      ]);

    if (error) {
      showError('Error submitting quote: ' + error.message); // Use showError
    } else {
      showSuccess('Quote submitted successfully!'); // Use showSuccess
      setQuoteData({
        name: '',
        email: '',
        phone: '',
        age: '',
        insurance_type: '',
        vehicle_type: '',
        vehicle_number: '',
        vehicle_usage: '',
        source_location: '',
        destination_location: '',
        visit_duration: '',
        purpose_of_visit: '',
        number_of_people: '',
        type_of_property: '',
        intended_sum_insured: '',
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#services') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-center p-4" style={{ backgroundImage: 'url(/placeholder.svg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Your Trusted Partner for Comprehensive Insurance</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Get free quotes for life, health, term, motor, home, travel, and fire insurance. Chat with expert advisors and secure your future with the best plans.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3">Get a Free Quote</Button>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Secure Your Future Today!</h2>
          <p className="text-xl mb-8">Fill out the form below to get a personalized insurance quote tailored to your needs.</p>
          <div className="max-w-3xl mx-auto bg-card text-card-foreground p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Request a Free Quote</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input id="name" placeholder="Your Name" value={quoteData.name} onChange={handleChange} required />
              <Input id="email" type="email" placeholder="Your Email" value={quoteData.email} onChange={handleChange} required />
              <Input id="phone" type="tel" placeholder="Your Phone Number" value={quoteData.phone} onChange={handleChange} />
              <Input id="age" type="number" placeholder="Your Age" value={quoteData.age} onChange={handleChange} />
              <select id="insurance_type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" value={quoteData.insurance_type} onChange={handleChange}>
                <option value="">Select Insurance Type</option>
                <option value="Life">Life Insurance</option>
                <option value="Health">Health Insurance</option>
                <option value="Motor">Motor Insurance</option>
                <option value="Home">Home Insurance</option>
                <option value="Travel">Travel Insurance</option>
                <option value="Fire">Fire Insurance</option>
                <option value="Term">Term Insurance</option>
              </select>

              {quoteData.insurance_type === 'Motor' && (
                <>
                  <Input id="vehicle_type" placeholder="Vehicle Type (e.g., Car, Bike)" value={quoteData.vehicle_type} onChange={handleChange} />
                  <Input id="vehicle_number" placeholder="Vehicle Number" value={quoteData.vehicle_number} onChange={handleChange} />
                  <Input id="vehicle_usage" placeholder="Vehicle Usage (e.g., Personal, Commercial)" value={quoteData.vehicle_usage} onChange={handleChange} />
                </>
              )}

              {quoteData.insurance_type === 'Travel' && (
                <>
                  <Input id="source_location" placeholder="Source Location" value={quoteData.source_location} onChange={handleChange} />
                  <Input id="destination_location" placeholder="Destination Location" value={quoteData.destination_location} onChange={handleChange} />
                  <Input id="visit_duration" placeholder="Visit Duration" value={quoteData.visit_duration} onChange={handleChange} />
                  <Input id="purpose_of_visit" placeholder="Purpose of Visit" value={quoteData.purpose_of_visit} onChange={handleChange} />
                  <Input id="number_of_people" type="number" placeholder="Number of People" value={quoteData.number_of_people} onChange={handleChange} />
                </>
              )}

              {quoteData.insurance_type === 'Home' && (
                <>
                  <Input id="type_of_property" placeholder="Type of Property (e.g., Apartment, Villa)" value={quoteData.type_of_property} onChange={handleChange} />
                  <Input id="intended_sum_insured" placeholder="Intended Sum Insured" value={quoteData.intended_sum_insured} onChange={handleChange} />
                </>
              )}

              {quoteData.insurance_type === 'Fire' && (
                <>
                  <Input id="type_of_property" placeholder="Type of Property (e.g., Commercial, Residential)" value={quoteData.type_of_property} onChange={handleChange} />
                  <Input id="intended_sum_insured" placeholder="Intended Sum Insured" value={quoteData.intended_sum_insured} onChange={handleChange} />
                </>
              )}

              <div className="md:col-span-2">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">Submit Quote Request</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="text-primary h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Expert Guidance</CardTitle>
              <CardDescription className="text-center">Our experienced advisors help you find the best plans.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="text-primary h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Comprehensive Coverage</CardTitle>
              <CardDescription className="text-center">Wide range of insurance products to meet all your needs.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="text-primary h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Customer Satisfaction</CardTitle>
              <CardDescription className="text-center">Dedicated support to ensure your peace of mind.</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section (Target for scroll) */}
      <section id="services" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Our Services Offered</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">We provide a wide array of insurance solutions tailored to protect what matters most to you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="text-red-500 h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Life Insurance</CardTitle>
              <CardDescription className="text-center">Secure your family's financial future with our flexible life insurance plans.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="text-green-500 h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Health Insurance</CardTitle>
              <CardDescription className="text-center">Comprehensive health coverage for you and your loved ones.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Car className="text-blue-500 h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Motor Insurance</CardTitle>
              <CardDescription className="text-center">Protect your vehicle against accidents, theft, and damages.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Home className="text-yellow-500 h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Home Insurance</CardTitle>
              <CardDescription className="text-center">Safeguard your home and belongings from unforeseen events.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Plane className="text-indigo-500 h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Travel Insurance</CardTitle>
              <CardDescription className="text-center">Enjoy worry-free journeys with our extensive travel insurance.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FireExtinguisher className="text-orange-500 h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Fire Insurance</CardTitle>
              <CardDescription className="text-center">Protect your property from fire and related perils.</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">Have questions? Our team is ready to assist you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a 
              href="tel:+919986634506" 
              className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground"
            >
              <Phone className="text-primary h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Call Us</CardTitle>
              <CardDescription className="text-center">+91-9986634506</CardDescription>
            </a>
            <a 
              href="https://maps.app.goo.gl/b1wFEf9wBJ25L4ao9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground"
            >
              <MapPin className="text-primary h-12 w-12 mb-4" />
              <CardTitle className="mb-2">Visit Us</CardTitle>
              <CardDescription className="text-center">123 Insurance St, Suite 100, City, Country</CardDescription>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2004 - {currentYear} Insurance Support. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;