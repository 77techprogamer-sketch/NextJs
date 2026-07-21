export type CalculatorEngineType = 'lic' | 'sip' | 'fd' | 'fitness' | 'financial' | 'pension' | 'generic' | 'ppf' | 'hra' | 'incomeTax' | 'ulip' | 'termInsurance' | 'vehicleInsurance' | 'healthInsurance' | 'emi' | 'gst' | 'gratuity' | 'compoundInterest' | 'travelInsurance' | 'humanLifeValue';

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
  {
    "id": "lic-surrender-value-calculator",
    "slug": "lic-surrender-value-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Surrender Value Calculator",
    "engineType": "lic",
    "description": "Use our LIC Surrender Value Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Surrender Value Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic surrender value calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-jeevan-labh-surrender-value-calculator",
    "slug": "lic-jeevan-labh-surrender-value-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Jeevan Labh Surrender Value Calculator",
    "engineType": "lic",
    "description": "Use our LIC Jeevan Labh Surrender Value Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Jeevan Labh Surrender Value Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic jeevan labh surrender value calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-jeevan-saral-surrender-value-calculator",
    "slug": "lic-jeevan-saral-surrender-value-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Jeevan Saral Surrender Value Calculator",
    "engineType": "lic",
    "description": "Use our LIC Jeevan Saral Surrender Value Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Jeevan Saral Surrender Value Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic jeevan saral surrender value calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-ulip-calculator",
    "slug": "lic-ulip-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC ULIP Calculator",
    "engineType": "lic",
    "description": "Use our LIC ULIP Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC ULIP Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic ulip calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-amritbaal-premium-calculator",
    "slug": "lic-amritbaal-premium-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Amritbaal Premium Calculator",
    "engineType": "lic",
    "description": "Use our LIC Amritbaal Premium Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Amritbaal Premium Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic amritbaal premium calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-new-jeevan-shanti-calculator",
    "slug": "lic-new-jeevan-shanti-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC New Jeevan Shanti Calculator",
    "engineType": "lic",
    "description": "Use our LIC New Jeevan Shanti Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC New Jeevan Shanti Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic new jeevan shanti calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-jeevan-utsav-calculator",
    "slug": "lic-jeevan-utsav-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Jeevan Utsav Calculator",
    "engineType": "lic",
    "description": "Use our LIC Jeevan Utsav Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Jeevan Utsav Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic jeevan utsav calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-premium-payment-late-fee-calculator",
    "slug": "lic-premium-payment-late-fee-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Premium Payment Late Fee Calculator",
    "engineType": "lic",
    "description": "Use our LIC Premium Payment Late Fee Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Premium Payment Late Fee Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic premium payment late fee calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-nivesh-plus-return-calculator",
    "slug": "lic-nivesh-plus-return-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Nivesh Plus Return Calculator",
    "engineType": "lic",
    "description": "Use our LIC Nivesh Plus Return Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Nivesh Plus Return Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic nivesh plus return calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-child-money-back-plan-calculator",
    "slug": "lic-child-money-back-plan-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Child Money Back Plan Calculator",
    "engineType": "lic",
    "description": "Use our LIC Child Money Back Plan Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Child Money Back Plan Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic child money back plan calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-pension-plan-calculator",
    "slug": "lic-pension-plan-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Pension Plan Calculator",
    "engineType": "lic",
    "description": "Use our LIC Pension Plan Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Pension Plan Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic pension plan calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-yuva-term-plan-calculator",
    "slug": "lic-yuva-term-plan-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Yuva Term Plan Calculator",
    "engineType": "lic",
    "description": "Use our LIC Yuva Term Plan Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Yuva Term Plan Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic yuva term plan calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-index-plus-premium-and-maturity-calculator",
    "slug": "lic-index-plus-premium-and-maturity-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Index Plus Premium and Maturity Calculator",
    "engineType": "lic",
    "description": "Use our LIC Index Plus Premium and Maturity Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Index Plus Premium and Maturity Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic index plus premium and maturity calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-1-crore-policy-premium-calculator",
    "slug": "lic-1-crore-policy-premium-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC 1 Crore Policy Premium Calculator",
    "engineType": "lic",
    "description": "Use our LIC 1 Crore Policy Premium Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC 1 Crore Policy Premium Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic 1 crore policy premium calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-jeevan-chhaya-plan-103-maturity-calculator",
    "slug": "lic-jeevan-chhaya-plan-103-maturity-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Jeevan Chhaya Plan 103 Maturity Calculator",
    "engineType": "lic",
    "description": "Use our LIC Jeevan Chhaya Plan 103 Maturity Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Jeevan Chhaya Plan 103 Maturity Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic jeevan chhaya plan 103 maturity calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-hfl-loan-calculator",
    "slug": "lic-hfl-loan-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC HFL Loan Calculator",
    "engineType": "lic",
    "description": "Use our LIC HFL Loan Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC HFL Loan Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic hfl loan calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "lic-bonus-calculator",
    "slug": "lic-bonus-calculator",
    "category": "lic",
    "categoryName": "LIC",
    "title": "LIC Bonus Calculator",
    "engineType": "lic",
    "description": "Use our LIC Bonus Calculator to calculate values accurately and instantly online.",
    "seoTitle": "LIC Bonus Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your lic bonus calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "sip-calculator",
    "slug": "sip-calculator",
    "category": "sip",
    "categoryName": "SIP",
    "title": "SIP Calculator",
    "engineType": "sip",
    "description": "Use our SIP Calculator to calculate values accurately and instantly online.",
    "seoTitle": "SIP Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your sip calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "cost-of-delay-calculator",
    "slug": "cost-of-delay-calculator",
    "category": "sip",
    "categoryName": "SIP",
    "title": "Cost of Delay Calculator",
    "engineType": "sip",
    "description": "Use our Cost of Delay Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Cost of Delay Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your cost of delay calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "step-up-sip-calculator",
    "slug": "step-up-sip-calculator",
    "category": "sip",
    "categoryName": "SIP",
    "title": "Step-up SIP Calculator",
    "engineType": "sip",
    "description": "Use our Step-up SIP Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Step-up SIP Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your step-up sip calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "xirr-calculator",
    "slug": "xirr-calculator",
    "category": "sip",
    "categoryName": "SIP",
    "title": "XIRR Calculator",
    "engineType": "sip",
    "description": "Use our XIRR Calculator to calculate values accurately and instantly online.",
    "seoTitle": "XIRR Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your xirr calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "swp-calculator",
    "slug": "swp-calculator",
    "category": "sip",
    "categoryName": "SIP",
    "title": "SWP Calculator",
    "engineType": "sip",
    "description": "Use our SWP Calculator to calculate values accurately and instantly online.",
    "seoTitle": "SWP Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your swp calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "fd-calculator",
    "slug": "fd-calculator",
    "category": "fd",
    "categoryName": "FD",
    "title": "FD Calculator",
    "engineType": "fd",
    "description": "Use our FD Calculator to calculate values accurately and instantly online.",
    "seoTitle": "FD Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your fd calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "fd-premature-withdrawal-penalty-calculator",
    "slug": "fd-premature-withdrawal-penalty-calculator",
    "category": "fd",
    "categoryName": "FD",
    "title": "FD Premature Withdrawal Penalty Calculator",
    "engineType": "fd",
    "description": "Use our FD Premature Withdrawal Penalty Calculator to calculate values accurately and instantly online.",
    "seoTitle": "FD Premature Withdrawal Penalty Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your fd premature withdrawal penalty calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "monthly-payout-fd-calculator",
    "slug": "monthly-payout-fd-calculator",
    "category": "fd",
    "categoryName": "FD",
    "title": "Monthly Payout FD Calculator",
    "engineType": "fd",
    "description": "Use our Monthly Payout FD Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Monthly Payout FD Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your monthly payout fd calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "income-tax-calculator",
    "slug": "income-tax-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "Income Tax Calculator",
    "engineType": "financial",
    "description": "Use our Income Tax Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Income Tax Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your income tax calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "hra-calculator",
    "slug": "hra-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "HRA Calculator",
    "engineType": "financial",
    "description": "Use our HRA Calculator to calculate values accurately and instantly online.",
    "seoTitle": "HRA Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your hra calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "gst-calculator",
    "slug": "gst-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "GST Calculator",
    "engineType": "financial",
    "description": "Use our GST Calculator to calculate values accurately and instantly online.",
    "seoTitle": "GST Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your gst calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "gratuity-calculator",
    "slug": "gratuity-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "Gratuity Calculator",
    "engineType": "financial",
    "description": "Use our Gratuity Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Gratuity Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your gratuity calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "education-loan-emi-calculator",
    "slug": "education-loan-emi-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "Education Loan EMI Calculator",
    "engineType": "financial",
    "description": "Use our Education Loan EMI Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Education Loan EMI Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your education loan emi calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "nri-income-tax-calculator",
    "slug": "nri-income-tax-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "NRI Income Tax Calculator",
    "engineType": "financial",
    "description": "Use our NRI Income Tax Calculator to calculate values accurately and instantly online.",
    "seoTitle": "NRI Income Tax Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your nri income tax calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "post-office-rd-calculator",
    "slug": "post-office-rd-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "Post Office RD Calculator",
    "engineType": "financial",
    "description": "Use our Post Office RD Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Post Office RD Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your post office rd calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "compound-interest-calculator",
    "slug": "compound-interest-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "Compound Interest Calculator",
    "engineType": "financial",
    "description": "Use our Compound Interest Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Compound Interest Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your compound interest calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "nps-vatsalya-calculator",
    "slug": "nps-vatsalya-calculator",
    "category": "investment",
    "categoryName": "Investment / Financial Tools",
    "title": "NPS Vatsalya Calculator",
    "engineType": "financial",
    "description": "Use our NPS Vatsalya Calculator to calculate values accurately and instantly online.",
    "seoTitle": "NPS Vatsalya Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your nps vatsalya calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "nps-calculator",
    "slug": "nps-calculator",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "NPS Calculator",
    "engineType": "pension",
    "description": "Use our NPS Calculator to calculate values accurately and instantly online.",
    "seoTitle": "NPS Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your nps calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "nps-calculator-for-government-employees",
    "slug": "nps-calculator-for-government-employees",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "NPS Calculator for Government Employees",
    "engineType": "pension",
    "description": "Use our NPS Calculator for Government Employees to calculate values accurately and instantly online.",
    "seoTitle": "NPS Calculator for Government Employees 2026 | Free Online Tool",
    "seoDescription": "Calculate your nps calculator for government employees easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "post-office-nps-calculator",
    "slug": "post-office-nps-calculator",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "Post Office NPS Calculator",
    "engineType": "pension",
    "description": "Use our Post Office NPS Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Post Office NPS Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your post office nps calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "retirement-calculator",
    "slug": "retirement-calculator",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "Retirement Calculator",
    "engineType": "pension",
    "description": "Use our Retirement Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Retirement Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your retirement calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "epf-calculator",
    "slug": "epf-calculator",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "EPF Calculator",
    "engineType": "pension",
    "description": "Use our EPF Calculator to calculate values accurately and instantly online.",
    "seoTitle": "EPF Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your epf calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "annuity-calculator",
    "slug": "annuity-calculator",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "Annuity Calculator",
    "engineType": "pension",
    "description": "Use our Annuity Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Annuity Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your annuity calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "pvifa-calculator",
    "slug": "pvifa-calculator",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "PVIFA Calculator",
    "engineType": "pension",
    "description": "Use our PVIFA Calculator to calculate values accurately and instantly online.",
    "seoTitle": "PVIFA Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your pvifa calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "tata-aia-pension-calculator",
    "slug": "tata-aia-pension-calculator",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "Tata AIA Pension Calculator",
    "engineType": "pension",
    "description": "Use our Tata AIA Pension Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Tata AIA Pension Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your tata aia pension calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "apy-calculator-bank-of-baroda",
    "slug": "apy-calculator-bank-of-baroda",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "APY Calculator - Bank of Baroda",
    "engineType": "pension",
    "description": "Use our APY Calculator - Bank of Baroda to calculate values accurately and instantly online.",
    "seoTitle": "APY Calculator - Bank of Baroda 2026 | Free Online Tool",
    "seoDescription": "Calculate your apy calculator - bank of baroda easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "apy-calculator-hdfc-bank",
    "slug": "apy-calculator-hdfc-bank",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "APY Calculator - HDFC Bank",
    "engineType": "pension",
    "description": "Use our APY Calculator - HDFC Bank to calculate values accurately and instantly online.",
    "seoTitle": "APY Calculator - HDFC Bank 2026 | Free Online Tool",
    "seoDescription": "Calculate your apy calculator - hdfc bank easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "apy-calculator-axis-bank",
    "slug": "apy-calculator-axis-bank",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "APY Calculator - Axis Bank",
    "engineType": "pension",
    "description": "Use our APY Calculator - Axis Bank to calculate values accurately and instantly online.",
    "seoTitle": "APY Calculator - Axis Bank 2026 | Free Online Tool",
    "seoDescription": "Calculate your apy calculator - axis bank easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "hdfc-nps-calculator",
    "slug": "hdfc-nps-calculator",
    "category": "pension",
    "categoryName": "Pension / Retirement",
    "title": "HDFC NPS Calculator",
    "engineType": "pension",
    "description": "Use our HDFC NPS Calculator to calculate values accurately and instantly online.",
    "seoTitle": "HDFC NPS Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your hdfc nps calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "bmi-calculator",
    "slug": "bmi-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "BMI Calculator",
    "engineType": "fitness",
    "description": "Use our BMI Calculator to calculate values accurately and instantly online.",
    "seoTitle": "BMI Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your bmi calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "calorie-calculator",
    "slug": "calorie-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "Calorie Calculator",
    "engineType": "fitness",
    "description": "Use our Calorie Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Calorie Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your calorie calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "macro-calculator",
    "slug": "macro-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "Macro Calculator",
    "engineType": "fitness",
    "description": "Use our Macro Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Macro Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your macro calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "due-date-calculator",
    "slug": "due-date-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "Due Date Calculator",
    "engineType": "fitness",
    "description": "Use our Due Date Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Due Date Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your due date calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "pregnancy-weight-gain-calculator",
    "slug": "pregnancy-weight-gain-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "Pregnancy Weight Gain Calculator",
    "engineType": "fitness",
    "description": "Use our Pregnancy Weight Gain Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Pregnancy Weight Gain Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your pregnancy weight gain calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "pregnancy-conception-calculator",
    "slug": "pregnancy-conception-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "Pregnancy Conception Calculator",
    "engineType": "fitness",
    "description": "Use our Pregnancy Conception Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Pregnancy Conception Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your pregnancy conception calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "ovulation-calculator",
    "slug": "ovulation-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "Ovulation Calculator",
    "engineType": "fitness",
    "description": "Use our Ovulation Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Ovulation Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your ovulation calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "bmr-calculator",
    "slug": "bmr-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "BMR Calculator",
    "engineType": "fitness",
    "description": "Use our BMR Calculator to calculate values accurately and instantly online.",
    "seoTitle": "BMR Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your bmr calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "body-fat-calculator",
    "slug": "body-fat-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "Body Fat Calculator",
    "engineType": "fitness",
    "description": "Use our Body Fat Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Body Fat Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your body fat calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "ideal-weight-calculator",
    "slug": "ideal-weight-calculator",
    "category": "fitness",
    "categoryName": "Fitness / Health Wellness",
    "title": "Ideal Weight Calculator",
    "engineType": "fitness",
    "description": "Use our Ideal Weight Calculator to calculate values accurately and instantly online.",
    "seoTitle": "Ideal Weight Calculator 2026 | Free Online Tool",
    "seoDescription": "Calculate your ideal weight calculator easily with our free online calculator. Get accurate estimates instantly without registration."
  },
  {
    "id": "ppf-calculator",
    "slug": "ppf-calculator",
    "category": "savings",
    "categoryName": "Savings & Investment",
    "title": "PPF Calculator",
    "engineType": "ppf",
    "description": "Calculate your Public Provident Fund (PPF) maturity value and interest earned with our free online calculator.",
    "seoTitle": "PPF Calculator 2026 | Public Provident Fund | Free Online Tool",
    "seoDescription": "Calculate PPF maturity amount, interest earned, and yearly breakdown. Current PPF rate 7.1% p.a. Free online calculator."
  },
  {
    "id": "hra-calculator",
    "slug": "hra-calculator",
    "category": "tax",
    "categoryName": "Tax Calculators",
    "title": "HRA Calculator",
    "engineType": "hra",
    "description": "Calculate your House Rent Allowance (HRA) exemption and save taxes on rent paid.",
    "seoTitle": "HRA Calculator 2026 | House Rent Allowance Exemption | Free Tool",
    "seoDescription": "Calculate HRA exemption as per Income Tax Act. Minimum of actual HRA, rent minus 10% of basic, or 50% basic (metro). Free online tool."
  },
  {
    "id": "travel-insurance-calculator",
    "slug": "travel-insurance-calculator",
    "category": "insurance",
    "categoryName": "Insurance Calculators",
    "title": "Travel Insurance Calculator",
    "engineType": "travelInsurance",
    "description": "Estimate your travel insurance premium based on destination, trip duration, and number of travelers.",
    "seoTitle": "Travel Insurance Calculator | Premium Estimate for Trip 2026",
    "seoDescription": "Calculate travel insurance premium for international trips. Covers Schengen, USA, Europe, Asia. Free estimate tool."
  },
  {
    "id": "emi-calculator",
    "slug": "emi-calculator",
    "category": "loan",
    "categoryName": "Loan Calculators",
    "title": "EMI Calculator",
    "engineType": "emi",
    "description": "Calculate your Equated Monthly Installment (EMI) for home, car, personal, and education loans.",
    "seoTitle": "EMI Calculator 2026 | Home, Car, Personal Loan EMI Free Tool",
    "seoDescription": "Calculate loan EMI with amortization schedule. Works for home loan, car loan, personal loan. Free online EMI calculator."
  },
  {
    "id": "ulip-calculator",
    "slug": "ulip-calculator",
    "category": "insurance",
    "categoryName": "Insurance Calculators",
    "title": "ULIP Calculator",
    "engineType": "ulip",
    "description": "Estimate your ULIP fund value, returns, and life cover. Compare with other investment options.",
    "seoTitle": "ULIP Calculator 2026 | Unit Linked Insurance Plan Returns | Free Tool",
    "seoDescription": "Calculate ULIP returns, fund value, and effective IRR. Includes life cover estimate and fund management charges. Free online calculator."
  },
  {
    "id": "term-insurance-calculator",
    "slug": "term-insurance-calculator",
    "category": "insurance",
    "categoryName": "Insurance Calculators",
    "title": "Term Insurance Calculator",
    "engineType": "termInsurance",
    "description": "Calculate your ideal term insurance coverage based on income, liabilities, and dependents.",
    "seoTitle": "Term Insurance Calculator 2026 | How Much Cover Do You Need?",
    "seoDescription": "Calculate how much term insurance you need based on HLV method. Factor in income, loans, dependents. Free online tool."
  },
  {
    "id": "human-life-value-calculator",
    "slug": "human-life-value-calculator",
    "category": "insurance",
    "categoryName": "Insurance Calculators",
    "title": "Human Life Value Calculator",
    "engineType": "humanLifeValue",
    "description": "Determine the financial value of your life to estimate the right insurance coverage.",
    "seoTitle": "Human Life Value Calculator | How Much Life Insurance Do You Need?",
    "seoDescription": "Calculate your Human Life Value (HLV) based on future income, expenses, liabilities, and goals. Free online tool."
  },
  {
    "id": "car-insurance-calculator",
    "slug": "car-insurance-calculator",
    "category": "insurance",
    "categoryName": "Insurance Calculators",
    "title": "Car Insurance Calculator",
    "engineType": "vehicleInsurance",
    "description": "Estimate your car insurance premium based on IDV, age, CC, and NCB.",
    "seoTitle": "Car Insurance Calculator 2026 | Premium Estimate for Your Car",
    "seoDescription": "Calculate car insurance premium based on IDV, vehicle age, engine capacity, and No Claim Bonus. Free estimate tool."
  },
  {
    "id": "bike-insurance-calculator",
    "slug": "bike-insurance-calculator",
    "category": "insurance",
    "categoryName": "Insurance Calculators",
    "title": "Bike Insurance Calculator",
    "engineType": "vehicleInsurance",
    "description": "Estimate your two-wheeler insurance premium based on IDV, age, and CC.",
    "seoTitle": "Bike Insurance Calculator 2026 | Two-Wheeler Premium Estimate",
    "seoDescription": "Calculate bike insurance premium based on IDV, vehicle age, and engine capacity. Free online estimate tool."
  },
  {
    "id": "health-insurance-calculator",
    "slug": "health-insurance-calculator",
    "category": "insurance",
    "categoryName": "Insurance Calculators",
    "title": "Health Insurance Premium Calculator",
    "engineType": "healthInsurance",
    "description": "Estimate your health insurance premium for family floater and individual plans.",
    "seoTitle": "Health Insurance Premium Calculator 2026 | Family Floater Estimate",
    "seoDescription": "Calculate health insurance premium based on age, sum insured, family size. Works for family floater and individual plans."
  },
  {
    "id": "gst-calculator",
    "slug": "gst-calculator",
    "category": "tax",
    "categoryName": "Tax Calculators",
    "title": "GST Calculator",
    "engineType": "gst",
    "description": "Add or remove GST from any amount. Supports 5%, 12%, 18%, and 28% rates.",
    "seoTitle": "GST Calculator India 2026 | Add or Remove GST | Free Tool",
    "seoDescription": "Calculate GST amount for any value. Add GST to base price or remove GST from inclusive price. Supports all GST slabs."
  },
  {
    "id": "gratuity-calculator",
    "slug": "gratuity-calculator",
    "category": "tax",
    "categoryName": "Tax Calculators",
    "title": "Gratuity Calculator",
    "engineType": "gratuity",
    "description": "Calculate your gratuity amount as per Payment of Gratuity Act, 1972.",
    "seoTitle": "Gratuity Calculator 2026 | Payment of Gratuity Act | Free Tool",
    "seoDescription": "Calculate gratuity amount based on last drawn salary and years of service. As per Payment of Gratuity Act, 1972."
  },
  {
    "id": "compound-interest-calculator",
    "slug": "compound-interest-calculator",
    "category": "savings",
    "categoryName": "Savings & Investment",
    "title": "Compound Interest Calculator",
    "engineType": "compoundInterest",
    "description": "See how your money grows with compound interest. Compare different compounding frequencies.",
    "seoTitle": "Compound Interest Calculator 2026 | Power of Compounding | Free Tool",
    "seoDescription": "Calculate compound interest with different compounding frequencies - monthly, quarterly, half-yearly, annually. Free online tool."
  },
  {
    "id": "lumpsum-calculator",
    "slug": "lumpsum-calculator",
    "category": "savings",
    "categoryName": "Savings & Investment",
    "title": "Lumpsum Calculator",
    "engineType": "financial",
    "description": "Calculate the future value of a one-time lumpsum investment.",
    "seoTitle": "Lumpsum Calculator 2026 | One-Time Investment Returns | Free Tool",
    "seoDescription": "Calculate future value of lumpsum mutual fund or FD investment. Enter amount, expected return, and time period."
  },
  {
    "id": "savings-calculator",
    "slug": "savings-calculator",
    "category": "savings",
    "categoryName": "Savings & Investment",
    "title": "Savings Calculator",
    "engineType": "financial",
    "description": "Estimate interest earned on your savings account and total earnings over time.",
    "seoTitle": "Savings Calculator 2026 | Savings Account Interest | Free Tool",
    "seoDescription": "Calculate savings account interest and total balance. Factor in regular deposits and compounding. Free online tool."
  },
  {
    "id": "life-insurance-calculator",
    "slug": "life-insurance-calculator",
    "category": "insurance",
    "categoryName": "Insurance Calculators",
    "title": "Life Insurance Calculator",
    "engineType": "termInsurance",
    "description": "Calculate how much life insurance coverage you need to protect your family.",
    "seoTitle": "Life Insurance Calculator 2026 | Coverage Needs Assessment",
    "seoDescription": "Determine the right life insurance coverage based on your income, expenses, debts, and family needs. Free online tool."
  }
];