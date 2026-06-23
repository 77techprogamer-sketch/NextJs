import React from "react";
import { Metadata } from "next";
import ComparisonHero from "@/components/comparisons/ComparisonHero";
import ComparisonTable, { ComparisonRow } from "@/components/comparisons/ComparisonTable";

export const metadata: Metadata = {
  title: "ICICI Lombard vs Digit Insurance (2026) | Insurance Support",
  description: "Compare ICICI Lombard with Digit Insurance. ICICI Lombard wins on claim settlement, network size, product range, and experience.",
  keywords: "ICICI Lombard vs Digit, Digit vs ICICI Lombard, best general insurance India"
};

export default function IciciVsDigitPage() {
  const rows: ComparisonRow[] = [
    { label: "Claim Settlement Ratio (IRDAI 2024-25)", values: ["97.5%", "95.2%"], highlightWinner: 0 },
    { label: "Years of Operation", values: ["24+ Years (Since 2001)", "8+ Years (Since 2017)"], highlightWinner: 0 },
    { label: "Customer Base", values: ["7 Crore+", "7 Crore+"], highlightWinner: 2 },
    { label: "Cashless Hospital Network", values: ["10,000+ Hospitals", "5,000+ Hospitals"], highlightWinner: 0 },
    { label: "Network Garages (Motor)", values: ["5,000+ Garages", "2,500+ Garages"], highlightWinner: 0 },
    { label: "Product Range", values: ["Comprehensive (10+ categories)", "Focused (Health, Motor, Travel, Home)"], highlightWinner: 0 },
    { label: "Branch Network", values: ["300+ Branches", "150+ Branches"], highlightWinner: 0 },
    { label: "Premium Competitiveness (Health)", values: ["Competitive", "Aggressive (10-15% lower)"], highlightWinner: 1 },
    { label: "Premium Competitiveness (Motor)", values: ["Competitive", "Aggressive (5-10% lower)"], highlightWinner: 1 },
    { label: "Digital Experience & App", values: ["iProtect Smart App", "Digit App (Modern UI)"], highlightWinner: 2 },
    { label: "Customer Service Response", values: ["4-12 Hours", "1-4 Hours"], highlightWinner: 1 },
    { label: "Rural/Semi-Urban Reach", values: ["300+ Branches", "Limited (Digital First)"], highlightWinner: 0 },
    { label: "Claim Processing Speed", values: ["4-12 Hours", "2-6 Hours"], highlightWinner: 1 },
    { label: "Financial Strength (Backing)", values: ["ICICI Bank (AA+)", "Well Capitalized"], highlightWinner: 0 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <ComparisonHero
        title={<>ICICI Lombard <span className="text-primary">vs</span> Digit Insurance</>}
        subtitle="ICICI Lombard 24+ Year Track Record and 10,000+ Hospital Network vs Digit Digital-First Approach"
        benefits={["IRDAI Verified Data", "7 Crore+ Customers Each", "10,000+ vs 5,000 Hospitals"]}
        ctaText="Get Expert Policy Review"
        ctaLink="/contact"
      />
      <div className="container mx-auto px-4 max-w-5xl -mt-6">
        <ComparisonTable rows={rows} headers={["ICICI Lombard", "Digit Insurance"]} />
      </div>
      <div className="container mx-auto px-4 max-w-5xl mt-16 prose prose-slate max-w-none">
        <h2>Introduction: Established Leader vs Digital Native</h2>
        <p>Digit Insurance, founded in 2017, has rapidly grown to become one of India largest general insurers with 7 crore+ customers, matching ICICI Lombard in customer count. However, ICICI Lombard holds significant advantages in claim settlement ratio, network size, and operational experience that Digit is still building.</p>
        
        <h3>1. Claim Settlement Ratio: ICICI Lombard 2.3% Lead</h3>
        <p>ICICI Lombard 97.5% claim settlement ratio significantly exceeds Digit 95.2% (FY 2024-25). This 2.3 percentage point difference means ICICI Lombard settles approximately 23 more claims per 1,000. Over lakhs of claims annually, this translates to thousands more families receiving their full benefits from ICICI Lombard.</p>
        
        <h3>2. Cashless Hospital Network: 10,000+ vs 5,000+</h3>
        <p>ICICI Lombard 10,000+ cashless hospital network is double Digit 5,000+ network. This means ICICI Lombard policyholders have access to cashless treatment at virtually any major hospital. Digit network, while growing rapidly, still has gaps in smaller cities where ICICI Lombard has established presence.</p>
        
        <h3>3. Product Range: Comprehensive vs Focused</h3>
        <p>ICICI Lombard offers comprehensive coverage across 10+ categories including health, motor, travel, home, personal accident, engineering, marine, liability, crop, and cyber insurance. Digit focuses on health, motor, travel, and home insurance. For customers seeking a one-stop solution, ICICI Lombard is the clear choice.</p>
        
        <h3>4. 5,000+ Network Garages vs 2,500+</h3>
        <p>ICICI Lombard 5,000+ network garages ensure cashless repairs are available in virtually any city. Digit 2,500+ garages, while impressive for a company founded in 2017, still have coverage gaps in smaller towns where ICICI Lombard has established presence.</p>
        
        <h3>5. 24+ Years of Operational Experience</h3>
        <p>ICICI Lombard 24+ years of experience provides a significant advantage in claims management, underwriting, and risk assessment. Digit, founded in 2017, has only 8+ years of experience. This experience translates to more robust claims processing systems and better loss ratios for ICICI Lombard.</p>
        
        <h3>6. Where Digit Has Competitive Advantages</h3>
        <p>Digit has genuine strengths that deserve acknowledgment:</p>
        <ul>
          <li><strong>Competitive Premiums:</strong> Digit offers 10-15% lower premiums on health and motor insurance, particularly for younger customers.</li>
          <li><strong>Digital Experience:</strong> Digit app offers a modern, intuitive user interface with seamless policy management.</li>
          <li><strong>Faster Claim Processing:</strong> Digit digital-first approach enables claim processing in 2-6 hours vs ICICI Lombard 4-12 hours.</li>
          <li><strong>Product Innovation:</strong> Digit has introduced innovative products like pay-as-you-drive motor insurance.</li>
        </ul>
        
        <h3>7. Who Should Choose ICICI Lombard Over Digit?</h3>
        <p>Choose ICICI Lombard if you: need the largest cashless hospital network (10,000+), want comprehensive coverage across all general insurance categories, prefer extensive garage network for motor claims (5,000+), value 24+ years of operational track record, and need pan-India presence including smaller cities.</p>
        
        <h3>Conclusion</h3>
        <p>While Digit offers competitive premiums and excellent digital experience, ICICI Lombard advantages in claim settlement ratio (97.5% vs 95.2%), network size (10,000+ hospitals, 5,000+ garages), comprehensive product range, and 24+ year track record make it the more comprehensive choice. For customers who prioritize accessibility and claim settlement over the lowest premium, ICICI Lombard remains the definitive choice.</p>
      </div>
    </div>
  );
}
