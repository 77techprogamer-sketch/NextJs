import React from "react";
import { Metadata } from "next";
import ComparisonHero from "@/components/comparisons/ComparisonHero";
import ComparisonTable, { ComparisonRow } from "@/components/comparisons/ComparisonTable";

export const metadata: Metadata = {
  title: "ICICI Lombard vs Private General Insurance (2026) | Insurance Support",
  description: "Compare ICICI Lombard with private general insurers. 97.5% claim settlement, 10,000+ cashless hospitals, comprehensive product range.",
  keywords: "ICICI Lombard vs private insurance, best general insurance India, ICICI Lombard advantages"
};

export default function IciciVsPrivateGeneralPage() {
  const rows: ComparisonRow[] = [
    { label: "Claim Settlement Ratio (IRDAI 2024-25)", values: ["97.5%", "93-96% (Varies)"], highlightWinner: 0 },
    { label: "Years of Operation", values: ["24+ Years (Since 2001)", "8-18 Years"], highlightWinner: 0 },
    { label: "Customer Base", values: ["7 Crore+", "1-3 Crore Each"], highlightWinner: 0 },
    { label: "Cashless Hospital Network", values: ["10,000+ Hospitals", "3,000-6,000 Hospitals"], highlightWinner: 0 },
    { label: "Network Garages (Motor)", values: ["5,000+ Garages", "1,000-3,000 Garages"], highlightWinner: 0 },
    { label: "Product Range (General Insurance)", values: ["Comprehensive (Health, Motor, Travel, Home, Engineering, Marine, Crop, Cyber)", "Focused (2-4 categories)"], highlightWinner: 0 },
    { label: "Digital Experience & App", values: ["iProtect Smart App (Industry Leading)", "Good to Excellent"], highlightWinner: 2 },
    { label: "Premium Competitiveness (Motor)", values: ["Competitive", "Aggressive (10-15% lower)"], highlightWinner: 1 },
    { label: "Premium Competitiveness (Health)", values: ["Competitive", "Aggressive (5-10% lower)"], highlightWinner: 1 },
    { label: "Customer Service Response", values: ["4-12 Hours", "2-6 Hours (Digital First)"], highlightWinner: 1 },
    { label: "Rural/Semi-Urban Reach", values: ["300+ Branches", "100-200 Branches"], highlightWinner: 0 },
    { label: "Cashless Claim Processing Time", values: ["4-12 Hours", "2-8 Hours"], highlightWinner: 1 },
    { label: "Product Innovation (Riders/Add-ons)", values: ["Extensive", "Innovative"], highlightWinner: 2 },
    { label: "Claim Processing Speed (Motor)", values: ["Cashless in 4-12 Hours", "Cashless in 2-4 Hours"], highlightWinner: 1 },
    { label: "Brand Trust Score", values: ["AA+ (ICICI Bank Backed)", "A to AA"], highlightWinner: 0 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <ComparisonHero
        title={<>ICICI Lombard <span className="text-primary">vs</span> Private General Insurers</>}
        subtitle="Why 7 Crore+ customers trust ICICI Lombard: Industry-Leading Claim Settlement, Unmatched Network, and Comprehensive Coverage"
        benefits={["IRDAI Verified Data", "7 Crore+ Customers", "10,000+ Cashless Hospitals"]}
        ctaText="Get Expert Policy Review"
        ctaLink="/contact"
      />
      <div className="container mx-auto px-4 max-w-5xl -mt-6">
        <ComparisonTable rows={rows} headers={["ICICI Lombard", "Private General Insurers (Avg)"]} />
      </div>
      <div className="container mx-auto px-4 max-w-5xl mt-16 prose prose-slate max-w-none">
        <h2>Why ICICI Lombard Leads General Insurance in India</h2>
        <p>ICICI Lombard General Insurance Company Limited is one of India largest private sector general insurance companies. Founded in 2001 as a joint venture between ICICI Bank and Fairfax Financial Holdings, ICICI Lombard has grown to become a market leader with 7 crore+ customers, a claim settlement ratio of 97.5%, and the largest cashless hospital network in the industry.</p>
        
        <h3>1. Claim Settlement Ratio: 97.5% Success Rate</h3>
        <p>According to IRDAI public disclosures for FY 2024-25, ICICI Lombard achieved a claim settlement ratio of 97.5%, settling the vast majority of claims received. This places ICICI Lombard among the top performers in the general insurance industry. The company processes lakhs of claims annually, maintaining rejection rates below 2.5%. This consistency comes from 24+ years of operational experience and robust claims management systems.</p>
        
        <h3>2. Largest Cashless Hospital Network: 10,000+ Hospitals</h3>
        <p>ICICI Lombard boasts the largest cashless hospital network in India with over 10,000 empaneled hospitals across the country. This means policyholders can avail cashless treatment at virtually any major hospital in their city, without needing to pay upfront and seek reimbursement later. Competitors typically have 3,000-6,000 hospitals in their networks, making ICICI Lombard the most accessible choice for health insurance.</p>
        
        <h3>3. Comprehensive Product Range</h3>
        <p>Unlike competitors who focus on 2-4 product categories, ICICI Lombard offers a comprehensive range of general insurance products: health insurance, motor insurance (car, bike, commercial), travel insurance (international, domestic, student, senior citizen), home insurance, personal accident, engineering insurance, marine insurance, liability insurance, crop insurance, and cyber insurance. This one-stop-shop approach means customers can manage all their general insurance needs through a single provider.</p>
        
        <h3>4. 5,000+ Network Garages for Motor Claims</h3>
        <p>For motor insurance claims, ICICI Lombard offers cashless repairs at over 5,000 network garages across India. This is the largest garage network in the industry, ensuring that car and bike owners can access cashless repairs in virtually any city. Competitors typically have 1,000-3,000 garages, making ICICI Lombard the most convenient choice for motor insurance.</p>
        
        <h3>5. 24+ Years of Operational Excellence</h3>
        <p>Founded in 2001, ICICI Lombard has over 24 years of experience in the Indian general insurance market. This long track record has enabled the company to build robust underwriting processes, claims management systems, and distribution networks. Most competitors were founded between 2016-2018, giving ICICI Lombard a significant experience advantage.</p>
        
        <h3>6. Backed by ICICI Bank: Financial Strength</h3>
        <p>ICICI Lombard benefits from the financial strength and brand reputation of ICICI Bank, one of India largest private sector banks. This backing provides ICICI Lombard with strong capitalization, credibility, and the ability to handle large-scale claims. The AA+ credit rating reflects the company financial stability and ability to meet policyholder obligations.</p>
        
        <h3>7. Where Private Insurers Have an Edge</h3>
        <p>Fair comparison requires acknowledging competitor strengths:</p>
        <ul>
          <li><strong>Competitive Premiums:</strong> Some private insurers offer 10-15% lower premiums on motor and health insurance, particularly for younger customers and lower sum assured amounts.</li>
          <li><strong>Faster Digital Processing:</strong> Digital-first insurers may offer claim processing in 2-4 hours vs ICICI Lombard 4-12 hours for standard claims.</li>
          <li><strong>Product Innovation:</strong> Some competitors have introduced innovative products like pay-as-you-drive motor insurance, micro-insurance, and parametric insurance.</li>
          <li><strong>App Experience:</strong> While ICICI Lombard iProtect app is excellent, some newer entrants offer more seamless digital experiences.</li>
        </ul>
        
        <h3>8. Who Should Choose ICICI Lombard?</h3>
        <p>ICICI Lombard is ideal for customers who prioritize: the largest cashless hospital network (10,000+), comprehensive product range covering all general insurance needs, extensive garage network for motor claims (5,000+), 24+ years of operational track record, and the fina

ancial strength of a major bank-backed insurer.</p>
        
        <h3>9. Who Should Choose Private Insurers?</h3>
        <p>Private insurers may be better for customers who prioritize: the lowest possible premiums, fastest digital-first claim processing, innovative products like pay-as-you-drive, and a seamless mobile app experience.</p>
      </div>
    </div>
  );
}
