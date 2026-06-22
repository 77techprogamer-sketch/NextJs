import json

# Known good data - all 73 calculators from the original file + new ones
# First, let's extract what we know exists and rebuild cleanly

calculators = []

# LIC calculators
lic_calcs = [
    ("lic-surrender-value-calculator", "LIC Surrender Value Calculator", "lic"),
    ("lic-jeevan-labh-surrender-value-calculator", "LIC Jeevan Labh Surrender Value Calculator", "lic"),
    ("lic-jeevan-saral-surrender-value-calculator", "LIC Jeevan Saral Surrender Value Calculator", "lic"),
    ("lic-ulip-calculator", "LIC ULIP Calculator", "lic"),
    ("lic-amritbaal-premium-calculator", "LIC Amritbaal Premium Calculator", "lic"),
    ("lic-new-jeevan-shanti-calculator", "LIC New Jeevan Shanti Calculator", "lic"),
    ("lic-jeevan-akshay-calculator", "LIC Jeevan Akshay Calculator", "lic"),
    ("lic-jeevan-tarun-calculator", "LIC Jeevan Tarun Calculator", "lic"),
    ("lic-jeevan-mitra-calculator", "LIC Jeevan Mitra Calculator", "lic"),
    ("lic-premium-calculator", "LIC Premium Calculator", "lic"),
    ("lic-jeevan-lakshya-calculator", "LIC Jeevan Lakshya Calculator", "lic"),
    ("lic-jeevan-anand-calculator", "LIC Jeevan Anand Calculator", "lic"),
    ("lic-jeevan-shanti-calculator", "LIC Jeevan Shanti Calculator", "lic"),
    ("lic-jeevan-samriddhi-calculator", "LIC Jeevan Samriddhi Calculator", "lic"),
    ("lic-jeevan-mangal-calculator", "LIC Jeevan Mangal Calculator", "lic"),
    ("lic-jeevan-utsav-calculator", "LIC Jeevan Utsav Calculator", "lic"),
    ("lic-jeevan-bima-calculator", "LIC Jeevan Bima Calculator", "lic"),
    ("lic-jeevan-akshay-vi-calculator", "LIC Jeevan Akshay VI Calculator", "lic"),
    ("lic-jeevan-labh-premium-calculator", "LIC Jeevan Labh Premium Calculator", "lic"),
    ("lic-jeevan-saral-premium-calculator", "LIC Jeevan Saral Premium Calculator", "lic"),
    ("lic-jeevan-shanti-premium-calculator", "LIC Jeevan Shanti Premium Calculator", "lic"),
    ("lic-jeevan-anand-premium-calculator", "LIC Jeevan Anand Premium Calculator", "lic"),
    ("lic-jeevan-lakshya-premium-calculator", "LIC Jeevan Lakshya Premium Calculator", "lic"),
    ("lic-jeevan-tarun-premium-calculator", "LIC Jeevan Tarun Premium Calculator", "lic"),
    ("lic-jeevan-mitra-premium-calculator", "LIC Jeevan Mitra Premium Calculator", "lic"),
    ("lic-jeevan-mangal-premium-calculator", "LIC Jeevan Mangal Premium Calculator", "lic"),
    ("lic-jeevan-utsav-premium-calculator", "LIC Jeevan Utsav Premium Calculator", "lic"),
    ("lic-jeevan-bima-premium-calculator", "LIC Jeevan Bima Premium Calculator", "lic"),
    ("lic-jeevan-akshay-vi-premium-calculator", "LIC Jeevan Akshay VI Premium Calculator", "lic"),
    ("lic-jeevan-shanti-surrender-value-calculator", "LIC Jeevan Shanti Surrender Value Calculator", "lic"),
    ("lic-jeevan-anand-surrender-value-calculator", "LIC Jeevan Anand Surrender Value Calculator", "lic"),
    ("lic-jeevan-lakshya-surrender-value-calculator", "LIC Jeevan Lakshya Surrender Value Calculator", "lic"),
    ("lic-jeevan-tarun-surrender-value-calculator", "LIC Jeevan Tarun Surrender Value Calculator", "lic"),
    ("lic-jeevan-mitra-surrender-value-calculator", "LIC Jeevan Mitra Surrender Value Calculator", "lic"),
    ("lic-jeevan-mangal-surrender-value-calculator", "LIC Jeevan Mangal Surrender Value Calculator", "lic"),
    ("lic-jeevan-utsav-surrender-value-calculator", "LIC Jeevan Utsav Surrender Value Calculator", "lic"),
    ("lic-jeevan-bima-surrender-value-calculator", "LIC Jeevan Bima Surrender Value Calculator", "lic"),
    ("lic-jeevan-akshay-vi-surrender-value-calculator", "LIC Jeevan Akshay VI Surrender Value Calculator", "lic"),
    ("lic-jeevan-labh-surrender-value-calculator", "LIC Jeevan Labh Surrender Value Calculator", "lic"),
    ("lic-jeevan-saral-surrender-value-calculator", "LIC Jeevan Saral Surrender Value Calculator", "lic"),
    ("lic-jeevan-shanti-surrender-value-calculator-2", "LIC Jeevan Shanti Surrender Value Calculator", "lic"),
    ("lic-jeevan-anand-surrender-value-calculator-2", "LIC Jeevan Anand Surrender Value Calculator", "lic"),
    ("lic-jeevan-lakshya-surrender-value-calculator-2", "LIC Jeevan Lakshya Surrender Value Calculator", "lic"),
    ("lic-jeevan-tarun-surrender-value-calculator-2", "LIC Jeevan Tarun Surrender Value Calculator", "lic"),
    ("lic-jeevan-mitra-surrender-value-calculator-2", "LIC Jeevan Mitra Surrender Value Calculator", "lic"),
    ("lic-jeevan-mangal-surrender-value-calculator-2", "LIC Jeevan Mangal Surrender Value Calculator", "lic"),
    ("lic-jeevan-utsav-surrender-value-calculator-2", "LIC Jeevan Utsav Surrender Value Calculator", "lic"),
    ("lic-jeevan-bima-surrender-value-calculator-2", "LIC Jeevan Bima Surrender Value Calculator", "lic"),
    ("lic-jeevan-akshay-vi-surrender-value-calculator-2", "LIC Jeevan Akshay VI Surrender Value Calculator", "lic"),
]

for slug, title, engine in lic_calcs:
    calculators.append({
        "id": slug, "slug": slug, "category": "lic", "categoryName": "LIC",
        "title": title, "engineType": engine,
        "description": f"Use our {title} to calculate values accurately and instantly online.",
        "seoTitle": f"{title} 2026 | Free Online Tool",
        "seoDescription": f"Calculate your {title.lower()} easily with our free online calculator. Get accurate estimates instantly without registration."
    })

# Add other categories
other_calcs = [
    ("sip-calculator", "SIP Calculator", "Investment / Financial Tools", "sip"),
    ("fd-calculator", "FD Calculator", "Investment / Financial Tools", "fd"),
    ("ppf-calculator", "PPF Calculator", "Savings & Investment", "ppf"),
    ("sukanya-samriddhi-calculator", "Sukanya Samriddhi Yojana Calculator", "Savings & Investment", "ppf"),
    ("epf-calculator", "EPF Calculator", "Pension / Retirement", "pension"),
    ("nps-calculator", "NPS Calculator", "Pension / Retirement", "pension"),
    ("nps-calculator-for-government-employees", "NPS Calculator for Government Employees", "Pension / Retirement", "pension"),
    ("post-office-nps-calculator", "Post Office NPS Calculator", "Pension / Retirement", "pension"),
    ("hdfc-nps-calculator", "HDFC NPS Calculator", "Pension / Retirement", "pension"),
    ("icici-nps-calculator", "ICICI NPS Calculator", "Pension / Retirement", "pension"),
    ("sbi-nps-calculator", "SBI NPS Calculator", "Pension / Retirement", "pension"),
    ("kotak-nps-calculator", "Kotak NPS Calculator", "Pension / Retirement", "pension"),
    ("axis-nps-calculator", "Axis NPS Calculator", "Pension / Retirement", "pension"),
    ("max-life-nps-calculator", "Max Life NPS Calculator", "Pension / Retirement", "pension"),
    ("birla-sun-life-nps-calculator", "Birla Sun Life NPS Calculator", "Pension / Retirement", "pension"),
    ("lic-nps-calculator", "LIC NPS Calculator", "Pension / Retirement", "pension"),
    ("tata-aia-nps-calculator", "Tata AIA NPS Calculator", "Pension / Retirement", "pension"),
    ("hdfc-life-nps-calculator", "HDFC Life NPS Calculator", "Pension / Retirement", "pension"),
    ("icici-prudential-nps-calculator", "ICICI Prudential NPS Calculator", "Pension / Retirement", "pension"),
    ("sbi-life-nps-calculator", "SBI Life NPS Calculator", "Pension / Retirement", "pension"),
    ("kotak-mahindra-nps-calculator", "Kotak Mahindra NPS Calculator", "Pension / Retirement", "pension"),
    ("axis-max-nps-calculator", "Axis Max NPS Calculator", "Pension / Retirement", "pension"),
    ("max-life-wealth-nps-calculator", "Max Life Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("birla-sun-life-wealth-nps-calculator", "Birla Sun Life Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("lic-wealth-nps-calculator", "LIC Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("tata-aia-wealth-nps-calculator", "Tata AIA Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("hdfc-life-wealth-nps-calculator", "HDFC Life Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("icici-prudential-wealth-nps-calculator", "ICICI Prudential Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("sbi-life-wealth-nps-calculator", "SBI Life Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("kotak-mahindra-wealth-nps-calculator", "Kotak Mahindra Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("axis-max-wealth-nps-calculator", "Axis Max Wealth NPS Calculator", "Pension / Retirement", "pension"),
    ("hra-calculator", "HRA Calculator", "Tax Calculators", "hra"),
    ("income-tax-calculator", "Income Tax Calculator", "Tax Calculators", "incomeTax"),
    ("gst-calculator", "GST Calculator", "Investment / Financial Tools", "gst"),
    ("emi-calculator", "EMI Calculator", "Loan Calculators", "emi"),
    ("home-loan-emi-calculator", "Home Loan EMI Calculator", "Loan Calculators", "emi"),
    ("car-loan-emi-calculator", "Car Loan EMI Calculator", "Loan Calculators", "emi"),
    ("personal-loan-emi-calculator", "Personal Loan EMI Calculator", "Loan Calculators", "emi"),
    ("education-loan-emi-calculator", "Education Loan EMI Calculator", "Loan Calculators", "emi"),
    ("idv-calculator", "IDV Calculator", "Insurance Calculators", "vehicleInsurance"),
    ("term-insurance-calculator", "Term Insurance Calculator", "Insurance Calculators", "termInsurance"),
    ("health-insurance-calculator", "Health Insurance Premium Calculator", "Insurance Calculators", "healthInsurance"),
    ("ulip-calculator", "ULIP Calculator", "Savings & Investment", "ulip"),
    ("compound-interest-calculator", "Compound Interest Calculator", "Investment / Financial Tools", "compoundInterest"),
    ("gratuity-calculator", "Gratuity Calculator", "Pension / Retirement", "gratuity"),
    ("travel-insurance-calculator", "Travel Insurance Calculator", "Insurance Calculators", "travelInsurance"),
    ("human-life-value-calculator", "Human Life Value Calculator", "Insurance Calculators", "humanLifeValue"),
    ("life-insurance-calculator", "Life Insurance Calculator", "Insurance Calculators", "termInsurance"),
    ("savings-calculator", "Savings Calculator", "Savings & Investment", "financial"),
    ("fitness-calculator", "Fitness / Health Calculator", "Fitness / Health Wellness", "fitness"),
    ("bmi-calculator", "BMI Calculator", "Fitness / Health Wellness", "fitness"),
    ("bmr-calculator", "BMR Calculator", "Fitness / Health Wellness", "fitness"),
    ("body-fat-calculator", "Body Fat Calculator", "Fitness / Health Wellness", "fitness"),
    ("calorie-calculator", "Calorie Calculator", "Fitness / Health Wellness", "fitness"),
    ("lean-body-mass-calculator", "Lean Body Mass Calculator", "Fitness / Health Wellness", "fitness"),
    ("ideal-weight-calculator", "Ideal Weight Calculator", "Fitness / Health Wellness", "fitness"),
    ("waist-hip-ratio-calculator", "Waist Hip Ratio Calculator", "Fitness / Health Wellness", "fitness"),
    ("pregnancy-calculator", "Pregnancy Calculator", "Fitness / Health Wellness", "fitness"),
    ("ovulation-calculator", "Ovulation Calculator", "Fitness / Health Wellness", "fitness"),
    ("due-date-calculator", "Due Date Calculator", "Fitness / Health Wellness", "fitness"),
    ("child-height-calculator", "Child Height Calculator", "Fitness / Health Wellness", "fitness"),
    ("blood-alcohol-calculator", "Blood Alcohol Calculator", "Fitness / Health Wellness", "fitness"),
    ("blood-donation-calculator", "Blood Donation Calculator", "Fitness / Health Wellness", "fitness"),
    ("water-intake-calculator", "Water Intake Calculator", "Fitness / Health Wellness", "fitness"),
    ("protein-intake-calculator", "Protein Intake Calculator", "Fitness / Health Wellness", "fitness"),
    ("sleep-calculator", "Sleep Calculator", "Fitness / Health Wellness", "fitness"),
    ("heart-rate-calculator", "Heart Rate Calculator", "Fitness / Health Wellness", "fitness"),
    ("metabolic-age-calculator", "Metabolic Age Calculator", "Fitness / Health Wellness", "fitness"),
    ("smoking-cost-calculator", "Smoking Cost Calculator", "Fitness / Health Wellness", "fitness"),
    ("sunscreen-calculator", "Sunscreen Calculator", "Fitness / Health Wellness", "fitness"),
    ("pension-calculator", "Pension Calculator", "Pension / Retirement", "pension"),
    ("apy-calculator", "Atal Pension Yojana Calculator", "Pension / Retirement", "pension"),
    ("nps-tier-2-calculator", "NPS Tier 2 Calculator", "Pension / Retirement", "pension"),
    ("nps-return-calculator", "NPS Return Calculator", "Pension / Retirement", "pension"),
    ("nps-monthly-pension-calculator", "NPS Monthly Pension Calculator", "Pension / Retirement", "pension"),
    ("nps-tax-savings-calculator", "NPS Tax Savings Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-ppf-calculator", "NPS vs PPF Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-epf-calculator", "NPS vs EPF Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-apr-calculator", "NPS vs APY Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-lic-calculator", "NPS vs LIC Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-ulip-calculator", "NPS vs ULIP Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-mutual-fund-calculator", "NPS vs Mutual Fund Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-fd-calculator", "NPS vs FD Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-elss-calculator", "NPS vs ELSS Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-nsc-calculator", "NPS vs NSC Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-kvp-calculator", "NPS vs KVP Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-sukanya-calculator", "NPS vs Sukanya Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-tax-saver-fd-calculator", "NPS vs Tax Saver FD Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-ppf-calculator-2", "NPS vs PPF Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-epf-calculator-2", "NPS vs EPF Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-apr-calculator-2", "NPS vs APY Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-lic-calculator-2", "NPS vs LIC Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-ulip-calculator-2", "NPS vs ULIP Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-mutual-fund-calculator-2", "NPS vs Mutual Fund Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-fd-calculator-2", "NPS vs FD Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-elss-calculator-2", "NPS vs ELSS Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-nsc-calculator-2", "NPS vs NSC Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-kvp-calculator-2", "NPS vs KVP Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-sukanya-calculator-2", "NPS vs Sukanya Calculator", "Pension / Retirement", "pension"),
    ("nps-vs-tax-saver-fd-calculator-2", "NPS vs Tax Saver FD Calculator", "Pension / Retirement", "pension"),
]

for slug, title, cat_name, engine in other_calcs:
    calculators.append({
        "id": slug, "slug": slug, "category": cat_name.lower().split(" ")[0], "categoryName": cat_name,
        "title": title, "engineType": engine,
        "description": f"Use our {title} to calculate values accurately and instantly online.",
        "seoTitle": f"{title} 2026 | Free Online Tool",
        "seoDescription": f"Calculate your {title.lower()} easily with our free online calculator. Get accurate estimates instantly without registration."
    })

# Deduplicate by slug
seen = set()
unique = []
for c in calculators:
    if c["slug"] not in seen:
        seen.add(c["slug"])
        unique.append(c)

calculators = unique
print(f"Total unique calculators: {len(calculators)}")

# Write the file
ts_content = '''export type CalculatorEngineType = 'lic' | 'sip' | 'fd' | 'fitness' | 'financial' | 'pension' | 'generic' | 'ppf' | 'hra' | 'incomeTax' | 'ulip' | 'termInsurance' | 'vehicleInsurance' | 'healthInsurance' | 'emi' | 'gst' | 'gratuity' | 'compoundInterest' | 'travelInsurance' | 'humanLifeValue';

export interface CalculatorConfig {
  id: string;
  slug: string;
  category: string;
  categoryName: string;
  title: string;
  engineType: CalculatorEngineType;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export const calculatorsConfig: CalculatorConfig[] = [
'''

for i, c in enumerate(calculators):
    ts_content += '  {\n'
    ts_content += f'    "id": "{c["id"]}",\n'
    ts_content += f'    "slug": "{c["slug"]}",\n'
    ts_content += f'    "category": "{c["category"]}",\n'
    ts_content += f'    "categoryName": "{c["categoryName"]}",\n'
    ts_content += f'    "title": "{c["title"]}",\n'
    ts_content += f'    "engineType": "{c["engineType"]}",\n'
    ts_content += f'    "description": "{c["description"]}",\n'
    ts_content += f'    "seoTitle": "{c["seoTitle"]}",\n'
    ts_content += f'    "seoDescription": "{c["seoDescription"]}"\n'
    if i < len(calculators) - 1:
        ts_content += '  },\n'
    else:
        ts_content += '  }\n'

ts_content += '];\n'

with open("/home/kali/insurance-support-next/src/data/calculatorsConfig.ts", "w") as f:
    f.write(ts_content)

print("File written successfully")
