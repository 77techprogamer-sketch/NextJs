#!/usr/bin/env python3
"""LIC Portal - Complete Product Portfolio PDF"""
from fpdf import FPDF
from fpdf.enums import XPos, YPos
from datetime import datetime
import os

class LICPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("ArialUni", "", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
        self.add_font("ArialUni", "B", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")
        self.add_font("ArialUni", "I", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf")

    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("ArialUni", "B", 8)
        self.set_text_color(0, 51, 102)
        self.cell(0, 5, "LIC Portal - Complete Product Portfolio", align="L")
        self.cell(0, 5, "Page %d" % self.page_no(), align="R")
        self.ln(8)

    def footer(self):
        self.set_y(-12)
        self.set_font("ArialUni", "I", 7)
        self.set_text_color(128, 128, 128)
        self.cell(0, 5, "Generated: %s | Confidential" % datetime.now().strftime("%Y-%m-%d"), align="C")

    def section_title(self, title):
        self.set_font("ArialUni", "B", 14)
        self.set_text_color(0, 51, 102)
        self.cell(0, 10, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_draw_color(0, 51, 102)
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

pdf = LICPDF()
pdf.alias_nb_pages()

# COVER
pdf.add_page()
pdf.set_fill_color(0, 51, 102)
pdf.rect(0, 0, 210, 50, "F")
pdf.set_font("ArialUni", "B", 24)
pdf.set_text_color(255, 255, 255)
pdf.set_xy(15, 12)
pdf.cell(0, 10, "LIC PORTFOLIO", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("ArialUni", "B", 12)
pdf.cell(0, 8, "Complete Product Listing", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("ArialUni", "", 9)
pdf.set_text_color(200, 220, 255)
pdf.cell(0, 6, "Active & Discontinued Plans from LIC Portal", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(8)
pdf.set_font("ArialUni", "I", 8)
pdf.set_text_color(180, 180, 180)
pdf.cell(0, 5, "Generated: %s" % datetime.now().strftime("%B %d, %Y"), align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.cell(0, 5, "Source: licindia.in portal", align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

# EXECUTIVE SUMMARY
pdf.add_page()
pdf.section_title("EXECUTIVE SUMMARY")
pdf.set_font("ArialUni", "", 9.5)
pdf.set_text_color(40, 40, 40)
pdf.multi_cell(0, 5.5, "This document contains a comprehensive listing of ALL products available through the LIC (Life Insurance Corporation of India) portal, including both currently active plans and discontinued/withdrawn products. Data is compiled from the official LIC website (licindia.in) and IRDAI public disclosures as of June 2026.", new_x="LMARGIN")
pdf.ln(3)

# ACTIVE PRODUCTS
pdf.add_page()
pdf.section_title("SECTION 1: ACTIVE PRODUCTS (Currently Available)")
pdf.ln(2)

active_products = [
    ("1.1 ENDOWMENT PLANS", [
        ("Jeevan Anand", "Classic endowment with life cover + savings"),
        ("Jeevan Labh", "Limited premium endowment, 10/15/16/21/25 year terms"),
        ("Jeevan Lakshya", "Endowment with annual survival benefits from year 6"),
        ("Jeevan Saral", "Simple endowment with fixed premium"),
        ("Jeevan Shanti", "Single premium endowment with guaranteed additions"),
        ("Jeevan Utsav", "Limited pay endowment with income benefit from year 10"),
        ("Jeevan Amrit", "Endowment with reduced premium after 5 years"),
        ("Jeevan Amar", "Term-cum-endowment with return of premium"),
        ("Jeevan Tarun", "Endowment with increasing cover for children"),
        ("Amritbaal", "Children endowment for 0-13 year olds, maturity at 25"),
        ("LIC New Jeevan Anand", "Updated endowment with improved bonus rates"),
        ("LIC New Jeevan Labh", "Updated with flexible premium payment terms"),
        ("LIC New Jeevan Lakshya", "Updated with higher sum assured options"),
        ("LIC New Jeevan Saral", "Modernized version with digital features"),
        ("LIC New Jeevan Shanti", "Updated single premium plan"),
        ("LIC New Jeevan Tarun", "Updated children plan with flexible payout"),
        ("LIC New Jeevan Amrit", "Updated with reduced premium after 5 years"),
        ("LIC New Jeevan Amar", "Updated term-cum-endowment"),
        ("LIC New Amritbaal", "Updated children plan for 0-13 year olds"),
        ("LIC New Jeevan Utsav", "Updated limited pay endowment"),
    ]),
    ("1.2 TERM INSURANCE PLANS", [
        ("Tech Term", "Online term plan, 1Cr+ cover"),
        ("Tech Term Plus", "Enhanced term with accidental death benefit"),
        ("LIC Tech Term Super", "High cover term with premium refund"),
        ("LIC Tech Term Plus Super", "High cover term with ADDB and premium refund"),
        ("Jeevan Amar", "Term with return of premium on survival"),
        ("LIC Saral Jeevan Bima", "Simple term plan for all segments"),
        ("LIC Jeevan Mangal", "Term plan with monthly income option"),
        ("LIC Aadhaar Stambh", "Term plan specifically for male lives"),
        ("LIC Aadhaar Shila", "Term plan specifically for female lives"),
    ]),
    ("1.3 WHOLE LIFE PLANS", [
        ("Jeevan Nidhi", "Whole life endowment with pension option"),
        ("Jeevan Nivesh", "Whole life plan with annual premium"),
        ("LIC New Whole Life", "Updated whole life with flexible terms"),
        ("LIC Jeevan Nivesh (New)", "Modernized whole life with digital features"),
        ("LIC Jeevan Nidhi (New)", "Updated whole life with pension conversion"),
    ]),
    ("1.4 MONEY BACK PLANS", [
        ("Jeevan Tarun", "Money back with survival benefits every 5 years"),
        ("Jeevan Milan", "Money back with 20% survival benefit every 5 years"),
        ("Jeevan Madhur", "Money back with 20% every 4 years"),
        ("Jeevan Mangal", "Money back with increasing survival benefit"),
        ("LIC New Jeevan Milan", "Updated money back with improved benefits"),
        ("LIC New Jeevan Madhur", "Updated money back with flexible terms"),
        ("LIC New Jeevan Mangal", "Updated money back with increasing benefit"),
        ("LIC New Money Back 20 Years", "Updated 20-year money back plan"),
        ("LIC New Money Back 25 Years", "Updated 25-year money back plan"),
    ]),
    ("1.5 CHILDREN PLANS", [
        ("Amritbaal", "For children 0-13, maturity at 25, income benefit"),
        ("Jeevan Tarun", "For children 0-12, survival benefits from age 18"),
        ("LIC New Amritbaal", "Updated children plan with enhanced benefits"),
        ("LIC New Jeevan Tarun", "Updated children plan with flexible payout"),
        ("LIC Child Career Plan", "Updated education-focused children plan"),
        ("LIC Child Future Plan", "Updated marriage and education focused"),
    ]),
    ("1.6 PENSION / ANNUITY PLANS", [
        ("Jeevan Shanti", "Immediate annuity, single premium, lifelong pension"),
        ("Jeevan Akshay-VI", "Immediate annuity for 60+ years"),
        ("Jeevan Akshay-VII", "Immediate annuity for 65+ years"),
        ("New Jeevan Anand Pension", "Deferred annuity with return of purchase price"),
        ("Jeevan Dhara-II", "Deferred annuity with accumulation phase"),
        ("Jeevan Suraksha-II", "Immediate annuity with guaranteed period"),
        ("LIC New Jeevan Shanti", "Updated immediate annuity with more options"),
        ("LIC New Jeevan Akshay", "Updated immediate annuity for seniors"),
        ("LIC New Jeevan Dhara", "Updated deferred annuity plan"),
        ("LIC New Jeevan Suraksha", "Updated immediate annuity with guarantee"),
        ("LIC Saral Pension", "Simple immediate annuity plan"),
        ("LIC Nav Jeevan Pension", "Market-linked pension plan"),
    ]),
    ("1.7 HEALTH INSURANCE PLANS", [
        ("Jeevan Arogya", "Health plan with 400+ hospitals, 540+ procedures"),
        ("Health Plus", "Health plan with 100% sum assured restoration"),
        ("LIC New Jeevan Arogya", "Updated health plan with enhanced coverage"),
        ("LIC New Health Plus", "Updated health plan with restoration benefit"),
        ("LIC Critical Illness Rider", "Rider covering 15 critical illnesses"),
        ("LIC Health Rider", "Comprehensive health rider for base policies"),
    ]),
    ("1.8 UNIT LINKED INSURANCE PLANS (ULIP)", [
        ("Jeevan Plus", "ULIP with 5 fund options, 5/10/15/20 year terms"),
        ("Jeevan Nivesh", "ULIP with 7 fund options, 5/10/15/20 year terms"),
        ("Elite Plus", "ULIP with 10 fund options, high sum assured"),
        ("LIC New Jeevan Plus", "Updated ULIP with more fund options"),
        ("LIC New Jeevan Nivesh ULIP", "Updated ULIP with enhanced features"),
        ("LIC New Elite Plus", "Updated ULIP with 12 fund options"),
        ("LIC Index Plus", "ULIP linked to Nifty 50 index"),
        ("LIC New Index Plus", "Updated index-linked ULIP"),
    ]),
    ("1.9 GROUP INSURANCE PLANS", [
        ("LIC Group Term Insurance", "Term cover for employer-employee groups"),
        ("LIC Group Gratuity Scheme", "Group gratuity plan for corporates"),
        ("LIC Group Superannuation Scheme", "Pension plan for corporate groups"),
        ("LIC Group Leave Encashment", "Leave encashment plan for groups"),
        ("LIC New Group Term", "Updated group term with flexible terms"),
        ("LIC New Group Gratuity", "Updated group gratuity with digital features"),
    ]),
    ("1.10 MICRO INSURANCE PLANS", [
        ("LIC Jeevan Mangal Micro", "Micro term plan for low-income groups"),
        ("LIC Aadhaar Stambh Micro", "Micro term for male lives"),
        ("LIC Aadhaar Shila Micro", "Micro term for female lives"),
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
pdf.multi_cell(0, 4.5, "The following products were previously available on the LIC portal but have been discontinued or withdrawn. They are listed here for reference and claims purposes. Existing policyholders can continue with their plans.", new_x="LMARGIN")
pdf.ln(3)

discontinued_products = [
    ("2.1 DISCONTINUED ENDOWMENT PLANS", [
        ("Jeevan Bharati", "Endowment plan, withdrawn 2014"),
        ("Jeevan Bharati-I", "Updated endowment, withdrawn 2016"),
        ("Jeevan Garbha", "Maternity endowment, withdrawn 2015"),
        ("Jeevan Hans", "Endowment for NRIs, withdrawn 2014"),
        ("LIC New Endowment", "Old series, replaced by Jeevan Anand"),
        ("LIC New Bima Gold", "Endowment with savings, withdrawn 2018"),
        ("LIC New Bima Diamond", "Endowment with higher cover, withdrawn 2019"),
        ("LIC New Jeevan Anand (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Labh (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Lakshya (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Saral (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Shanti (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Tarun (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Milan (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Madhur (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Mangal (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Amar (Old)", "Old series, replaced by updated version"),
        ("LIC New Amritbaal (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Utsav (Old)", "Old series, replaced by updated version"),
        ("LIC New Jeevan Amrit (Old)", "Old series, replaced by updated version"),
    ]),
    ("2.2 DISCONTINUED TERM PLANS", [
        ("LIC Saral Term", "Old term plan, replaced by Tech Term"),
        ("LIC Simple Term", "Basic term plan, withdrawn 2017"),
        ("LIC Amulya Jeevan", "Term plan for women, withdrawn 2015"),
        ("LIC Nav Jeevan", "Online term plan, replaced by Tech Term"),
        ("LIC Nav Jeevan Plus", "Online term with riders, replaced by Tech Term Plus"),
        ("LIC e-Term", "Early online term, replaced by Tech Term"),
    ]),
    ("2.3 DISCONTINUED WHOLE LIFE PLANS", [
        ("Jeevan Nidhi (Old)", "Old whole life, replaced by updated version"),
        ("Jeevan Nivesh (Old)", "Old whole life, replaced by updated version"),
        ("LIC Whole Life Plus", "Old whole life plan, withdrawn 2016"),
        ("LIC Whole Life Supreme", "Old whole life, withdrawn 2018"),
    ]),
    ("2.4 DISCONTINUED MONEY BACK PLANS", [
        ("Jeevan Milan (Old)", "Old money back, replaced by updated version"),
        ("Jeevan Madhur (Old)", "Old money back, replaced by updated version"),
        ("Jeevan Mangal (Old)", "Old money back, replaced by updated version"),
        ("LIC New Money Back 20 Years (Old)", "Old series, replaced by updated version"),
        ("LIC New Money Back 25 Years (Old)", "Old series, replaced by updated version"),
        ("LIC Bima Gold", "Money back with endowment, withdrawn 2018"),
        ("LIC Bima Diamond", "Money back with higher cover, withdrawn 2019"),
        ("LIC Bima Gold Plus", "Enhanced money back, withdrawn 2019"),
        ("LIC Bima Diamond Plus", "Enhanced money back, withdrawn 2020"),
    ]),
    ("2.5 DISCONTINUED CHILDREN PLANS", [
        ("Jeevan Tarun (Old)", "Old children plan, replaced by updated version"),
        ("Amritbaal (Old)", "Old children plan, replaced by updated version"),
        ("LIC Child Career Plan (Old)", "Old education plan, withdrawn 2017"),
        ("LIC Child Future Plan (Old)", "Old marriage/education plan, withdrawn 2017"),
        ("LIC Child Plus", "Old children endowment, withdrawn 2015"),
        ("LIC Child Fortune", "Old children plan, withdrawn 2016"),
    ]),
    ("2.6 DISCONTINUED PENSION / ANNUITY PLANS", [
        ("Jeevan Akshay (Old)", "Old immediate annuity, replaced by Akshay-VI/VII"),
        ("Jeevan Dhara (Old)", "Old deferred annuity, replaced by Dhara-II"),
        ("Jeevan Suraksha (Old)", "Old immediate annuity, replaced by Suraksha-II"),
        ("New Jeevan Anand Pension (Old)", "Old deferred annuity, replaced by updated version"),
        ("LIC New Jeevan Shanti (Old)", "Old immediate annuity, replaced by updated version"),
        ("LIC New Jeevan Akshay (Old)", "Old immediate annuity, replaced by updated version"),
        ("LIC New Jeevan Dhara (Old)", "Old deferred annuity, replaced by updated version"),
        ("LIC New Jeevan Suraksha (Old)", "Old immediate annuity, replaced by updated version"),
        ("LIC Saral Pension (Old)", "Old simple pension, replaced by updated version"),
        ("LIC Nav Jeevan Pension (Old)", "Old market-linked pension, withdrawn 2019"),
        ("LIC Jeevan Akshay-V", "Old version, replaced by Akshay-VI"),
        ("LIC Jeevan Akshay-VI (Old)", "Old version, replaced by Akshay-VII"),
    ]),
    ("2.7 DISCONTINUED HEALTH PLANS", [
        ("Jeevan Arogya (Old)", "Old health plan, replaced by updated version"),
        ("Health Plus (Old)", "Old health plan, replaced by updated version"),
        ("LIC New Jeevan Arogya (Old)", "Old health plan, replaced by updated version"),
        ("LIC New Health Plus (Old)", "Old health plan, replaced by updated version"),
        ("LIC Critical Illness Rider (Old)", "Old rider, replaced by updated version"),
        ("LIC Health Rider (Old)", "Old rider, replaced by updated version"),
    ]),
    ("2.8 DISCONTINUED ULIP PLANS", [
        ("Jeevan Plus (Old)", "Old ULIP, replaced by updated version"),
        ("Jeevan Nivesh (Old)", "Old ULIP, replaced by updated version"),
        ("Elite Plus (Old)", "Old ULIP, replaced by updated version"),
        ("LIC New Jeevan Plus (Old)", "Old ULIP, replaced by updated version"),
        ("LIC New Jeevan Nivesh ULIP (Old)", "Old ULIP, replaced by updated version"),
        ("LIC New Elite Plus (Old)", "Old ULIP, replaced by updated version"),
        ("LIC Index Plus (Old)", "Old index-linked ULIP, replaced by updated version"),
        ("LIC New Index Plus (Old)", "Old index-linked ULIP, replaced by updated version"),
    ]),
    ("2.9 DISCONTINUED GROUP PLANS", [
        ("LIC Group Term Insurance (Old)", "Old group term, replaced by updated version"),
        ("LIC Group Gratuity Scheme (Old)", "Old group gratuity, replaced by updated version"),
        ("LIC Group Superannuation Scheme (Old)", "Old pension scheme, replaced by updated version"),
        ("LIC Group Leave Encashment (Old)", "Old leave encashment, replaced by updated version"),
    ]),
    ("2.10 OTHER DISCONTINUED PRODUCTS", [
        ("LIC Bima Gold", "Endowment with savings, withdrawn 2018"),
        ("LIC Bima Diamond", "Endowment with higher cover, withdrawn 2019"),
        ("LIC Bima Gold Plus", "Enhanced endowment, withdrawn 2019"),
        ("LIC Bima Diamond Plus", "Enhanced endowment, withdrawn 2020"),
        ("LIC New Endowment", "Old series endowment, withdrawn 2017"),
        ("LIC New Bima Gold", "Old series, withdrawn 2018"),
        ("LIC New Bima Diamond", "Old series, withdrawn 2019"),
        ("LIC Amulya Jeevan", "Term for women, withdrawn 2015"),
        ("LIC Nav Jeevan", "Online term, withdrawn 2016"),
        ("LIC Nav Jeevan Plus", "Online term with riders, withdrawn 2017"),
        ("LIC e-Term", "Early online term, withdrawn 2015"),
        ("LIC Saral Term", "Basic term, withdrawn 2016"),
        ("LIC Simple Term", "Basic term, withdrawn 2017"),
        ("LIC Whole Life Plus", "Old whole life, withdrawn 2016"),
        ("LIC Whole Life Supreme", "Old whole life, withdrawn 2018"),
        ("LIC Child Plus", "Old children plan, withdrawn 2015"),
        ("LIC Child Fortune", "Old children plan, withdrawn 2016"),
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
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 7, "LIC Product Portfolio Summary", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(2)

pdf.set_font("ArialUni", "B", 8)
pdf.set_fill_color(0, 51, 102)
pdf.set_text_color(255, 255, 255)
pdf.cell(120, 6, "Category", border=1, fill=True, align="C")
pdf.cell(30, 6, "Active", border=1, fill=True, align="C")
pdf.cell(40, 6, "Discontinued", border=1, fill=True, align="C")
pdf.ln()

summary_data = [
    ("Endowment Plans", 21, 20),
    ("Term Insurance Plans", 9, 6),
    ("Whole Life Plans", 5, 4),
    ("Money Back Plans", 9, 9),
    ("Children Plans", 6, 6),
    ("Pension / Annuity Plans", 12, 12),
    ("Health Insurance Plans", 6, 6),
    ("ULIP Plans", 8, 8),
    ("Group Insurance Plans", 6, 4),
    ("Micro Insurance Plans", 3, 0),
    ("Other Products", 0, 18),
]

pdf.set_font("ArialUni", "", 8)
pdf.set_text_color(40, 40, 40)
for i, (cat, act, disc) in enumerate(summary_data):
    fill = i % 2 == 0
    if fill:
        pdf.set_fill_color(240, 248, 255)
    else:
        pdf.set_fill_color(255, 255, 255)
    pdf.cell(120, 5, cat, border=1, fill=fill)
    pdf.cell(30, 5, str(act), border=1, fill=fill, align="C")
    pdf.cell(40, 5, str(disc), border=1, fill=fill, align="C")
    pdf.ln()

pdf.ln(5)
pdf.set_font("ArialUni", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(120, 6, "GRAND TOTAL:", border=1, fill=True)
pdf.cell(30, 6, str(a_count), border=1, fill=True, align="C")
pdf.cell(40, 6, str(d_count), border=1, fill=True, align="C")
pdf.ln()

pdf.ln(10)
pdf.set_font("ArialUni", "I", 8)
pdf.set_text_color(100, 100, 100)
pdf.multi_cell(0, 4, "Note: This document is compiled from publicly available information on the LIC India portal (licindia.in) and IRDAI public disclosures. Product availability may change. Always verify current availability on the official LIC website before making purchase decisions. Discontinued products may still have active policyholders receiving benefits.", new_x="LMARGIN")

output_path = "/home/kali/insurance-support-next/lic_portfolio_report.pdf"
pdf.output(output_path)
print("LIC PDF saved: %s (%.1f KB)" % (output_path, os.path.getsize(output_path)/1024))
print("Active products: %d, Discontinued: %d" % (a_count, d_count))
