
import { Metadata } from 'next';
import Link from 'next/link';
import { Star, Phone, Clock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LIC Policy Revived Without Visiting Any Office - Ravi Kumar',
  description: 'Policy lapsed? Ravi's LIC policy was revived through doorstep service. No office visits needed. Free policy revival assistance.',
  alternates: { canonical: 'https://insurancesupport.online/success-stories/policy-revival-doorstep-service-ravi' },
};

export default function CaseStudyPage() {
  const name = 'Ravi Kumar';
  const service = 'LIC Policy Revival';
  const rating = 5;
  const timeline = '10 Days';
  const story = `Ravi Kumar from Mumbai had let his LIC policy lapse during a financial crunch. When he wanted to revive it, he assumed it would require multiple trips to the LIC branch. "I was pleasantly surprised when Insurance Support offered doorstep service," says Ravi. "They handled everything — filled forms, coordinated with LIC, and even collected documents from my home." The policy was revived within 10 days, restoring his family's financial protection.`;

  return (
    <section className='py-16 md:py-20 bg-white'>
      <div className='container mx-auto px-4 max-w-3xl'>
        <div className='flex items-center gap-2 text-sm text-slate-500 mb-6'>
          <Link href='/' className='hover:text-primary'>Home</Link>
          <span>/</span>
          <Link href='/success-stories' className='hover:text-primary'>Success Stories</Link>
          <span>/</span>
          <span className='text-slate-800 font-medium'>{service}</span>
        </div>
        <div className='inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold mb-4'>
          <Star className='w-4 h-4 fill-amber-500 text-amber-500' />
          <span>{rating}/5 Stars - Client Success Story</span>
        </div>
        <h1 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
          LIC Policy Revived Without Visiting Any Office - Ravi Kumar
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
          <div className='bg-green-50 rounded-xl p-4 text-center'><FileCheck className='w-6 h-6 text-green-600 mx-auto mb-1'/><p className='text-xs text-slate-500'>Status</p><p className='font-bold text-green-700'>Resolved</p></div>
          <div className='bg-blue-50 rounded-xl p-4 text-center'><Clock className='w-6 h-6 text-blue-600 mx-auto mb-1'/><p className='text-xs text-slate-500'>Timeline</p><p className='font-bold text-blue-700'>{timeline}</p></div>
          <div className='bg-amber-50 rounded-xl p-4 text-center'><Star className='w-6 h-6 text-amber-500 mx-auto mb-1 fill-amber-500'/><p className='text-xs text-slate-500'>Rating</p><p className='font-bold text-amber-600'>{rating}/5 Stars</p></div>
          <div className='bg-purple-50 rounded-xl p-4 text-center'><Phone className='w-6 h-6 text-purple-600 mx-auto mb-1'/><p className='text-xs text-slate-500'>Contact</p><p className='font-bold text-purple-700'>+91-9986634506</p></div>
        </div>
        <div className='bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 mb-8'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg'>{name[0]}</div>
            <div><p className='font-bold text-slate-900'>{name}</p><p className='text-sm text-slate-500'>{name} - {service}</p></div>
          </div>
          <p className='text-slate-700 leading-relaxed'>{story}</p>
          <div className='flex gap-1 mt-4'>
            {[...Array(rating)].map((_, i) => <Star key={i} className='w-4 h-4 fill-amber-400 text-amber-400' />)}
            {[...Array(5 - rating)].map((_, i) => <Star key={i} className='w-4 h-4 text-gray-200' />)}
          </div>
        </div>
        <div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center'>
          <h2 className='text-2xl font-bold mb-2'>Need Similar Help?</h2>
          <p className='mb-6 opacity-90'>Get a free, no-obligation consultation with our IRDAI certified team.</p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <a href='tel:+919986634506' className='inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors'>Call Now: +91-9986634506</a>
            <a href='/free-review' className='inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors'>Start Free Policy Review</a>
          </div>
        </div>
      </div>
    </section>
  );
}
