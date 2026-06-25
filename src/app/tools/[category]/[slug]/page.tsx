import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { calculatorsConfig } from '@/data/calculatorsConfig';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import SipCalculatorEngine from '@/components/calculators/SipCalculatorEngine';
import FdCalculatorEngine from '@/components/calculators/FdCalculatorEngine';
import FitnessCalculatorEngine from '@/components/calculators/FitnessCalculatorEngine';
import LicCalculatorEngine from '@/components/calculators/LicCalculatorEngine';
import TaxAndPensionEngine from '@/components/calculators/TaxAndPensionEngine';
import FinancialCalculatorEngine from '@/components/calculators/FinancialCalculatorEngine';
import PpfCalculatorEngine from '@/components/calculators/PpfCalculatorEngine';
import HraCalculatorEngine from '@/components/calculators/HraCalculatorEngine';
import IncomeTaxCalculatorEngine from '@/components/calculators/IncomeTaxCalculatorEngine';
import UlipCalculatorEngine from '@/components/calculators/UlipCalculatorEngine';
import TermInsuranceCalcEngine from '@/components/calculators/TermInsuranceCalcEngine';
import VehicleInsuranceCalcEngine from '@/components/calculators/VehicleInsuranceCalcEngine';
import HealthInsuranceCalcEngine from '@/components/calculators/HealthInsuranceCalcEngine';
import EmiCalculatorEngine from '@/components/calculators/EmiCalculatorEngine';
import GstCalculatorEngine from '@/components/calculators/GstCalculatorEngine';
import GratuityCalculatorEngine from '@/components/calculators/GratuityCalculatorEngine';
import CompoundInterestCalcEngine from '@/components/calculators/CompoundInterestCalcEngine';
import TravelInsuranceCalcEngine from '@/components/calculators/TravelInsuranceCalcEngine';
import HumanLifeValueCalcEngine from '@/components/calculators/HumanLifeValueCalcEngine';

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return calculatorsConfig.map((calc) => ({
    category: calc.category,
    slug: calc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const calculator = calculatorsConfig.find(
    (c) => c.category === params.category && c.slug === params.slug
  );

  if (!calculator) {
    return { title: 'Not Found' };
  }

  return {
    title: calculator.seoTitle,
    description: calculator.seoDescription,
    alternates: {
      canonical: `https://insurancesupport.online/tools/${calculator.category}/${calculator.slug}`,
    },
  };
}

export default function CalculatorPage({ params }: Props) {
  const calculator = calculatorsConfig.find(
    (c) => c.category === params.category && c.slug === params.slug
  );

  if (!calculator) {
    notFound();
  }

  const renderEngine = () => {
    const props = { title: calculator.title, description: calculator.description };
    switch (calculator.engineType) {
      case 'sip':
        return <SipCalculatorEngine {...props} />;
      case 'fd':
        return <FdCalculatorEngine {...props} />;
      case 'fitness':
        return <FitnessCalculatorEngine {...props} />;
      case 'lic':
        return <LicCalculatorEngine {...props} />;
      case 'pension':
        return <TaxAndPensionEngine {...props} />;
      case 'ppf':
        return <PpfCalculatorEngine {...props} />;
      case 'hra':
        return <HraCalculatorEngine {...props} />;
      case 'incomeTax':
        return <IncomeTaxCalculatorEngine {...props} />;
      case 'ulip':
        return <UlipCalculatorEngine {...props} />;
      case 'termInsurance':
        return <TermInsuranceCalcEngine {...props} />;
      case 'vehicleInsurance':
        return <VehicleInsuranceCalcEngine {...props} />;
      case 'healthInsurance':
        return <HealthInsuranceCalcEngine {...props} />;
      case 'emi':
        return <EmiCalculatorEngine {...props} />;
      case 'gst':
        return <GstCalculatorEngine {...props} />;
      case 'gratuity':
        return <GratuityCalculatorEngine {...props} />;
      case 'compoundInterest':
        return <CompoundInterestCalcEngine {...props} />;
      case 'travelInsurance':
        return <TravelInsuranceCalcEngine {...props} />;
      case 'humanLifeValue':
        return <HumanLifeValueCalcEngine {...props} />;
      case 'financial':
      case 'generic':
      default:
        return <FinancialCalculatorEngine {...props} />;
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-4 pt-12 max-w-6xl">
        <nav className="text-xs text-slate-400 mb-8 flex items-center gap-1 uppercase tracking-widest font-bold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary/70">{calculator.title}</span>
        </nav>
      </div>

      {renderEngine()}

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-slate prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900">About {calculator.title}</h2>
          <p className="text-slate-600">
            Our online {calculator.title} is designed to provide you with instant and accurate estimates to help you make informed decisions. 
            Whether you are planning your investments, checking your health metrics, or calculating premium costs, our tool simplifies the complex math into an easy-to-use interface.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-8">Why use this tool?</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Instant Results:</strong> Get immediate calculations without waiting.</li>
            <li><strong>Accuracy:</strong> Powered by standard mathematical formulas and industry benchmarks.</li>
            <li><strong>Privacy First:</strong> No registration or personal data required. All calculations happen right in your browser.</li>
            <li><strong>Free to use:</strong> Access all features completely free of charge, anytime.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
