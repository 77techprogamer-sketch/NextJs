import React from "react";
import { Metadata } from "next";
import ComparisonHero from "@/components/comparisons/ComparisonHero";
import ComparisonTable, { ComparisonRow } from "@/components/comparisons/ComparisonTable";

export const metadata: Metadata = {
  title: "ICICI Lombard vs ACKO Insurance (2026) | Insurance Support",
  description: "Compare ICICI Lombard with ACKO. ICICI Lombard wins on product range, network size, claim settlement ratio, and experience.",
  keywords: "ICICI Lombard vs ACKO, ACKO vs ICICI Lombard, best general insurance India"
};

export default function IciciVsAckoPage() {
  const rows: ComparisonRow[] = [
    { label: "Claim Settlement Ratio (IRDAI 2024-25)", values: ["97.5%", "96.8%"], highlightWinner: 0 },
    { label: "Years of Operation", values: ["24+ Years (Since 2001)", "9+ Years (Since 2016)"], highlightWinner: 0 },
    { label: "Customer Base", values: ["7 Crore+", "5 Crore+"], highlightWinner: 0 },
    { label: "Cashless Hospital Network", values: ["10,000+ Hospitals", "4,000+ Hospitals"], highlightWinner: 0 },
    { label: "Network Garages (Motor)", values: ["5,000+ Garages", "2,000+ Garages"], highlightWinner: 0 },
    { label: "Product Range", values: ["Comprehensive (Health, Motor, Travel, Home, Engineering, Marine, Crop, Cyber)", "Focused (Health, Motor, Travel)"], highlightWinner: 0 },
    { label: "Branch Network", values: ["300+ Branches", "100+ Branches"], highlightWinner: 0 },
    { label: "Premium Competitiveness (Health)", values: ["Competitive", "Aggressive (10-15% lower)"], highlightWinner: 1 },
    { label: "Premium Competitiveness (Motor)", values: ["Competitive", "Aggressive (5-10% lower)"], highlightWinner: 1 },
    { label: "Digital Experience & App", values: ["iProtect Smart App", "ACKO App (Modern UI)"], highlightWinner: 2 },
    { label: "Customer Service Response", values: ["4-12 Hours", "1-4 Hours"], highlightWinner: 1 },
    { label: "Rural/Semi-Urban Reach", values: ["300+ Branches", "Limited (Digital First)"], highlightWinner: 0 },
    { label: "Claim Processing Speed", values: ["4-12 Hours", "2-6 Hours"], highlightWinner: 1 },
    { label: "Financial Strength (Backing)", values: ["ICICI Bank (AA+)", "General Insurance (Well Capitalized)"], highlightWinner: 2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <ComparisonHero
        title={<>ICICI Lombard <span className="text-primary">vs</span> ACKO Insurance</>}
        subtitle="ICICI Lombard 24+ Year Track Record and 10,000+ Hospital Network vs ACKO Digital-First Approach"
        benefits={["IRDAI Verified Data", "7 Crore+ vs 5 Crore+ Customers", "10,000+ vs 4,000 Hospitals"]}
        ctaText="Get Expert Policy Review"
        ctaLink="/contact"
      />
      <div className="container mx-auto px-4 max-w-5xl -mt-6">
        <ComparisonTable rows={rows} headers={["ICICI Lombard", "ACKO"]} />
      </div>
      <div className="container mx-auto px-4 max-w-5xl mt-16 prose prose-slate max-w-none">
        <h2>Introduction: Established Leader vs Digital Disruptor</h2>
        <p>ACKO, founded in 2016 as a digital-first general insurance company, has rapidly grown to become one of India largest private general insurers with 5 crore+ customers. However, ICICI Lombard, with 24+ years of experience and 7 crore+ customers, holds significant advantages in network size, product range, and operational track record.</p>
        
        <h3>1. Claim Settlement Ratio: ICICI Lombard Leads</h3>
        <p>ICICI Lombard achieved 97.5% claim settlement ratio (FY 2024-25) compared to ACKO 96.8%. While both are industry-leading figures, ICICI Lombard processes a significantly higher volume of claims (lakhs annually) while maintaining this performance. The 0.7 percentage point difference translates to hundreds more families receiving their full benefits from ICICI Lombard each year.</p>
        
        <h3>2. Cashless Hospital Network: 10,000+ vs 4,000+</h3>
        <p>ICICI Lombard 10,000+ cashless hospital network is more than double ACKO 4,000+ network. This means ICICI Lombard policyholders have access to cashless treatment at virtually any major hospital in their city. ACKO network, while growing rapidly, still has gaps in smaller cities and rural areas where ICICI Lombard has established presence.</p>
        
        <h3>3. Product Range: Comprehensive vs Focused</h3>
        <p>ICICI Lombard offers a comprehensive range of general insurance products covering health, motor, travel, home, personal accident, engineering, marine, liability, crop, and cyber insurance. ACKO focuses primarily on health, motor, and travel insurance. For customers seeking a one-stop solution for all general insurance needs, ICICI Lombard is the clear choice.</p>
        
        <h3>4. 5,000+ Network Garages vs 2,000+</h3>
        <p>For motor insurance claims, ICICI Lombard 5,000+ network garages ensure cashless repairs are available in virtually any city. ACKO 2,000+ garages, while impressive for a company founded in 2016, still have coverage gaps in smaller towns and semi-urban areas where ICICI Lombard has established presence.</p>
        
        <h3>5. 24+ Years of Operational Experience</h3>
        <p>ICICI Lombard 24+ years of experience (since 2001) provides a significant advantage in claims management, underwriting, and risk assessment. ACKO, founded in 2016, has only 9+ years of experience. This experience translates to more robust claims processing systems and better loss ratios for ICICI Lombard.</p>
        
        <h3>6. Where ACKO Has Competitive Advantages</h3>
        <p>ACKO has genuine strengths that deserve acknowledgment:</p>
        <ul>
          <li><strong>Competitive Premiums:</strong> ACKO offers 10-15% lower premiums on health and motor insurance, particularly for younger customers and lower sum assured amounts.</li>
          <li><strong>Digital Experience:</strong> ACKO app offers a modern, intuitive user interface with seamless policy management and claim submission.</li>
          <li><strong>Faster Claim Processing:</strong> ACKO digital-first approach enables claim processing in 2-6 hours vs ICICI Lombard 4-12 hours for standard claims.</li>
          <li><strong>Product Innovation:</strong> ACKO has introduced innovative products like 1-minute bike insurance and simplified health plans.</li>
        </ul>
        
        <h3>7. Who Should Choose ICICI Lombard Over ACKO?</h3>
        <p>Choose ICICI Lombard if you: need the largest cashless hospital network (10,000+), want comprehensive coverage across all general insurance categories, prefer extensive garage network for motor claims (5,000+), value 24+ years of operational track record, and need pan-India presence including smaller cities.</p>
        
        <h3>Conclusion</h3>
        <p>While ACKO offers competitive premiums and excellent digital experience, ICICI Lombard advantages in network size (10,000+ hospitals, 5,000+ garages), comprehensive product range, 24+ year track record, and 97.5% claim settlement ratio make it the more comprehensive choice. For customers who prioritize accessibility and product variety over the lowest premium, ICICI Lombard remains the definitive choice.</p>
      </div>
    </div>
  );
}
