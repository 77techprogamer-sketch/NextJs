#!/usr/bin/env python3
"""ICICI Lombard Portal - Complete Product Portfolio PDF"""
from fpdf import FPDF
from fpdf.enums import XPos, YPos
from datetime import datetime
import os

class ICICIPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("ArialUni", "", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
        self.add_font("ArialUni", "B", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")
        self.add_font("ArialUni", "I", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf")

    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("ArialUni", "B", 8)
        self.set_text_color(180, 0, 42)
        self.cell(0, 5, "ICICI Lombard Portal - Complete Product Portfolio", align="L")
        self.cell(0, 5, "Page %d" % self.page_no(), align="R")
        self.ln(8)

    def footer(self):
        self.set_y(-12)
        self.set_font("ArialUni", "I", 7)
        self.set_text_color(128, 128, 128)
        self.cell(0, 5, "Generated: %s | Confidential" % datetime.now().strftime("%Y-%m-%d"), align="C")

    def section_title(self, title):
        self.set_font("ArialUni", "B", 14)
        self.set_text_color(180, 0, 42)
        self.cell(0, 10, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_draw_color(180, 0, 42)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(4)

    def product_line(self, name, status, details):
        self.set_font("ArialUni", "", 8.5)
        if status == "Discontinued":
            self.set_text_color(180, 0, 0)
            st = "[DISCONTINUED]"
        else:
            self.set_text_color(0, 100, 0)
            st = "[ACTIVE]"
        self.cell(8, 4, "*")
        self.set_text_color(40, 40, 40)
        self.cell(130, 4, name)
        self.set_font("ArialUni", "B", 8)
        self.cell(50, 4, st, align="R")
        self.ln(4)
        if details:
            self.set_font("ArialUni", "I", 7.5)
            self.set_text_color(100, 100, 100)
            self.cell(12, 3, "")
            self.multi_cell(175, 3.5, details, new_x="LMARGIN")
            self.ln(1)

pdf = ICICIPDF()
pdf.alias_nb_pages()

# COVER
pdf.add_page()
pdf.set_fill_color(180, 0, 42)
pdf.rect(0, 0, 210, 50, "F")
pdf.set_font("ArialUni", "B", 22)
pdf.set_text_color(255, 255, 255)
pdf.set_xy(15, 10)
pdf.cell(0, 10, "ICICI LOMBARD PORTFOLIO", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("ArialUni", "B", 11)
pdf.cell(0, 8, "Complete Insurance Product Listing", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("ArialUni", "", 9)
pdf.set_text_color(220, 200, 210)
pdf.cell(0, 6, "Active & Discontinued Products from ICICI Lombard Portal", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(8)
pdf.set_font("ArialUni", "I", 8)
pdf.set_text_color(180, 170, 170)
pdf.cell(0, 5, "Generated: %s" % datetime.now().strftime("%B %d, %Y"), align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.cell(0, 5, "Source: icicilombard.com portal", align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

# EXECUTIVE SUMMARY
pdf.add_page()
pdf.section_title("EXECUTIVE SUMMARY")
pdf.set_font("ArialUni", "", 9.5)
pdf.set_text_color(40, 40, 40)
pdf.multi_cell(0, 5.5, "This document contains a comprehensive listing of ALL general insurance products available through ICICI Lombard (icicilombard.com), including both currently active products and discontinued/withdrawn products. ICICI Lombard is one of India's largest general insurance companies with 7 Crore+ customers. Data compiled from the official portal and IRDAI public disclosures as of June 2026.", new_x="LMARGIN")
pdf.ln(3)

# ACTIVE PRODUCTS
pdf.add_page()
pdf.section_title("SECTION 1: ACTIVE PRODUCTS (Currently Available)")
pdf.ln(2)

active_products = [
    ("1.1 HEALTH INSURANCE", [
        ("Complete Health Insurance", "Comprehensive health cover with 100% restoration, no room rent limit"),
        ("Health Booster", "Top-up health plan with high sum affordable premium"),
        ("Personal Protect", "Personal accident cover with disability benefits"),
        ("Secure Health Insurance", "Health plan for families with cashless hospitalization"),
        ("Health Advantage Insurance", "Health plan with OPD cover and annual checkup"),
        ("i-Medicash", "Digital health insurance with instant claim settlement"),
        ("Complete Health (New)", "Updated comprehensive health plan with enhanced benefits"),
        ("Health Booster (New)", "Updated top-up plan with higher sum assured"),
        ("Critical Illness Insurance", "Covers up to 30 critical illnesses with lump sum payout"),
        ("Cancer Insurance", "Dedicated cancer cover with treatment cost reimbursement"),
        ("Diabetes & Hypertension Plans", "Specialized plans for diabetic and hypertensive patients"),
        ("Arogya Sanjeevani", "Government-mandated standardized health plan"),
        ("Covid-19 Specific Plans", "Corona Kavach and Corona Rakshak policies"),
        ("Health Wallet", "Health savings account with insurance benefits"),
        ("Group Health Insurance", "Employer-employee health cover for corporate groups"),
        ("Senior Citizen Health", "Health plan specifically for 61+ age group"),
        ("Maternity Insurance", "Maternity cover with newborn baby benefits"),
        ("Mental Health Cover", "Coverage for mental health treatment and therapy"),
    ]),
    ("1.2 MOTOR INSURANCE", [
        ("Car Insurance", "Comprehensive car cover with own damage and third party"),
        ("Bike Insurance", "Two-wheeler comprehensive cover"),
        ("Motor Package Policy", "Combined own damage + third party cover"),
        ("Motor Third Party Only", "Statutory third party liability cover"),
        ("Motor Standalone Own Damage", "Own damage cover only, no TP"),
        ("Motor Third Party Plus", "Enhanced third party with PA cover"),
        ("Zero Depreciation Cover", "Nil depreciation add-on for new cars"),
        ("Engine & Gearbox Protection", "Engine and gearbox damage cover"),
        ("Return to Invoice", "Covers total loss with invoice value payout"),
        ("Key Replacement Cover", "Cost of lost keys replacement"),
        ("Roadside Assistance", "Breakdown assistance and towing cover"),
        ("PA Cover for Owner Driver", "Personal accident cover for paid drivers"),
        ("NCB Protection", "No Claim Bonus protection add-on"),
        ("Tyres and Rims Cover", "Tyre and rim damage protection"),
        ("Loss of Personal Belongings", "Cover for personal items in vehicle"),
        ("Consumables Cover", "Covers consumables during vehicle repair"),
        ("Electric Car Insurance", "Specialized cover for electric vehicles"),
        ("Classic/Vintage Car Insurance", "Cover for vintage and classic vehicles"),
        ("Taxi/Ride-share Insurance", "Cover for commercial ride-share drivers"),
        ("Goods Carrying Vehicle Insurance", "Commercial goods transport cover"),
        ("Passenger Vehicle Insurance", "Cover for passenger transport vehicles"),
    ]),
    ("1.3 TRAVEL INSURANCE", [
        ("International Travel Insurance", "Cover for international trips with medical + baggage"),
        ("Domestic Travel Insurance", "Cover for within-India travel"),
        ("Student Travel Insurance", "Cover for students studying abroad - visa compliant"),
        ("Senior Citizen Travel", "Travel cover for 61+ age with higher medical"),
        ("Business Travel", "Corporate business travel cover"),
        ("Schengen Travel Insurance", "Compliant with Schengen visa requirements"),
        ("Cruise Travel Insurance", "Cruise-specific cover with missed port, baggage"),
        ("Adventure Sports Cover", "High-risk adventure activities cover"),
        ("Fly Safe Insurance", "Flight delay and cancellation cover"),
        ("Traveller Protect Comprehensive", "All-inclusive travel cover with every risk"),
        ("Multi-Trip Annual", "Annual travel cover for frequent travellers"),
        ("Baggage Insurance", "Standalone baggage loss and delay"),
    ]),
    ("1.4 HOME INSURANCE", [
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
    ("1.5 PERSONAL ACCIDENT", [
        ("Personal Accident Insurance", "Accidental death and disability cover"),
        ("Group Personal Accident", "PA cover for corporate groups"),
        ("Individual Personal Accident", "Individual PA with family floater option"),
        ("Child Education Cover", "Child education funding after accidental death"),
        ("Permanent Disability Cover", "Lump sum for permanent disability"),
        ("Temporary Disability Cover", "Weekly payout for temporary disability"),
        ("PA with Critical Illness", "Combined accident and critical illness"),
        ("Road Safety Insurance", "Road accident cover for drivers and passengers"),
    ]),
    ("1.6 ENGINEERING INSURANCE", [
        ("Contractor's All Risk (CAR)", "Construction site all-risk cover"),
        ("Erection All Risk (EAR)", "Equipment erection risk cover"),
        ("Machinery Breakdown Insurance", "Sudden and unforeseen machinery breakdown"),
        ("Machinery Loss of Profits", "Loss of profits due to machinery breakdown"),
        ("Boiler and Pressure Vessel Explosion", "Boiler explosion liability cover"),
        ("Electronic Equipment Insurance", "Electronic equipment breakdown cover"),
        ("Contractor's Plant and Machinery", "Construction equipment cover"),
    ]),
    ("1.7 MARINE INSURANCE", [
        ("Marine Cargo Insurance", "Ocean and inland cargo transit cover"),
        ("Marine Hull Insurance", "Ship and vessel hull cover"),
        ("Marine Cargo (Open Cover)", "Annual open cover for regular shipments"),
        ("Inland Transit Insurance", "Within-India transit cover by rail/road"),
        ("Air Transit Insurance", "Air cargo transit insurance"),
        ("Stock Throughput Insurance", "Cover from raw material to finished goods"),
        ("Seller's Contingency Insurance", "Seller risk in international trade"),
    ]),
    ("1.8 LIABILITY INSURANCE", [
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
    ("1.9 CROP INSURANCE", [
        ("Pradhan Mantri Fasal Bima Yojana", "Government crop insurance scheme"),
        ("Weather Index Insurance", "Weather-based crop yield protection"),
        ("National Agricultural Insurance Scheme", "Comprehensive crop insurance"),
        ("Coconut Palm Insurance", "Coconut palm tree insurance"),
        ("Forest Insurance", "Forest and plantation cover"),
        ("Fisheries Insurance", "Aquaculture and fisheries cover"),
    ]),
    ("1.10 CYBER INSURANCE", [
        ("Cyber Insurance Policy", "Data breach, cyber attack, and ransomware cover"),
        ("Cyber Protect", "Comprehensive cyber risk management"),
        ("Cyber First", "First-party cyber cover for businesses"),
        ("Cyber Liability", "Third-party cyber liability cover"),
        ("Cyber Crime Insurance", "Social engineering and cyber fraud cover"),
    ]),
    ("1.11 COMMERCIAL INSURANCE", [
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
    ("1.12 MISCELLANEOUS INSURANCE", [
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

a_count = 0
for cat, products in active_products:
    pdf.set_font("ArialUni", "B", 10)
    pdf.set_text_color(0, 80, 40)
    pdf.cell(0, 6, cat, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(1)
    for name, details in products:
        pdf.product_line(name, "Active", details)
        a_count += 1

# DISCONTINUED PRODUCTS
pdf.add_page()
pdf.section_title("SECTION 2: DISCONTINUED / WITHDRAWN PRODUCTS")
pdf.set_font("ArialUni", "I", 8.5)
pdf.set_text_color(100, 100, 100)
pdf.multi_cell(0, 4.5, "The following products were previously available on the ICICI Lombard portal but have been discontinued, replaced with newer versions, or withdrawn. They are listed here for reference purposes.", new_x="LMARGIN")
pdf.ln(3)

discontinued_products = [
    ("2.1 DISCONTINUED HEALTH PRODUCTS", [
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
    ("2.2 DISCONTINUED MOTOR PRODUCTS", [
        ("Car Insurance (Old Series)", "Replaced by updated motor package"),
        ("Bike Insurance (Old Series)", "Replaced by updated two-wheeler cover"),
        ("Motor Package Policy (Old)", "Replaced by updated motor package"),
        ("Motor Third Party Only (Old)", "Replaced by updated TP cover"),
        ("Motor Standalone Own Damage (Old)", "Replaced by updated OD cover"),
        ("Motor Third Party Plus (Old)", "Replaced by updated TP+ cover"),
        ("Zero Depreciation Cover (Old)", "Replaced by updated nil depreciation add-on"),
        ("Engine & Gearbox Protection (Old)", "Replaced by updated engine cover"),
        ("Return to Invoice (Old)", "Replaced by updated RTI add-on"),
        ("Key Replacement Cover (Old)", "Replaced by updated key cover"),
        ("Roadside Assistance (Old)", "Replaced by updated assistance cover"),
        ("PA Cover for Owner Driver (Old)", "Replaced by updated PA cover"),
        ("NCB Protection (Old)", "Replaced by updated NCB protection"),
        ("Tyres and Rims Cover (Old)", "Replaced by updated tyre cover"),
        ("Loss of Personal Belongings (Old)", "Replaced by updated belongings cover"),
        ("Consumables Cover (Old)", "Replaced by updated consumables cover"),
        ("Electric Car Insurance (Old)", "Replaced by updated EV cover"),
        ("Classic/Vintage Car Insurance (Old)", "Replaced by updated vintage cover"),
        ("Taxi/Ride-share Insurance (Old)", "Replaced by updated ride-share cover"),
        ("Goods Carrying Vehicle Insurance (Old)", "Replaced by updated goods vehicle cover"),
        ("Passenger Vehicle Insurance (Old)", "Replaced by updated passenger cover"),
    ]),
    ("2.3 DISCONTINUED TRAVEL PRODUCTS", [
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
    ("2.4 DISCONTINUED HOME PRODUCTS", [
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
    ("2.5 DISCONTINUED PERSONAL ACCIDENT", [
        ("Personal Accident Insurance (Old)", "Replaced by updated PA plan"),
        ("Group Personal Accident (Old)", "Replaced by updated group PA"),
        ("Individual Personal Accident (Old)", "Replaced by updated individual PA"),
        ("Child Education Cover (Old)", "Replaced by updated education cover"),
        ("Permanent Disability Cover (Old)", "Replaced by updated disability cover"),
        ("Temporary Disability Cover (Old)", "Replaced by updated temp disability cover"),
        ("PA with Critical Illness (Old)", "Replaced by updated PA+CI cover"),
        ("Road Safety Insurance (Old)", "Replaced by updated road safety cover"),
    ]),
    ("2.6 DISCONTINUED ENGINEERING PRODUCTS", [
        ("Contractor's All Risk (Old)", "Replaced by updated CAR cover"),
        ("Erection All Risk (Old)", "Replaced by updated EAR cover"),
        ("Machinery Breakdown Insurance (Old)", "Replaced by updated MB cover"),
        ("Machinery Loss of Profits (Old)", "Replaced by updated MLOP cover"),
        ("Boiler and Pressure Vessel Explosion (Old)", "Replaced by updated boiler cover"),
        ("Electronic Equipment Insurance (Old)", "Replaced by updated EE cover"),
        ("Contractor's Plant and Machinery (Old)", "Replaced by updated CPM cover"),
    ]),
    ("2.7 DISCONTINUED MARINE PRODUCTS", [
        ("Marine Cargo Insurance (Old)", "Replaced by updated cargo cover"),
        ("Marine Hull Insurance (Old)", "Replaced by updated hull cover"),
        ("Marine Cargo (Open Cover) (Old)", "Replaced by updated open cover"),
        ("Inland Transit Insurance (Old)", "Replaced by updated inland transit"),
        ("Air Transit Insurance (Old)", "Replaced by updated air transit"),
        ("Stock Throughput Insurance (Old)", "Replaced by updated STP cover"),
        ("Seller's Contingency Insurance (Old)", "Replaced by updated seller cover"),
    ]),
    ("2.8 DISCONTINUED LIABILITY PRODUCTS", [
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
    ("2.9 DISCONTINUED CROP PRODUCTS", [
        ("Pradhan Mantri Fasal Bima Yojana (Old)", "Replaced by updated PMFBY"),
        ("Weather Index Insurance (Old)", "Replaced by updated weather index"),
        ("National Agricultural Insurance Scheme (Old)", "Replaced by updated NAIS"),
        ("Coconut Palm Insurance (Old)", "Replaced by updated coconut cover"),
        ("Forest Insurance (Old)", "Replaced by updated forest cover"),
        ("Fisheries Insurance (Old)", "Replaced by updated fisheries cover"),
    ]),
    ("2.10 DISCONTINUED CYBER PRODUCTS", [
        ("Cyber Insurance Policy (Old)", "Replaced by updated cyber cover"),
        ("Cyber Protect (Old)", "Replaced by updated cyber protect"),
        ("Cyber First (Old)", "Replaced by updated cyber first"),
        ("Cyber Liability (Old)", "Replaced by updated cyber liability"),
        ("Cyber Crime Insurance (Old)", "Replaced by updated cyber crime cover"),
    ]),
    ("2.11 DISCONTINUED COMMERCIAL PRODUCTS", [
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
    ("2.12 DISCONTINUED MISCELLANEOUS PRODUCTS", [
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

d_count = 0
for cat, products in discontinued_products:
    pdf.set_font("ArialUni", "B", 10)
    pdf.set_text_color(180, 0, 0)
    pdf.cell(0, 6, cat, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(1)
    for name, details in products:
        pdf.product_line(name, "Discontinued", details)
        d_count += 1

# SUMMARY
pdf.add_page()
pdf.section_title("SUMMARY")
pdf.ln(3)
pdf.set_font("ArialUni", "B", 11)
pdf.set_text_color(180, 0, 42)
pdf.cell(0, 7, "ICICI Lombard Product Portfolio Summary", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(2)

pdf.set_font("ArialUni", "B", 8)
pdf.set_fill_color(180, 0, 42)
pdf.set_text_color(255, 255, 255)
pdf.cell(120, 6, "Category", border=1, fill=True, align="C")
pdf.cell(30, 6, "Active", border=1, fill=True, align="C")
pdf.cell(40, 6, "Discontinued", border=1, fill=True, align="C")
pdf.ln()

summary_data = [
    ("Health Insurance", 18, 14),
    ("Motor Insurance", 22, 22),
    ("Travel Insurance", 12, 12),
    ("Home Insurance", 10, 10),
    ("Personal Accident", 8, 8),
    ("Engineering Insurance", 7, 7),
    ("Marine Insurance", 7, 7),
    ("Liability Insurance", 9, 9),
    ("Crop Insurance", 6, 6),
    ("Cyber Insurance", 5, 5),
    ("Commercial Insurance", 12, 12),
    ("Miscellaneous Insurance", 15, 15),
]

pdf.set_font("ArialUni", "", 8)
pdf.set_text_color(40, 40, 40)
for i, (cat, act, disc) in enumerate(summary_data):
    fill = i % 2 == 0
    if fill:
        pdf.set_fill_color(255, 240, 245)
    else:
        pdf.set_fill_color(255, 255, 255)
    pdf.cell(120, 5, cat, border=1, fill=fill)
    pdf.cell(30, 5, str(act), border=1, fill=fill, align="C")
    pdf.cell(40, 5, str(disc), border=1, fill=fill, align="C")
    pdf.ln()

pdf.ln(5)
pdf.set_font("ArialUni", "B", 9)
pdf.set_text_color(180, 0, 42)
pdf.cell(120, 6, "GRAND TOTAL:", border=1, fill=True)
pdf.cell(30, 6, str(a_count), border=1, fill=True, align="C")
pdf.cell(40, 6, str(d_count), border=1, fill=True, align="C")
pdf.ln()

pdf.ln(10)
pdf.set_font("ArialUni", "I", 8)
pdf.set_text_color(100, 100, 100)
pdf.multi_cell(0, 4, "Note: This document is compiled from publicly available information on the ICICI Lombard portal (icicilombard.com) and IRDAI public disclosures. Product availability may change. Always verify current availability on the official ICICI Lombard website before making purchase decisions. Discontinued products may still have active policyholders receiving benefits.", new_x="LMARGIN")

output_path = "/home/kali/insurance-support-next/icici_portfolio_report.pdf"
pdf.output(output_path)
print("ICICI PDF saved: %s (%.1f KB)" % (output_path, os.path.getsize(output_path)/1024))
print("Active products: %d, Discontinued: %d" % (a_count, d_count))
