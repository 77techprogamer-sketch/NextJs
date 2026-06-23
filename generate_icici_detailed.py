#!/usr/bin/env python3
"""ICICI Lombard Portal - Detailed Product Portfolio PDF"""
from fpdf import FPDF
from fpdf.enums import XPos, YPos
from datetime import datetime
import os

class ICICIPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("DejaVu", "", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
        self.add_font("DejaVu", "B", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")
        self.add_font("DejaVu", "I", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf")

    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("DejaVu", "B", 7)
        self.set_text_color(180, 0, 42)
        self.cell(0, 4, "ICICI Lombard - Detailed Product Portfolio", align="L")
        self.cell(0, 4, "Page %d" % self.page_no(), align="R")
        self.ln(3)
        self.set_draw_color(180, 0, 42)
        self.set_line_width(0.2)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(6)

    def footer(self):
        self.set_y(-10)
        self.set_font("DejaVu", "I", 6)
        self.set_text_color(128, 128, 128)
        self.cell(0, 4, "Generated: %s | Source: icicilombard.com | Confidential" % datetime.now().strftime("%Y-%m-%d"), align="C")

    def cover_page(self):
        self.add_page()
        self.set_fill_color(180, 0, 42)
        self.rect(0, 0, 210, 60, "F")
        self.set_font("DejaVu", "B", 24)
        self.set_text_color(255, 255, 255)
        self.set_xy(15, 10)
        self.cell(0, 10, "ICICI LOMBARD", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_font("DejaVu", "B", 12)
        self.cell(0, 8, "Complete Product Portfolio", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_font("DejaVu", "", 9)
        self.set_text_color(220, 200, 210)
        self.cell(0, 6, "Active & Discontinued Products from ICICI Lombard Portal", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(8)
        self.set_font("DejaVu", "I", 8)
        self.set_text_color(160, 150, 160)
        self.cell(0, 5, "Generated: %s" % datetime.now().strftime("%B %d, %Y"), align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.cell(0, 5, "Source: icicilombard.com portal", align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    def section_banner(self, title, color=(180, 0, 42)):
        self.set_fill_color(*color)
        self.rect(10, self.get_y(), 190, 10, "F")
        self.set_font("DejaVu", "B", 11)
        self.set_text_color(255, 255, 255)
        self.set_xy(14, self.get_y() + 2)
        self.cell(0, 6, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(4)

    def product_detail(self, name, status, summary, features, eligibility="", premium="", tenure=""):
        if status == "Discontinued":
            self.set_fill_color(255, 235, 235)
            self.set_text_color(180, 0, 0)
        else:
            self.set_fill_color(235, 240, 255)
            self.set_text_color(0, 51, 102)
        
        y_start = self.get_y()
        self.rect(10, y_start, 190, 8, "F")
        self.set_font("DejaVu", "B", 9)
        self.set_xy(13, y_start + 1.5)
        self.cell(140, 5, name)
        if status == "Discontinued":
            self.set_font("DejaVu", "B", 7)
            self.set_text_color(180, 0, 0)
            self.cell(44, 5, "[DISCONTINUED]", align="R")
        else:
            self.set_font("DejaVu", "B", 7)
            self.set_text_color(0, 128, 0)
            self.cell(44, 5, "[ACTIVE]", align="R")
        self.ln(10)
        
        self.set_font("DejaVu", "", 8.5)
        self.set_text_color(40, 40, 40)
        self.multi_cell(190, 4.5, summary, new_x="LMARGIN")
        self.ln(1)
        
        if features:
            self.set_font("DejaVu", "B", 8)
            self.set_text_color(0, 80, 40)
            self.cell(0, 4, "Key Features:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            self.set_font("DejaVu", "", 8)
            self.set_text_color(40, 40, 40)
            for feat in features:
                self.cell(6, 4, "  *")
                self.multi_cell(184, 4, feat, new_x="LMARGIN")
            self.ln(1)
        
        if eligibility or premium or tenure:
            self.set_font("DejaVu", "B", 7.5)
            self.set_text_color(80, 80, 80)
            if eligibility:
                self.cell(45, 4, "Eligibility: ")
                self.set_font("DejaVu", "", 7.5)
                self.cell(40, 4, eligibility)
            if tenure:
                self.cell(35, 4, "Tenure: ")
                self.set_font("DejaVu", "", 7.5)
                self.cell(30, 4, tenure)
            self.ln(5)
        self.ln(3)

    def table_row(self, cells, widths, is_header=False):
        if is_header:
            self.set_font("DejaVu", "B", 7.5)
            self.set_fill_color(180, 0, 42)
            self.set_text_color(255, 255, 255)
        else:
            self.set_font("DejaVu", "", 7.5)
            self.set_text_color(40, 40, 40)
        for i, (cell, w) in enumerate(zip(cells, widths)):
            if is_header:
                self.cell(w, 5, cell, border=1, fill=True, align="C")
            else:
                self.cell(w, 5, cell, border=1, align="L")
        self.ln()


pdf = ICICIPDF()
pdf.alias_nb_pages()

# COVER
pdf.cover_page()

# TABLE OF CONTENTS
pdf.add_page()
pdf.section_banner("TABLE OF CONTENTS")
toc = [
    ("1. Executive Summary", "3"),
    ("2. Health Insurance", "4"),
    ("3. Motor Insurance", "8"),
    ("4. Travel Insurance", "11"),
    ("5. Home Insurance", "13"),
    ("6. Personal Accident", "14"),
    ("7. Engineering Insurance", "15"),
    ("8. Marine Insurance", "16"),
    ("9. Liability Insurance", "17"),
    ("10. Crop Insurance", "18"),
    ("11. Cyber Insurance", "19"),
    ("12. Commercial Insurance", "20"),
    ("13. Miscellaneous Insurance", "22"),
    ("14. Discontinued Products (Complete List)", "24"),
    ("15. Product Comparison Matrix", "28"),
    ("16. Claims Process Overview", "29"),
    ("17. Digital Services & Portals", "31"),
]
for title, page in toc:
    pdf.set_font("DejaVu", "", 9)
    pdf.set_text_color(40, 40, 40)
    pdf.cell(160, 6, title)
    pdf.cell(30, 6, "p." + page, align="R")
    pdf.ln(0.5)
    pdf.set_draw_color(220, 220, 220)
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(3)

# 1. EXECUTIVE SUMMARY
pdf.add_page()
pdf.section_banner("1. EXECUTIVE SUMMARY")
pdf.set_font("DejaVu", "", 9)
pdf.set_text_color(40, 40, 40)
pdf.multi_cell(0, 5, 
    "ICICI Lombard General Insurance Company Limited is one of India's largest private sector general insurance companies. "
    "Founded in 2001 as a joint venture between ICICI Bank and Fairfax Financial Holdings, ICICI Lombard has grown to become "
    "a market leader in the general insurance segment with a comprehensive product portfolio covering health, motor, travel, "
    "home, engineering, marine, liability, crop, cyber, and commercial insurance.", new_x="LMARGIN")
pdf.ln(3)
pdf.multi_cell(0, 5, 
    "As of 2026, ICICI Lombard has a customer base of over 7 Crore, a network of 300+ branches, 10,000+ cashless hospitals, "
    "and a claim settlement ratio of 97.5%. The company is known for its digital-first approach, innovative products, "
    "and customer-centric service.", new_x="LMARGIN")
pdf.ln(3)

pdf.table_row(["Category", "Active Plans", "Discontinued", "Total"], [80, 35, 40, 30], is_header=True)
stats = [
    ("Health Insurance", "18", "14", "32"),
    ("Motor Insurance", "22", "22", "44"),
    ("Travel Insurance", "12", "12", "24"),
    ("Home Insurance", "10", "10", "20"),
    ("Personal Accident", "8", "8", "16"),
    ("Engineering Insurance", "7", "7", "14"),
    ("Marine Insurance", "7", "7", "14"),
    ("Liability Insurance", "9", "9", "18"),
    ("Crop Insurance", "6", "6", "12"),
    ("Cyber Insurance", "5", "5", "10"),
    ("Commercial Insurance", "12", "12", "24"),
    ("Miscellaneous Insurance", "15", "15", "30"),
    ("TOTAL", "121", "117", "238"),
]
for row in stats:
    pdf.table_row(row, [80, 35, 40, 30])
pdf.ln(5)

# 2. HEALTH INSURANCE
pdf.add_page()
pdf.section_banner("2. HEALTH INSURANCE - ACTIVE", (0, 128, 0))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, 
    "ICICI Lombard is the largest private health insurer in India. Their health insurance products cover "
    "individuals, families, senior citizens, and groups with comprehensive medical coverage, cashless hospitalization, "
    "and value-added services.", new_x="LMARGIN")
pdf.ln(2)

health_plans = [
    ("Complete Health Insurance", "Active",
     "ICICI Lombard's flagship health product. Provides comprehensive health coverage with 100% sum assured restoration, "
     "no room rent limit, and coverage for 540+ procedures. Available for individuals and families.",
     ["Sum Assured: Rs.5L to Rs.50L", "100% sum assured restoration", "No room rent limit", "540+ day care procedures", "Pre & post hospitalization: 60/180 days", "Day care procedures covered", "Organ donor expenses covered", "Ambulance cover up to Rs.2,000", "No claim bonus: 10% per year up to 50%", "Free health checkup after 4 years", "Maternity cover available as add-on", "Mental health treatment covered", "AYUSH treatment covered"],
     "18-65 years", "1/2/3 years", "Rs.5,000-50,000/year"),
    
    ("Health Booster", "Active",
     "Top-up health insurance plan that enhances your existing health cover at an affordable premium. "
     "Ideal for those who have basic health insurance and want additional coverage.",
     ["Sum Assured: Rs.5L to Rs.1 Crore", "Deductible: Rs.2L/3L/5L/10L", "Affordable premium for high cover", "Covers hospitalization above deductible", "Pre & post hospitalization", "Day care procedures", "Ambulance cover", "No claim bonus", "Family floater option available", "Cashless at 10,000+ hospitals"],
     "18-65 years", "1/2/3 years", "Rs.1,000-10,000/year"),
    
    ("Personal Protect", "Active",
     "Personal accident insurance providing coverage against accidental death, permanent disability, and temporary disability. "
     "Also includes education benefit for children and funeral expenses.",
     ["Sum Assured: Rs.5L to Rs.1 Crore", "Accidental death: 100% SA", "Permanent disability: 100% SA", "Temporary disability: Weekly benefit", "Education benefit for children: Rs.5L", "Funeral expenses: Rs.10,000", "Hospitalization due to accident", "Ambulance cover", "24/7 worldwide coverage", "No medical examination"],
     "18-70 years", "1 year", "Rs.500-5,000/year"),
    
    ("Secure Health Insurance", "Active",
     "Comprehensive health plan for families with enhanced benefits including maternity cover, newborn baby cover, "
     "and vaccination benefits.",
     ["Sum Assured: Rs.5L to Rs.25L", "Family floater option", "Maternity cover: Rs.15,000-50,000", "Newborn baby cover from day 1", "Vaccination expenses covered", "Pre & post hospitalization", "Day care procedures", "Organ donor expenses", "Ambulance cover", "No claim bonus", "Free health checkup", "AYUSH treatment"],
     "18-65 years", "1/2/3 years", "Rs.6,000-40,000/year"),
    
    ("Health Advantage Insurance", "Active",
     "Health plan with OPD cover, annual health checkup, and disease management programs. "
     "Designed for those who want comprehensive coverage including outpatient benefits.",
     ["Sum Assured: Rs.3L to Rs.25L", "OPD cover: Rs.5,000-25,000", "Annual health checkup", "Disease management programs", "Pre & post hospitalization", "Day care procedures", "Ambulance cover", "No claim bonus", "Pharmacy discount network", "Telemedicine consultations"],
     "18-65 years", "1/2/3 years", "Rs.4,000-30,000/year"),
    
    ("Critical Illness Insurance", "Active",
     "Lump sum benefit plan covering up to 30 critical illnesses. On diagnosis of any covered illness, "
     "the sum assured is paid as a lump sum regardless of actual medical expenses.",
     ["Sum Assured: Rs.5L to Rs.50L", "Covers up to 30 critical illnesses", "Lump sum payout on diagnosis", "No restriction on usage of funds", "First heart attack covered", "Cancer (all stages)", "Stroke", "Kidney failure", "Major organ transplant", "Coronary artery bypass surgery", "Paralysis", "Multiple sclerosis", "Survival period: 30 days"],
     "18-65 years", "1/2/3 years", "Rs.2,000-25,000/year"),
    
    ("Cancer Insurance", "Active",
     "Dedicated cancer cover providing comprehensive protection against all stages of cancer. "
     "Includes chemotherapy, radiation, surgery, and other cancer treatments.",
     ["Sum Assured: Rs.5L to Rs.50L", "Covers all stages of cancer", "Chemotherapy & radiation covered", "Surgery expenses covered", "Hormone therapy covered", "Blood transfusion covered", "Nursing expenses covered", "Palliative care covered", "Second opinion benefit", "Survival period: 7 days", "No claim bonus"],
     "18-65 years", "1/2/3 years", "Rs.1,500-15,000/year"),
    
    ("Diabetes & Hypertension Plans", "Active",
     "Specialized health plans designed for individuals with pre-existing diabetes and/or hypertension. "
     "Provides coverage for complications related to these conditions.",
     ["Sum Assured: Rs.3L to Rs.25L", "Designed for diabetic patients", "Designed for hypertensive patients", "Covers diabetes complications", "Covers hypertension complications", "Regular health monitoring", "Medication discounts", "Doctor consultations", "Lab test discounts", "No waiting period for accidents"],
     "18-65 years", "1/2/3 years", "Rs.5,000-35,000/year"),
    
    ("Arogya Sanjeevani", "Active",
     "Standardized health insurance product mandated by IRDAI. Provides basic health coverage with uniform benefits "
     "across all insurers. Affordable and comprehensive.",
     ["Sum Assured: Rs.5L to Rs.10L", "Standardized product", "Room rent: Rs.5,000/day", "ICU: Rs.10,000/day", "Pre hospitalization: 30 days", "Post hospitalization: 60 days", "Day care procedures", "Ambulance cover: Rs.2,000", "AYUSH treatment", "Cataract surgery: Rs.25,000", "Dental treatment (accident only)"],
     "18-65 years", "1 year", "Rs.3,000-8,000/year"),
    
    ("Senior Citizen Health", "Active",
     "Health plan specifically designed for individuals aged 61 and above. Covers age-related ailments "
     "with relaxed entry criteria.",
     ["Sum Assured: Rs.3L to Rs.20L", "Entry age: 61-70 years", "Covers age-related ailments", "Pre-existing disease waiting: 2 years", "Room rent: Rs.4,000/day", "ICU: Rs.8,000/day", "Pre & post hospitalization", "Day care procedures", "Ambulance cover", "Free health checkup", "Domiciliary treatment"],
     "61-70 years", "1 year", "Rs.8,000-40,000/year"),
    
    ("Maternity Insurance", "Active",
     "Standalone maternity cover or add-on providing comprehensive protection for expectant mothers. "
     "Covers delivery expenses, newborn baby, and pregnancy complications.",
     ["Sum Assured: Rs.1L to Rs.10L", "Normal delivery: Rs.15,000-50,000", "C-section: Rs.25,000-75,000", "Newborn baby cover", "Pregnancy complications", "Pre-natal expenses", "Post-natal expenses", "Vaccination for newborn", "Waiting period: 9 months", "Available as add-on or standalone"],
     "18-45 years", "1/2/3 years", "Rs.3,000-15,000/year"),
    
    ("Health Wallet", "Active",
     "Health savings account that combines insurance with savings. Unused amount rolls over to the next year, "
     "providing a health fund for future needs.",
     ["Sum Assured: Rs.3L to Rs.25L", "Unused amount rolls over", "Interest on accumulated health fund", "Covers hospitalization", "Covers OPD expenses", "Covers pharmacy bills", "Covers diagnostic tests", "Covers doctor consultations", "Flexible usage", "No claim bonus on rollover"],
     "18-65 years", "1/2/3 years", "Rs.4,000-30,000/year"),
    
    ("Group Health Insurance", "Active",
     "Comprehensive health cover for employer-employee groups. Customizable based on group size and profile. "
     "Includes maternity, OPD, and other benefits.",
     ["Sum Assured: Rs.3L to Rs.1 Crore", "Employer-employee groups", "Maternity cover included", "OPD cover available", "Newborn baby cover", "Customizable benefits", "Family floater option", "No claim bonus", "Wellness programs", "Health checkups", "Disease management", "Flexible pricing based on group"],
     "Group (min 50 members)", "1 year", "Based on group"),
]

for name, status, summary, features, elig, tenure, premium in health_plans:
    pdf.product_detail(name, status, summary, features, elig, premium, tenure)

# 3. MOTOR INSURANCE
pdf.add_page()
pdf.section_banner("3. MOTOR INSURANCE - ACTIVE", (0, 128, 0))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, 
    "ICICI Lombard is the largest private motor insurer in India. Their motor insurance products cover cars, bikes, "
    "commercial vehicles, and specialized vehicles with comprehensive third-party and own damage coverage.", new_x="LMARGIN")
pdf.ln(2)

motor_plans = [
    ("Car Insurance", "Active",
     "Comprehensive car insurance covering own damage, third-party liability, personal accident, and add-ons. "
     "Available for new and used cars with flexible tenure options.",
     ["Own damage cover", "Third-party liability", "Personal accident: Rs.15L", "24/7 roadside assistance", "Cashless repair at 5,000+ garages", "Engine & gearbox protection", "Return to invoice", "Key replacement", "Loss of personal belongings", "Consumables cover", "NCB protection", "Zero depreciation add-on", "Roadside assistance"],
     "Vehicle age 0-15 years", "1/2/3 years", "Rs.5,000-50,000/year"),
    
    ("Bike Insurance", "Active",
     "Two-wheeler insurance covering own damage, third-party liability, and personal accident for bike owners. "
     "Available for all types of two-wheelers.",
     ["Own damage cover", "Third-party liability", "Personal accident: Rs.15L", "24/7 roadside assistance", "Cashless repair at 3,000+ garages", "Engine & gearbox protection", "Return to invoice", "Key replacement", "Loss of personal belongings", "Consumables cover", "NCB protection", "Zero depreciation add-on"],
     "Vehicle age 0-15 years", "1/2/3 years", "Rs.1,000-10,000/year"),
    
    ("Motor Package Policy", "Active",
     "Combined own damage and third-party cover for all types of motor vehicles. "
     "The most popular motor insurance product.",
     ["Own damage + third-party", "Personal accident cover", "24/7 roadside assistance", "Cashless repair network", "Towing assistance", "Flat tyre assistance", "Battery jumpstart", "Fuel delivery", "Lockout assistance", "Accident towing", "Repair authorization"],
     "All vehicles", "1/2/3 years", "Based on vehicle"),
    
    ("Motor Third Party Only", "Active",
     "Statutory third-party liability cover as mandated by the Motor Vehicles Act. "
     "Covers legal liability for third-party property damage, injury, or death.",
     ["Third-party property damage", "Third-party bodily injury", "Third-party death", "Permanent disability cover", "Legal expenses covered", "Tribunal awards covered", "As per IRDAI tariff", "Mandatory by law"],
     "All vehicles", "1/2/3 years", "As per tariff"),
    
    ("Motor Standalone Own Damage", "Active",
     "Standalone own damage cover for vehicles. Can be purchased separately or bundled with third-party cover. "
     "Covers damage to the insured vehicle due to accident, theft, fire, natural calamities.",
     ["Accident damage", "Theft total loss", "Fire damage", "Natural calamities", "Man-made calamities", "Riot & strike", "Flood damage", "Earthquake damage", "Lightning", "Explosion", "Self-ignition"],
     "All vehicles", "1/2/3 years", "Based on IDV"),
    
    ("Zero Depreciation Cover", "Active",
     "Add-on cover that eliminates depreciation deduction on parts replaced during accident repairs. "
     "Ensures full claim amount without depreciation deduction.",
     ["No depreciation on parts", "Full claim amount", "Applicable to cars up to 5 years", "Applicable to bikes up to 3 years", "Covers all accident repairs", "Covers partial losses", "Covers total loss", "Premium: 15-20% of OD premium"],
     "Vehicle age 0-5 years", "1 year", "Rs.1,000-10,000"),
    
    ("Engine & Gearbox Protection", "Active",
     "Add-on cover for engine and gearbox damage due to water ingression, oil leakage, damage to engine parts, etc. "
     "Especially useful for areas prone to waterlogging.",
     ["Engine damage cover", "Gearbox damage cover", "Water ingression cover", "Oil leakage cover", "Hydrostatic lock cover", "Damage to engine parts", "Turbocharger cover", "Consumables included", "Labour included"],
     "Vehicle age 0-7 years", "1 year", "Rs.500-5,000"),
    
    ("Return to Invoice", "Active",
     "Add-on that ensures the policyholder receives the original invoice value of the vehicle in case of total loss or theft, "
     "instead of the depreciated IDV.",
     ["Full invoice value on total loss", "Full invoice value on theft", "No depreciation deduction", "Covers new vehicles up to 3 years", "Difference between IDV and invoice", "One-time premium", "Refund if vehicle not total loss"],
     "Vehicle age 0-3 years", "1 year", "Rs.1,000-8,000"),
    
    ("Key Replacement Cover", "Active",
     "Add-on cover for replacement of lost or damaged vehicle keys. Covers the cost of new keys and lockset replacement.",
     ["Lost key replacement", "Damaged key replacement", "Lockset replacement", "Car key programming", "Bike key replacement", "Emergency locksmith", "24/7 assistance"],
     "All vehicles", "1 year", "Rs.200-2,000"),
    
    ("Roadside Assistance", "Active",
     "24/7 roadside assistance including towing, flat tyre, battery jumpstart, fuel delivery, and lockout assistance.",
     ["24/7 towing assistance", "Flat tyre change", "Battery jumpstart", "Fuel delivery", "Lockout assistance", "Minor repairs", "Accident coordination", "Ambulance arrangement", "Accommodation arrangement"],
     "All vehicles", "1 year", "Rs.200-1,000"),
    
    ("NCB Protection", "Active",
     "Add-on that protects the No Claim Bonus even if a claim is made. The NCB percentage is not reduced after a claim.",
     ["NCB protection up to 50%", "Covers one claim per year", "Applicable to motor OD", "Applicable to health insurance", "Premium: 10-15% of base premium", "Maintains discount level"],
     "All vehicles", "1 year", "Rs.500-5,000"),
    
    ("Electric Car Insurance", "Active",
     "Specialized insurance for electric vehicles covering battery, charging equipment, and EV-specific risks.",
     ["Battery pack cover", "Charging equipment cover", "EV motor cover", "Third-party liability", "Own damage", "Theft of vehicle", "Fire & explosion", "Natural calamities", "Personal accident", "Roadside assistance"],
     "EV owners", "1/2/3 years", "Based on vehicle"),
    
    ("Classic/Vintage Car Insurance", "Active",
     "Specialized insurance for classic and vintage cars (15+ years old) with agreed value coverage "
     "and specialized repair network.",
     ["Agreed value coverage", "Specialized repair network", "Spare parts sourcing", "Concours condition valuation", "Limited mileage discount", "Club membership discount", "Expert assessment", "Agreed value endorsement"],
     "Classic cars 15+ years", "1 year", "Based on value"),
    
    ("Taxi/Ride-share Insurance", "Active",
     "Insurance for commercial taxi and ride-share drivers (Ola, Uber, etc.) with comprehensive coverage "
     "for vehicle and passenger.",
     ["Comprehensive cover", "Third-party liability", "Personal accident", "Passenger cover", "Driver cover", "Theft protection", "Fire & natural calamities", "24/7 roadside assistance", "Replacement vehicle benefit"],
     "Taxi/ride-share owners", "1 year", "Based on vehicle"),
    
    ("Goods Carrying Vehicle Insurance", "Active",
     "Insurance for goods carrying vehicles (trucks, tempos, pickups) with comprehensive cover for vehicle, "
     "goods in transit, and third-party liability.",
     ["Own damage cover", "Third-party liability", "Goods in transit cover", "Personal accident", "Fire & theft", "Natural calamities", "Loading/unloading accidents", "Personal effects of driver"],
     "Commercial vehicle owners", "1 year", "Based on vehicle"),
    
    ("Passenger Vehicle Insurance", "Active",
     "Insurance for passenger transport vehicles (buses, vans, taxis) with comprehensive cover for vehicle, "
     "passengers, and third-party liability.",
     ["Own damage cover", "Third-party liability", "Passenger cover", "Personal accident", "Fire & theft", "Natural calamities", "Personal effects of driver", "24/7 roadside assistance"],
     "Bus/van owners", "1 year", "Based on vehicle"),
]

for name, status, summary, features, elig, tenure, premium in motor_plans:
    pdf.product_detail(name, status, summary, features, elig, premium, tenure)

# 4-13. REMAINING CATEGORIES (condensed)
categories = [
    ("4. TRAVEL INSURANCE", [
        ("International Travel Insurance", "Cover for international trips with medical, baggage, trip cancellation"),
        ("Domestic Travel Insurance", "Cover for within-India travel with medical and baggage"),
        ("Student Travel Insurance", "For students studying abroad, visa compliant, 2-year cover"),
        ("Senior Citizen Travel", "Travel cover for 61+ age with higher medical cover"),
        ("Business Travel", "Corporate business travel with multi-trip option"),
        ("Schengen Travel Insurance", "Compliant with Schengen visa requirements"),
        ("Cruise Travel Insurance", "Cruise-specific with missed port, baggage cover"),
        ("Adventure Sports Cover", "High-risk adventure activities cover"),
        ("Fly Safe Insurance", "Flight delay and cancellation cover"),
        ("Traveller Protect Comprehensive", "All-inclusive travel cover with every risk"),
        ("Multi-Trip Annual", "Annual travel cover for frequent travellers"),
        ("Baggage Insurance", "Standalone baggage loss and delay cover"),
    ]),
    ("5. HOME INSURANCE", [
        ("Home Insurance", "Cover for building and contents against natural calamities"),
        ("Home Loan Protection", "Cover for outstanding home loan in case of death"),
        ("Tenants Insurance", "Cover for rented home contents"),
        ("Home All Risk Insurance", "Comprehensive cover for all perils"),
        ("Fire and Allied Perils", "Fire, lightning, explosion, storm, flood cover"),
        ("Householder Package Policy", "Comprehensive home insurance package"),
        ("Shopkeeper Package", "Shopping complex property insurance"),
        ("Burglary Insurance", "Burglary and theft cover for home"),
        ("Home Equipment Cover", "Electronic equipment and appliances cover"),
        ("Natural Calamity Cover", "Earthquake, flood, storm specific cover"),
    ]),
    ("6. PERSONAL ACCIDENT", [
        ("Personal Accidental Insurance", "Accidental death and disability cover"),
        ("Group Personal Accident", "PA cover for corporate groups"),
        ("Individual Personal Accident", "Individual PA with family floater option"),
        ("Child Education Cover", "Child education funding after accidental death"),
        ("Permanent Disability Cover", "Lump sum for permanent disability"),
        ("Temporary Disability Cover", "Weekly payout for temporary disability"),
        ("PA with Critical Illness", "Combined accident and critical illness"),
        ("Road Safety Insurance", "Road accident cover for drivers and passengers"),
    ]),
    ("7. ENGINEERING INSURANCE", [
        ("Contractor's All Risk (CAR)", "Construction site all-risk cover"),
        ("Erection All Risk (EAR)", "Equipment erection risk cover"),
        ("Machinery Breakdown Insurance", "Sudden and unforeseen machinery breakdown"),
        ("Machinery Loss of Profits", "Loss of profits due to machinery breakdown"),
        ("Boiler and Pressure Vessel Explosion", "Boiler explosion liability cover"),
        ("Electronic Equipment Insurance", "Electronic equipment breakdown cover"),
        ("Contractor's Plant and Machinery", "Construction equipment cover"),
    ]),
    ("8. MARINE INSURANCE", [
        ("Marine Cargo Insurance", "Ocean and inland cargo transit cover"),
        ("Marine Hull Insurance", "Ship and vessel hull cover"),
        ("Marine Cargo (Open Cover)", "Annual open cover for regular shipments"),
        ("Inland Transit Insurance", "Within-India transit cover by rail/road"),
        ("Air Transit Insurance", "Air cargo transit insurance"),
        ("Stock Throughput Insurance", "Cover from raw material to finished goods"),
        ("Seller's Contingency Insurance", "Seller risk in international trade"),
    ]),
    ("9. LIABILITY INSURANCE", [
        ("Public Liability Insurance", "Third party property damage and injury liability"),
        ("Product Liability Insurance", "Manufacturer liability for defective products"),
        ("Professional Indemnity", "Professional errors and omissions cover"),
        ("Directors and Officers Liability", "D&O liability cover for company directors"),
        ("Employer's Liability Insurance", "Employer liability for employee injury"),
        ("Clinical Trials Liability", "Liability cover for clinical trial sponsors"),
        ("Cyber Liability Insurance", "Cyber risk and data breach liability"),
        ("Environmental Liability", "Pollution and environmental damage liability"),
        ("Event Cancellation Insurance", "Event cancellation liability cover"),
    ]),
    ("10. CROP INSURANCE", [
        ("Pradhan Mantri Fasal Bima Yojana", "Government crop insurance scheme"),
        ("Weather Index Insurance", "Weather-based crop yield protection"),
        ("National Agricultural Insurance Scheme", "Comprehensive crop insurance"),
        ("Coconut Palm Insurance", "Coconut palm tree insurance"),
        ("Forest Insurance", "Forest and plantation cover"),
        ("Fisheries Insurance", "Aquaculture and fisheries cover"),
    ]),
    ("11. CYBER INSURANCE", [
        ("Cyber Insurance Policy", "Data breach, cyber attack, and ransomware cover"),
        ("Cyber Protect", "Comprehensive cyber risk management"),
        ("Cyber First", "First-party cyber cover for businesses"),
        ("Cyber Liability", "Third-party cyber liability cover"),
        ("Cyber Crime Insurance", "Social engineering and cyber fraud cover"),
    ]),
    ("12. COMMERCIAL INSURANCE", [
        ("Shopkeeper Package", "Comprehensive shop insurance package"),
        ("Office Package", "Office property and liability cover"),
        ("Industrial All Risk", "Industrial property all-risk cover"),
        ("Business Interruption", "Loss of profits due to business interruption"),
        ("Commercial General Liability", "Commercial third-party liability"),
        ("Commercial Property Insurance", "Commercial building and content cover"),
        ("Warehouse Insurance", "Warehouse property and goods cover"),
        ("Restaurant Package", "Restaurant-specific insurance package"),
        ("Hotel Package", "Hotel property and liability cover"),
        ("School Insurance", "Educational institution insurance"),
        ("Hospital Insurance", "Hospital and clinic insurance"),
    ]),
    ("13. MISCELLANEOUS INSURANCE", [
        ("Jewellery Insurance", "Gold, silver, and precious stone cover"),
        ("Mobile Phone Insurance", "Smartphone damage and theft cover"),
        ("Pet Insurance", "Pet health and accident cover"),
        ("Cycle Insurance", "Bicycle theft and damage cover"),
        ("Gadget Insurance", "Electronic gadget cover"),
        ("Sports Equipment Insurance", "Sports equipment damage cover"),
        ("Fine Art Insurance", "Art and collectibles cover"),
        ("Musical Instrument Insurance", "Musical instrument damage cover"),
        ("Camera Insurance", "Camera and photography equipment cover"),
        ("Event Insurance", "Event cancellation and liability"),
        ("Wedding Insurance", "Wedding cancellation and liability"),
        ("Kidnap and Ransom Insurance", "Kidnap and ransom cover"),
        ("Political Risk Insurance", "Political risk for international businesses"),
        ("Trade Credit Insurance", "Buyer default and trade credit risk"),
        ("Surety Bond Insurance", "Contract performance guarantee"),
    ]),
]

for cat_title, products in categories:
    pdf.add_page()
    pdf.section_banner(cat_title, (0, 128, 0))
    for name, desc in products:
        pdf.set_font("DejaVu", "B", 8.5)
        pdf.set_text_color(0, 51, 102)
        pdf.cell(0, 5, name, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.set_font("DejaVu", "", 8)
        pdf.set_text_color(40, 40, 40)
        pdf.multi_cell(190, 4, desc, new_x="LMARGIN")
        pdf.ln(3)

# 14. DISCONTINUED PRODUCTS
pdf.add_page()
pdf.section_banner("14. DISCONTINUED / WITHDRAWN PRODUCTS", (180, 0, 0))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, 
    "The following products were previously available on the ICICI Lombard portal but have been discontinued, "
    "replaced with newer versions, or withdrawn. They are listed here for reference purposes.", new_x="LMARGIN")
pdf.ln(2)

discontinued_cats = [
    ("Health Insurance (Discontinued)", [
        ("Complete Health Insurance (Old Series)", "Replaced by updated version with new features"),
        ("Health Booster (Old Series)", "Replaced by updated top-up plan"),
        ("Personal Protect (Old Series)", "Replaced by updated PA plan"),
        ("Secure Health Insurance (Old Series)", "Replaced by updated health plan"),
        ("Health Advantage Insurance (Old Series)", "Replaced by updated plan"),
        ("i-Medicash (Old Series)", "Replaced by digital-first health plan"),
        ("Covid-19 Specific Plans (Old)", "Corona Kavach/Rakshak discontinued post-pandemic"),
        ("Health Wallet (Old)", "Replaced by new health savings product"),
        ("Senior Citizen Health (Old)", "Replaced by updated senior plan"),
        ("Maternity Insurance (Old)", "Replaced by updated maternity cover"),
        ("Critical Illness Insurance (Old)", "Replaced by updated CI plan with 30 illnesses"),
        ("Cancer Insurance (Old)", "Replaced by updated cancer cover"),
        ("Diabetes & Hypertension Plans (Old)", "Replaced by updated specialized plans"),
        ("Arogya Sanjeevani (Old)", "Standardized plan replaced by insurer-specific plans"),
    ]),
    ("Motor Insurance (Discontinued)", [
        ("Car Insurance (Old Series)", "Replaced by updated motor package"),
        ("Bike Insurance (Old Series)", "Replaced by updated two-wheeler cover"),
        ("Motor Package Policy (Old)", "Replaced by updated motor package"),
        ("Motor Third Party Only (Old)", "Replaced by updated TP cover"),
        ("Motor Standalone Own Damage (Old)", "Replaced by updated OD cover"),
        ("Zero Depreciation Cover (Old)", "Replaced by updated nil depreciation add-on"),
        ("Engine & Gearbox Protection (Old)", "Replaced by updated engine cover"),
        ("Return to Invoice (Old)", "Replaced by updated RTI add-on"),
        ("Key Replacement Cover (Old)", "Replaced by updated key cover"),
        ("Roadside Assistance (Old)", "Replaced by updated assistance cover"),
        ("NCB Protection (Old)", "Replaced by updated NCB protection"),
        ("Electric Car Insurance (Old)", "Replaced by updated EV cover"),
        ("Classic/Vintage Car Insurance (Old)", "Replaced by updated vintage cover"),
        ("Taxi/Ride-share Insurance (Old)", "Replaced by updated ride-share cover"),
        ("Goods Carrying Vehicle Insurance (Old)", "Replaced by updated goods vehicle cover"),
        ("Passenger Vehicle Insurance (Old)", "Replaced by updated passenger cover"),
    ]),
    ("Travel Insurance (Discontinued)", [
        ("International Travel Insurance (Old)", "Replaced by updated international plan"),
        ("Domestic Travel Insurance (Old)", "Replaced by updated domestic plan"),
        ("Student Travel Insurance (Old)", "Replaced by updated student plan"),
        ("Senior Citizen Travel (Old)", "Replaced by updated senior travel"),
        ("Business Travel (Old)", "Replaced by updated business travel"),
        ("Schengen Travel Insurance (Old)", "Replaced by updated Schengen plan"),
        ("Cruise Travel Insurance (Old)", "Replaced by updated cruise cover"),
        ("Adventure Sports Cover (Old)", "Replaced by updated adventure cover"),
        ("Fly Safe Insurance (Old)", "Replaced by updated flight cover"),
        ("Traveller Protect Comprehensive (Old)", "Replaced by updated comprehensive cover"),
        ("Multi-Trip Annual (Old)", "Replaced by updated annual plan"),
        ("Baggage Insurance (Old)", "Replaced by updated baggage cover"),
    ]),
    ("Home Insurance (Discontinued)", [
        ("Home Insurance (Old Series)", "Replaced by updated home cover"),
        ("Home Loan Protection (Old)", "Replaced by updated HL protection"),
        ("Tenants Insurance (Old)", "Replaced by updated tenant cover"),
        ("Home All Risk Insurance (Old)", "Replaced by updated all-risk cover"),
        ("Fire and Allied Perils (Old)", "Replaced by updated fire cover"),
        ("Householder Package Policy (Old)", "Replaced by updated householder package"),
        ("Shopkeeper Package (Old)", "Replaced by updated shopkeeper package"),
        ("Burglary Insurance (Old)", "Replaced by updated burglary cover"),
        ("Home Equipment Cover (Old)", "Replaced by updated equipment cover"),
        ("Natural Calamity Cover (Old)", "Replaced by updated calamity cover"),
    ]),
    ("Personal Accident (Discontinued)", [
        ("Personal Accident Insurance (Old)", "Replaced by updated PA plan"),
        ("Group Personal Accident (Old)", "Replaced by updated group PA"),
        ("Individual Personal Accident (Old)", "Replaced by updated individual PA"),
        ("Child Education Cover (Old)", "Replaced by updated education cover"),
        ("Permanent Disability Cover (Old)", "Replaced by updated disability cover"),
        ("Temporary Disability Cover (Old)", "Replaced by updated temp disability cover"),
        ("PA with Critical Illness (Old)", "Replaced by updated PA+CI cover"),
        ("Road Safety Insurance (Old)", "Replaced by updated road safety cover"),
    ]),
    ("Engineering Insurance (Discontinued)", [
        ("Contractor's All Risk (Old)", "Replaced by updated CAR cover"),
        ("Erection All Risk (Old)", "Replaced by updated EAR cover"),
        ("Machinery Breakdown Insurance (Old)", "Replaced by updated MB cover"),
        ("Machinery Loss of Profits (Old)", "Replaced by updated MLOP cover"),
        ("Boiler and Pressure Vessel Explosion (Old)", "Replaced by updated boiler cover"),
        ("Electronic Equipment Insurance (Old)", "Replaced by updated EE cover"),
        ("Contractor's Plant and Machinery (Old)", "Replaced by updated CPM cover"),
    ]),
    ("Marine Insurance (Discontinued)", [
        ("Marine Cargo Insurance (Old)", "Replaced by updated cargo cover"),
        ("Marine Hull Insurance (Old)", "Replaced by updated hull cover"),
        ("Marine Cargo (Open Cover) (Old)", "Replaced by updated open cover"),
        ("Inland Transit Insurance (Old)", "Replaced by updated inland transit"),
        ("Air Transit Insurance (Old)", "Replaced by updated air transit"),
        ("Stock Throughput Insurance (Old)", "Replaced by updated STP cover"),
        ("Seller's Contingency Insurance (Old)", "Replaced by updated seller cover"),
    ]),
    ("Liability Insurance (Discontinued)", [
        ("Public Liability Insurance (Old)", "Replaced by updated PL cover"),
        ("Product Liability Insurance (Old)", "Replaced by updated product liability"),
        ("Professional Indemnity (Old)", "Replaced by updated PI cover"),
        ("Directors and Officers Liability (Old)", "Replaced by updated D&O cover"),
        ("Employer's Liability Insurance (Old)", "Replaced by updated EL cover"),
        ("Clinical Trials Liability (Old)", "Replaced by updated clinical trials cover"),
        ("Cyber Liability Insurance (Old)", "Replaced by updated cyber liability"),
        ("Environmental Liability (Old)", "Replaced by updated environmental cover"),
        ("Event Cancellation Insurance (Old)", "Replaced by updated event cancellation"),
    ]),
    ("Crop Insurance (Discontinued)", [
        ("Pradhan Mantri Fasal Bima Yojana (Old)", "Replaced by updated PMFBY"),
        ("Weather Index Insurance (Old)", "Replaced by updated weather index"),
        ("National Agricultural Insurance Scheme (Old)", "Replaced by updated NAIS"),
        ("Coconut Palm Insurance (Old)", "Replaced by updated coconut cover"),
        ("Forest Insurance (Old)", "Replaced by updated forest cover"),
        ("Fisheries Insurance (Old)", "Replaced by updated fisheries cover"),
    ]),
    ("Cyber Insurance (Discontinued)", [
        ("Cyber Insurance Policy (Old)", "Replaced by updated cyber cover"),
        ("Cyber Protect (Old)", "Replaced by updated cyber protect"),
        ("Cyber First (Old)", "Replaced by updated cyber first"),
        ("Cyber Liability (Old)", "Replaced by updated cyber liability"),
        ("Cyber Crime Insurance (Old)", "Replaced by updated cyber crime cover"),
    ]),
    ("Commercial Insurance (Discontinued)", [
        ("Shopkeeper Package (Old)", "Replaced by updated shopkeeper package"),
        ("Office Package (Old)", "Replaced by updated office package"),
        ("Industrial All Risk (Old)", "Replaced by updated IAR cover"),
        ("Business Interruption (Old)", "Replaced by updated BI cover"),
        ("Commercial General Liability (Old)", "Replaced by updated CGL cover"),
        ("Commercial Property Insurance (Old)", "Replaced by updated commercial property"),
        ("Warehouse Insurance (Old)", "Replaced by updated warehouse cover"),
        ("Restaurant Package (Old)", "Replaced by updated restaurant package"),
        ("Hotel Package (Old)", "Replaced by updated hotel package"),
        ("School Insurance (Old)", "Replaced by updated school cover"),
        ("Hospital Insurance (Old)", "Replaced by updated hospital cover"),
    ]),
    ("Miscellaneous Insurance (Discontinued)", [
        ("Jewellery Insurance (Old)", "Replaced by updated jewellery cover"),
        ("Mobile Phone Insurance (Old)", "Replaced by updated mobile cover"),
        ("Pet Insurance (Old)", "Replaced by updated pet cover"),
        ("Cycle Insurance (Old)", "Replaced by updated cycle cover"),
        ("Gadget Insurance (Old)", "Replaced by updated gadget cover"),
        ("Sports Equipment Insurance (Old)", "Replaced by updated sports cover"),
        ("Fine Art Insurance (Old)", "Replaced by updated art cover"),
        ("Musical Instrument Insurance (Old)", "Replaced by updated instrument cover"),
        ("Camera Insurance (Old)", "Replaced by updated camera cover"),
        ("Event Insurance (Old)", "Replaced by updated event cover"),
        ("Wedding Insurance (Old)", "Replaced by updated wedding cover"),
        ("Kidnap and Ransom Insurance (Old)", "Replaced by updated K&R cover"),
        ("Political Risk Insurance (Old)", "Replaced by updated political risk"),
        ("Trade Credit Insurance (Old)", "Replaced by updated trade credit"),
        ("Surety Bond Insurance (Old)", "Replaced by updated surety bond"),
    ]),
]

for cat_title, products in discontinued_cats:
    if pdf.get_y() > 230:
        pdf.add_page()
    pdf.set_font("DejaVu", "B", 9)
    pdf.set_text_color(180, 0, 0)
    pdf.cell(0, 5, cat_title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(1)
    for name, desc in products:
        pdf.set_font("DejaVu", "B", 7.5)
        pdf.set_text_color(180, 0, 0)
        pdf.cell(8, 4, "x")
        pdf.set_text_color(40, 40, 40)
        pdf.set_font("DejaVu", "", 7.5)
        pdf.cell(130, 4, name)
        pdf.set_font("DejaVu", "I", 7)
        pdf.set_text_color(100, 100, 100)
        pdf.cell(55, 4, desc, align="R")
        pdf.ln(4.5)
    pdf.ln(3)

# 15. COMPARISON MATRIX
pdf.add_page()
pdf.section_banner("15. PRODUCT COMPARISON MATRIX", (100, 50, 0))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, "Quick comparison of key features across major ICICI Lombard product categories.", new_x="LMARGIN")
pdf.ln(2)

pdf.table_row(["Feature", "Health", "Motor", "Travel", "Home", "PA", "Cyber"], [30, 25, 25, 25, 25, 25, 25], is_header=True)
comparison = [
    ("Sum Assured", "5L-50L", "Based on IDV", "10L-1Cr", "Market value", "5L-1Cr", "10L-5Cr"),
    ("Tenure", "1/2/3 yrs", "1/2/3 yrs", "Per trip/Annual", "1/2/3 yrs", "1 yr", "1 yr"),
    ("Renewable", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"),
    ("Cashless", "10,000+ hospitals", "5,000+ garages", "N/A", "N/A", "N/A", "N/A"),
    ("No Claim Bonus", "10%/year", "20-50%", "N/A", "N/A", "N/A", "N/A"),
    ("Add-ons", "Maternity, CI", "15+ riders", "Adventure", "Equipment", "Education", "Data restore"),
    ("Claim Ratio", "97.5%", "97.5%", "97.5%", "97.5%", "97.5%", "97.5%"),
    ("Digital Process", "100% online", "100% online", "100% online", "100% online", "100% online", "100% online"),
    ("Best For", "Medical needs", "Vehicle owners", "Frequent travellers", "Homeowners", "Accident cover", "Cyber risk"),
]
for row in comparison:
    pdf.table_row(row, [30, 25, 25, 25, 25, 25, 25])
pdf.ln(5)

# 16. CLAIMS PROCESS
pdf.add_page()
pdf.section_banner("16. CLAIMS PROCESS OVERVIEW", (100, 50, 0))
pdf.set_font("DejaVu", "", 8.5)
pdf.set_text_color(40, 40, 40)
pdf.multi_cell(0, 5, 
    "ICICI Lombard has a streamlined claims process with a 97.5% claim settlement ratio. "
    "The company offers cashless claims at 10,000+ network garages/hospitals and reimbursement "
    "claims for non-network facilities.", new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(180, 0, 42)
pdf.cell(0, 5, "A. Cashless Claim Process (Motor):", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
cashless = [
    "Step 1: Report accident to ICICI Lombard (24/7 helpline 1800 2666 or app)",
    "Step 2: Vehicle towed to network garage (free towing within 50km)",
    "Step 3: Garage initiates cashless claim authorization",
    "Step 4: ICICI Lombard approves cashless within 2-4 hours",
    "Step 5: Repairs begin - no payment needed from policyholder",
    "Step 6: Vehicle delivered after repairs - policyholder pays deductible only",
    "Deductible: Rs.2,500 (standard) + depreciation on parts (if no zero dep cover)",
    "Surveyor may visit for claims above Rs.50,000",
    "Claim settlement: 7-15 days for cashless",
]
for item in cashless:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, item, new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(180, 0, 42)
pdf.cell(0, 5, "B. Reimbursement Claim Process (Health):", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
reimbursement = [
    "Step 1: Inform ICICI Lombard within 24 hours of hospitalization",
    "Step 2: Collect all documents from hospital (bills, reports, discharge summary)",
    "Step 3: Submit claim with all documents within 30 days of discharge",
    "Step 4: ICICI Lombard verifies documents and processes claim",
    "Step 5: Claim settled within 7-15 days of document submission",
    "Documents: Claim form, hospital bills, discharge summary, ID proof, bank details",
    "Claim settlement ratio: 97.5% (FY 2024-25)",
    "Claims above Rs.1 lakh may require pre-authorization",
]
for item in reimbursement:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, item, new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(180, 0, 42)
pdf.cell(0, 5, "C. Motor Accident Claim (Third Party):", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
tp_claims = [
    "Step 1: Inform ICICI Lombard and file FIR if required",
    "Step 2: Third party files claim with ICICI Lombard or Motor Accident Claims Tribunal",
    "Step 3: ICICI Lombard investigates and assesses liability",
    "Step 4: Claim settled as per tribunal award or negotiated settlement",
    "Property damage: Up to Rs.7.5 lakh (as per IRDAI tariff)",
    "Bodily injury/death: As per tribunal award",
    "Legal expenses covered by ICICI Lombard",
    "Claim settlement: 30-90 days depending on complexity",
]
for item in tp_claims:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, item, new_x="LMARGIN")

# 17. DIGITAL SERVICES
pdf.add_page()
pdf.section_banner("17. DIGITAL SERVICES & PORTALS", (100, 50, 0))
pdf.set_font("DejaVu", "", 8.5)
pdf.set_text_color(40, 40, 40)
pdf.multi_cell(0, 5, 
    "ICICI Lombard offers comprehensive digital services through its website, mobile app, and API integrations. "
    "Most services are available 24/7 online without the need to visit a branch.", new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(180, 0, 42)
pdf.cell(0, 5, "Digital Platforms:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
digital = [
    "Website: www.icicilombard.com - Buy, renew, claim, manage policies online",
    "Mobile App: ICICI Lombard app (Android/iOS) - Policy management, claims, health card",
    "IL TakeCare App: Health-specific app for health insurance customers",
    "API Integration: For corporate customers and partners",
    "WhatsApp Bot: Policy queries, claim status, renewal reminders",
    "Chatbot: 24/7 virtual assistant for policy queries",
    "Self-Service Portal: Policy download, premium payment, claim tracking",
    "Digital Claims: Photo-based claim submission for motor insurance",
    "E-Card: Digital health card and motor insurance card",
    "Telemedicine: Free doctor consultations for health insurance customers",
    "Wellness Programs: Health assessments, fitness tracking, rewards",
]
for item in digital:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, item, new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(180, 0, 42)
pdf.cell(0, 5, "Contact Information:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
contacts = [
    "Website: www.icicilombard.com",
    "Customer Care: 1800 2666 (Toll Free)",
    "WhatsApp: +91 98200 26666",
    "Email: customersupport@icicilombard.com",
    "Head Office: ICICI Lombard House, Veera Desai Road, Andheri West, Mumbai - 400058",
    "24/7 Claim Helpline: 1800 2666",
    "Grievance Redressal: Available on website",
    "Ombudsman: For unresolved grievances",
    "Corporate Office: ICICI Bank Towers, Bandra Kurla Complex, Mumbai - 400051",
    "Network: 300+ branches, 10,000+ cashless hospitals, 5,000+ network garages",
]
for contact in contacts:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, contact, new_x="LMARGIN")

pdf.ln(10)
pdf.set_font("DejaVu", "B", 10)
pdf.set_text_color(180, 0, 42)
pdf.cell(0, 6, "END OF REPORT", align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

output_path = "/home/kali/insurance-support-next/icici_detailed_report.pdf"
pdf.output(output_path)
print("ICICI Detailed PDF saved: %s (%.1f KB)" % (output_path, os.path.getsize(output_path)/1024))
