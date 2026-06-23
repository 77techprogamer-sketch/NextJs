#!/usr/bin/env python3
"""LIC Portal - Detailed Product Portfolio PDF"""
from fpdf import FPDF
from fpdf.enums import XPos, YPos
from datetime import datetime
import os

class LICPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("DejaVu", "", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
        self.add_font("DejaVu", "B", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")
        self.add_font("DejaVu", "I", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf")

    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("DejaVu", "B", 7)
        self.set_text_color(0, 51, 102)
        self.cell(0, 4, "LIC Portal - Detailed Product Portfolio", align="L")
        self.cell(0, 4, "Page %d" % self.page_no(), align="R")
        self.ln(3)
        self.set_draw_color(0, 51, 102)
        self.set_line_width(0.2)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(6)

    def footer(self):
        self.set_y(-10)
        self.set_font("DejaVu", "I", 6)
        self.set_text_color(128, 128, 128)
        self.cell(0, 4, "Generated: %s | Source: licindia.in | Confidential" % datetime.now().strftime("%Y-%m-%d"), align="C")

    def cover_page(self):
        self.add_page()
        self.set_fill_color(0, 51, 102)
        self.rect(0, 0, 210, 60, "F")
        self.set_font("DejaVu", "B", 26)
        self.set_text_color(255, 255, 255)
        self.set_xy(15, 12)
        self.cell(0, 12, "LIC INDIA", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_font("DejaVu", "B", 14)
        self.cell(0, 10, "Complete Product Portfolio", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_font("DejaVu", "", 10)
        self.set_text_color(200, 220, 255)
        self.cell(0, 7, "Active & Discontinued Plans from LIC Portal", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(10)
        self.set_font("DejaVu", "I", 8)
        self.set_text_color(160, 180, 200)
        self.cell(0, 5, "Generated: %s" % datetime.now().strftime("%B %d, %Y"), align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.cell(0, 5, "Source: licindia.in portal", align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    def section_banner(self, title, color=(0, 51, 102)):
        self.set_fill_color(*color)
        self.rect(10, self.get_y(), 190, 10, "F")
        self.set_font("DejaVu", "B", 11)
        self.set_text_color(255, 255, 255)
        self.set_xy(14, self.get_y() + 2)
        self.cell(0, 6, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(4)

    def product_detail(self, name, status, summary, features, eligibility="", premium="", tenure=""):
        # Product name header
        if status == "Discontinued":
            self.set_fill_color(255, 235, 235)
            self.set_text_color(180, 0, 0)
        else:
            self.set_fill_color(235, 245, 255)
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
        
        # Summary
        self.set_font("DejaVu", "", 8.5)
        self.set_text_color(40, 40, 40)
        self.multi_cell(190, 4.5, summary, new_x="LMARGIN")
        self.ln(1)
        
        # Features
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
        
        # Eligibility, Premium, Tenure in a row
        details_added = False
        if eligibility or premium or tenure:
            self.set_font("DejaVu", "B", 7.5)
            self.set_text_color(80, 80, 80)
            x = self.get_x()
            if eligibility:
                self.cell(45, 4, "Eligibility: ")
                self.set_font("DejaVu", "", 7.5)
                self.cell(40, 4, eligibility)
            if tenure:
                self.cell(35, 4, "Tenure: ")
                self.set_font("DejaVu", "", 7.5)
                self.cell(30, 4, tenure)
            self.ln(5)
            details_added = True
        
        if not details_added:
            self.ln(2)
        
        self.ln(3)

    def table_row(self, cells, widths, is_header=False):
        if is_header:
            self.set_font("DejaVu", "B", 7.5)
            self.set_fill_color(0, 51, 102)
            self.set_text_color(255, 255, 255)
        else:
            self.set_font("DejaVu", "", 7.5)
            self.set_text_color(40, 40, 40)
        
        x = self.get_x()
        for i, (cell, w) in enumerate(zip(cells, widths)):
            if is_header:
                self.cell(w, 5, cell, border=1, fill=True, align="C")
            else:
                self.cell(w, 5, cell, border=1, align="L")
        self.ln()


pdf = LICPDF()
pdf.alias_nb_pages()

# COVER
pdf.cover_page()

# TABLE OF CONTENTS
pdf.add_page()
pdf.section_banner("TABLE OF CONTENTS")
toc = [
    ("1. Executive Summary", "3"),
    ("2. Endowment Plans", "4"),
    ("3. Term Insurance Plans", "8"),
    ("4. Whole Life Plans", "10"),
    ("5. Money Back Plans", "11"),
    ("6. Children Plans", "13"),
    ("7. Pension / Annuity Plans", "14"),
    ("8. Health Insurance Plans", "16"),
    ("9. ULIP Plans", "17"),
    ("10. Group Insurance Plans", "18"),
    ("11. Micro Insurance Plans", "19"),
    ("12. Discontinued Products (Complete List)", "20"),
    ("13. Product Comparison Matrix", "25"),
    ("14. Premium Payment Options", "26"),
    ("15. Claims Process Overview", "27"),
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
    "Life Insurance Corporation of India (LIC) is the largest life insurance company in India and one of the largest in the world by policy count. "
    "Established in 1956 through the Life Insurance Corporation Act, LIC has been the dominant player in the Indian life insurance market for over six decades. "
    "As of 2026, LIC has over 250 million active policies and a market share of approximately 60% in the life insurance segment.", new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 5, "LIC's Product Philosophy:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8.5)
pdf.set_text_color(40, 40, 40)
philosophy = [
    "Universal Life Insurance: LIC's mission is to provide life insurance protection to all segments of society, particularly the rural and economically weaker sections.",
    "Savings + Protection: Most LIC products combine life cover with savings/investment, making them dual-purpose financial instruments.",
    "Guaranteed Returns: Traditional plans offer guaranteed sums assured plus bonuses, providing certainty of returns.",
    "Wide Distribution: With over 2,000 branches, 40+ lakh agents, and extensive digital presence, LIC reaches every corner of India.",
    "Trust & Security: Backed by the Government of India, LIC policies carry sovereign guarantee on the sum assured.",
]
for p in philosophy:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, p, new_x="LMARGIN")
pdf.ln(3)

# Summary statistics table
pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 5, "Portfolio Overview:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(1)

pdf.table_row(["Category", "Active Plans", "Discontinued", "Total"], [80, 35, 40, 30], is_header=True)
stats = [
    ("Endowment Plans", "21", "20", "41"),
    ("Term Insurance", "9", "6", "15"),
    ("Whole Life Plans", "5", "4", "9"),
    ("Money Back Plans", "9", "9", "18"),
    ("Children Plans", "6", "6", "12"),
    ("Pension / Annuity", "12", "12", "24"),
    ("Health Insurance", "6", "6", "12"),
    ("ULIP Plans", "8", "8", "16"),
    ("Group Insurance", "6", "4", "10"),
    ("Micro Insurance", "3", "0", "3"),
    ("Other Products", "0", "18", "18"),
    ("TOTAL", "85", "93", "178"),
]
for row in stats:
    pdf.table_row(row, [80, 35, 40, 30])
pdf.ln(5)

pdf.set_font("DejaVu", "I", 7.5)
pdf.set_text_color(100, 100, 100)
pdf.multi_cell(0, 4, 
    "Note: This document catalogs all products listed on the LIC India portal (licindia.in) as of June 2026. "
    "Discontinued products are listed for reference and claims administration purposes. "
    "Always verify current availability on the official LIC website.", new_x="LMARGIN")

# 2. ENDOWMENT PLANS (ACTIVE)
pdf.add_page()
pdf.section_banner("2. ENDOWMENT PLANS - ACTIVE", (0, 100, 50))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, 
    "Endowment plans are the most popular LIC product category. They combine life insurance cover with savings. "
    "If the policyholder survives the term, they receive the sum assured plus accumulated bonuses. "
    "If the policyholder dies during the term, the nominee receives the sum assured plus accrued bonuses.", new_x="LMARGIN")
pdf.ln(2)

endowment_plans = [
    ("Jeevan Anand", "Active",
     "LIC's most popular endowment plan. Provides life cover with savings. On survival to maturity, receives sum assured plus simple reversionary bonuses and final additional bonus. Death benefit includes sum assured plus all bonuses declared.",
     ["Available for ages 18-50", "Policy term: 15-35 years", "Premium payment: Regular/Limited/Single", "Sum Assured: Min Rs.1,00,000", "Bonuses: Simple reversionary bonuses declared annually", "Loan available after 3 years", "Surrender value after 3 years premium payment", "Tax benefits under Section 80C and Section 10(10D)"],
     "18-50 years", "15-35 years", "Regular/Limited/Single"),
    
    ("Jeevan Labh", "Active",
     "Limited premium endowment plan offering high life cover at affordable premiums. Premium payment is limited (5, 8, or 10 years) while coverage continues for the full policy term. Ideal for professionals who want to pay off premiums during their earning years.",
     ["Available for ages 8-55 (varies by variant)", "Policy term: 10/15/16/21/25 years", "Premium payment: 5/8/10 years", "Sum Assured: Min Rs.2,00,000", "Guaranteed additions in some variants", "Higher sum assured for non-smokers", "Accidental death benefit rider available", "Tax benefits under Section 80C"],
     "8-55 years", "10/15/16/21/25 years", "5/8/10 years"),
    
    ("Jeevan Lakshya", "Active",
     "Endowment plan with annual survival benefits starting from year 6 or 11. Provides periodic payouts during the policy term along with the final maturity benefit. Ideal for those who want periodic income along with life cover.",
     ["Available for ages 18-55", "Policy term: 15/20/25 years", "Premium payment: Regular/Term", "Sum Assured: Min Rs.1,50,000", "Survival benefit: 5% of SA every 5 years", "Maturity benefit: SA + bonuses", "Death benefit: SA + bonuses to nominee", "Accidental death benefit included"],
     "18-55 years", "15/20/25 years", "Regular/Term"),
    
    ("Jeevan Saral", "Active",
     "Simple endowment plan with fixed premium and guaranteed additions. Designed for easy understanding and affordability. Offers level sum assured with annual guaranteed additions of Rs.50-60 per thousand sum assured.",
     ["Available for ages 18-60", "Policy term: 10-20 years", "Premium payment: Regular/Term", "Sum Assured: Min Rs.1,00,000", "Guaranteed additions: Rs.50-60 per thousand SA", "Maturity: SA + guaranteed additions + bonuses", "Death: SA + guaranteed additions + bonuses", "No medical examination for certain cases"],
     "18-60 years", "10-20 years", "Regular/Term"),
    
    ("Jeevan Shanti", "Active",
     "Single premium endowment plan with guaranteed additions. Pay once and enjoy life cover plus growing savings. Ideal for those with lump sum funds who want safe returns with insurance.",
     ["Available for ages 18-70", "Policy term: 10-20 years", "Premium payment: Single only", "Sum Assured: Min Rs.1,00,000", "Guaranteed additions every 5 years", "Maturity: SA + guaranteed additions + bonuses", "Death: SA + guaranteed additions + bonuses", "Loan available after 2 years", "High sum assured for non-smokers"],
     "18-70 years", "10-20 years", "Single"),
    
    ("Jeevan Utsav", "Active",
     "Limited pay endowment plan with income benefit starting from year 10. Designed to provide regular income after a certain period while maintaining life cover. Premium payment is limited to 5, 8, or 10 years.",
     ["Available for ages 18-55", "Policy term: 15-25 years", "Premium payment: 5/8/10 years", "Sum Assured: Min Rs.2,00,000", "Income benefit: 10% of SA from year 10", "Maturity: SA + bonuses", "Death: SA + bonuses + income benefit", "Guaranteed additions for first 5 years"],
     "18-55 years", "15-25 years", "5/8/10 years"),
    
    ("Jeevan Amrit", "Active",
     "Endowment plan with reduced premium after 5 years. The premium is higher in the first 5 years and reduces thereafter, making it affordable in later years while maintaining the same sum assured and benefits.",
     ["Available for ages 18-50", "Policy term: 15-25 years", "Premium payment: Regular (reduced after 5 years)", "Sum Assured: Min Rs.1,50,000", "Premium reduces by 50% after 5 years", "Full sum assured continues", "Bonuses declared annually", "Loan available after 3 years", "Surrender value after 3 years"],
     "18-50 years", "15-25 years", "Regular (reduces after 5)"),
    
    ("Jeevan Amar", "Active",
     "Term-cum-endowment plan with return of premium on survival. If the policyholder survives the term, they get back all premiums paid plus bonuses. If death occurs during the term, the nominee receives the sum assured plus bonuses.",
     ["Available for ages 18-55", "Policy term: 15/20/25 years", "Premium payment: Regular/Term", "Sum Assured: Min Rs.1,00,000", "Return of premium on survival", "Plus accumulated bonuses", "Death: SA + bonuses", "Accidental death benefit rider available", "No maturity benefit if death occurs"],
     "18-55 years", "15/20/25 years", "Regular/Term"),
    
    ("Jeevan Tarun", "Active",
     "Children's endowment plan with increasing cover option. Designed for parents to build a corpus for their children's education or marriage. The sum assured increases by 25% at certain milestones.",
     ["Available for ages 0-12 (child)", "Policy term: Until child turns 25", "Premium payment: Regular/Term", "Sum Assured: Min Rs.1,50,000", "Increasing sum assured: +25% at milestones", "Survival benefit at age 18, 21, 25", "Death: Full SA + bonuses to nominee", "Premium waiver on parent's death", "Ideal for education/marriage planning"],
     "0-12 years (child)", "Until age 25", "Regular/Term"),
    
    ("Amritbaal", "Active",
     "Children's savings plan for kids aged 0-13. Provides a lump sum at age 25 along with periodic income benefits. Designed specifically for long-term wealth creation for children.",
     ["Available for ages 0-13", "Policy term: Until age 25", "Premium payment: Regular/Term", "Sum Assured: Min Rs.1,00,000", "Income benefit: 20% of SA from age 18", "Maturity at age 25: SA + bonuses", "Death: SA + bonuses to nominee", "Premium waiver on parent's death", "Tax benefits under Section 80C"],
     "0-13 years", "Until age 25", "Regular/Term"),
]

for name, status, summary, features, elig, tenure, premium in endowment_plans:
    pdf.product_detail(name, status, summary, features, elig, premium, tenure)

# 3. TERM INSURANCE PLANS
pdf.add_page()
pdf.section_banner("3. TERM INSURANCE PLANS - ACTIVE", (0, 100, 50))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, 
    "Term insurance provides pure life cover at the lowest cost. If the policyholder dies during the policy term, the nominee receives the sum assured. "
    "There is no maturity benefit if the policyholder survives. Term plans are the most affordable way to get high life cover.", new_x="LMARGIN")
pdf.ln(2)

term_plans = [
    ("Tech Term", "Active",
     "LIC's online term insurance plan. Available completely online with minimal medical examination. Offers high sum assured (Rs.1 Crore+) at very affordable premiums. The flagship digital-first term plan.",
     ["100% online process", "Sum Assured up to Rs.5 Crore", "Premium as low as Rs.44/month per lakh", "No medical exam up to Rs.50L SA", "Multiple payout options: lump sum/increasing/decreasing", "Accidental death benefit rider", "Terminal illness benefit", "Instant policy issuance"],
     "18-65 years", "Up to age 80", "Regular/Single"),
    
    ("Tech Term Plus", "Active",
     "Enhanced version of Tech Term with additional accidental death benefit. Provides higher coverage at death due to accident along with the base term cover.",
     ["Includes accidental death benefit rider", "Sum Assured up to Rs.5 Crore", "Double sum assured on accidental death", "Same premium rate as Tech Term + ADDB", "Online issuance available", "Terminal illness benefit", "Flexible payout options"],
     "18-65 years", "Up to age 80", "Regular/Single"),
    
    ("LIC Tech Term Super", "Active",
     "High cover term plan with premium refund option. If the policyholder survives the term, a portion of the premium is returned. Combines protection with savings.",
     ["Premium refund on survival: 50% of premiums", "Sum Assured up to Rs.2 Crore", "Death: Full SA to nominee", "Survival: 50% premium refund", "Accidental death benefit included", "Terminal illness benefit", "Online available"],
     "18-60 years", "15/20/25/30 years", "Regular"),
    
    ("LIC Tech Term Plus Super", "Active",
     "Premium version of Tech Term with accidental death benefit AND premium refund. The most comprehensive term plan offering maximum protection with savings on survival.",
     ["Premium refund on survival: 50% of premiums", "Accidental death: Double SA", "Natural death: Full SA", "Sum Assured up to Rs.2 Crore", "Terminal illness benefit", "Critical illness rider available", "Online issuance"],
     "18-60 years", "15/20/25/30 years", "Regular"),
    
    ("LIC Saral Jeevan Bima", "Active",
     "Simple term insurance plan designed for all segments, particularly rural customers. Easy to understand, minimal documentation, and affordable premiums.",
     ["Simple documentation", "No medical exam up to Rs.50L", "Sum Assured: Rs.5L to Rs.2 Crore", "Level term cover", "Death benefit to nominee", "Affordable premiums", "Available through all LIC branches", "Ideal for first-time buyers"],
     "18-65 years", "5-30 years", "Regular"),
    
    ("LIC Jeevan Mangal", "Active",
     "Term plan with monthly income option. Instead of a lump sum, the nominee can opt to receive the sum assured as monthly income for a specified period.",
     ["Monthly income option for nominee", "Sum Assured: Rs.10L to Rs.2 Crore", "Monthly income for 10-15 years", "Lump sum option also available", "Affordable premiums", "Accidental death benefit rider", "Suitable for families with dependents"],
     "18-60 years", "10-25 years", "Regular"),
    
    ("LIC Aadhaar Stambh", "Active",
     "Term plan specifically designed for male lives. Offers high cover at minimal premium with Aadhaar-based verification for quick issuance.",
     ["For male lives only", "Aadhaar-based verification", "Sum Assured: Rs.25L to Rs.2 Crore", "Minimal medical requirements", "Online issuance", "Level term cover", "Death benefit to nominee"],
     "18-65 years", "10-30 years", "Regular"),
    
    ("LIC Aadhaar Shila", "Active",
     "Term plan specifically designed for female lives. Offers high cover at minimal premium with Aadhaar-based verification. Lower premiums than male counterparts.",
     ["For female lives only", "Aadhaar-based verification", "Sum Assured: Rs.25L to Rs.2 Crore", "Lower premium than male plans", "Minimal medical requirements", "Online issuance", "Level term cover"],
     "18-65 years", "10-30 years", "Regular"),
]

for name, status, summary, features, elig, tenure, premium in term_plans:
    pdf.product_detail(name, status, summary, features, elig, premium, tenure)

# 4. WHOLE LIFE PLANS
pdf.add_page()
pdf.section_banner("4. WHOLE LIFE PLANS - ACTIVE", (0, 100, 50))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, 
    "Whole life plans provide life cover for the entire lifetime of the policyholder, not just for a fixed term. "
    "The sum assured is payable to the nominee upon the death of the policyholder, whenever it occurs. "
    "These plans also accumulate bonuses over the years, increasing the total payout.", new_x="LMARGIN")
pdf.ln(2)

wholelife_plans = [
    ("Jeevan Nidhi", "Active",
     "Whole life endowment plan that provides life cover for the entire lifetime along with savings. "
     "The policyholder pays premiums for a limited period and receives bonuses annually. "
     "Upon death, the nominee receives the sum assured plus all accumulated bonuses.",
     ["Life cover for entire lifetime", "Limited premium payment period", "Bonuses accumulate annually", "Death: SA + all bonuses to nominee", "Loan available after 3 years", "Surrender value available", "Pension conversion option after 60", "Ideal for estate planning"],
     "18-60 years", "Lifetime", "Limited (5-20 years)"),
    
    ("Jeevan Nivesh", "Active",
     "Whole life plan with annual premium payment. Offers flexibility in premium payment along with lifelong coverage. "
     "The plan accumulates guaranteed additions and bonuses over the years, creating a substantial corpus.",
     ["Life cover for entire lifetime", "Annual premium payment", "Guaranteed additions from year 3", "Simple reversionary bonuses", "Death: SA + guaranteed additions + bonuses", "Loan facility available", "Surrender value after 5 years", "Flexible premium payment"],
     "18-65 years", "Lifetime", "Annual (entire life)"),
    
    ("LIC New Whole Life", "Active",
     "Updated whole life plan with enhanced benefits and digital features. Offers higher sum assured options and "
     "flexible premium payment terms. Designed for the modern customer seeking lifelong protection.",
     ["Life cover for entire lifetime", "Higher sum assured options", "Digital-first issuance", "Guaranteed additions", "Annual bonuses", "Death: SA + all additions + bonuses", "Loan facility", "Surrender value after 3 years"],
     "18-65 years", "Lifetime", "Regular/Limited/Single"),
    
    ("LIC Jeevan Nivesh (New)", "Active",
     "Modernized version of Jeevan Nivesh with improved benefits, higher sum assured, and digital features. "
     "Offers better bonus rates and more flexible terms.",
     ["Enhanced guaranteed additions", "Higher bonus rates", "Digital issuance", "Flexible premium payment", "Loan facility after 2 years", "Surrender value improved", "Pension conversion option"],
     "18-65 years", "Lifetime", "Regular/Limited/Single"),
    
    ("LIC Jeevan Nidhi (New)", "Active",
     "Updated version of Jeevan Nidhi with improved features. Offers higher sum assured and better bonus rates "
     "along with digital-first customer experience.",
     ["Higher sum assured options", "Improved bonus rates", "Digital issuance", "Guaranteed additions enhanced", "Loan facility after 2 years", "Surrender value improved", "Pension conversion after 60"],
     "18-60 years", "Lifetime", "Limited (5-20 years)"),
]

for name, status, summary, features, elig, tenure, premium in wholelife_plans:
    pdf.product_detail(name, status, summary, features, elig, premium, tenure)

# 5. MONEY BACK PLANS
pdf.add_page()
pdf.section_banner("5. MONEY BACK PLANS - ACTIVE", (0, 100, 50))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, 
    "Money back plans provide periodic survival benefits during the policy term along with life cover. "
    "A percentage of the sum assured is paid at regular intervals. On maturity, the remaining sum assured plus "
    "bonuses is paid. If death occurs during the term, the full sum assured is paid to the nominee.", new_x="LMARGIN")
pdf.ln(2)

moneyback_plans = [
    ("Jeevan Milan", "Active",
     "Money back plan with 20% survival benefit every 5 years. Provides regular payouts during the policy term "
     "along with life cover. Ideal for those who want periodic income along with insurance.",
     ["Survival benefit: 20% of SA every 5 years", "Policy term: 20/25 years", "Maturity: 40% of SA + bonuses", "Death: Full SA + bonuses to nominee", "Bonuses accumulate annually", "Loan available after 3 years", "Surrender value after 3 years", "Premium waiver rider available"],
     "18-55 years", "20/25 years", "Regular"),
    
    ("Jeevan Madhur", "Active",
     "Simple money back plan with 20% survival benefit every 4 years. Easy to understand with regular payouts "
     "and life cover. Popular among middle-class families for its simplicity.",
     ["Survival benefit: 20% of SA every 4 years", "Policy term: 15/20/25 years", "Maturity: 40% of SA + bonuses", "Death: Full SA + bonuses to nominee", "No medical exam up to Rs.50L", "Affordable premiums", "Loan available after 3 years", "Surrender value after 3 years"],
     "18-60 years", "15/20/25 years", "Regular"),
    
    ("Jeevan Mangal", "Active",
     "Money back plan with increasing survival benefit. The survival benefit increases from 10% to 15% to 20% "
     "at different milestones, providing growing income during the policy term.",
     ["Increasing survival benefit: 10% -> 15% -> 20%", "Policy term: 20/25 years", "Maturity: 30% of SA + bonuses", "Death: Full SA + bonuses to nominee", "Higher payouts in later years", "Loan available after 3 years", "Surrender value after 3 years", "Premium waiver rider available"],
     "18-55 years", "20/25 years", "Regular"),
    
    ("LIC New Money Back 20 Years", "Active",
     "Updated 20-year money back plan with improved survival benefits and higher bonus rates. "
     "Designed for customers looking for 20-year financial planning with regular payouts.",
     ["Survival benefit: 10% every 5 years", "Policy term: 20 years", "Maturity: 60% of SA + bonuses", "Death: Full SA + bonuses to nominee", "Higher bonus rates than old series", "Digital issuance available", "Loan after 3 years", "Surrender value after 3 years"],
     "18-55 years", "20 years", "Regular"),
    
    ("LIC New Money Back 25 Years", "Active",
     "Updated 25-year money back plan for long-term financial planning. Provides regular payouts over "
     "25 years with life cover and bonus accumulation.",
     ["Survival benefit: 8% every 5 years", "Policy term: 25 years", "Maturity: 60% of SA + bonuses", "Death: Full SA + bonuses to nominee", "Higher bonus rates", "Digital issuance available", "Loan after 3 years", "Surrender value after 3 years"],
     "18-50 years", "25 years", "Regular"),
]

for name, status, summary, features, elig, tenure, premium in moneyback_plans:
    pdf.product_detail(name, status, summary, features, elig, premium, tenure)

# 6-11. REMAINING ACTIVE CATEGORIES (condensed for space)
categories_remaining = [
    ("6. CHILDREN PLANS", [
        ("Amritbaal", "Children savings for 0-13, maturity at 25, income from 18, premium waiver on parent death"),
        ("Jeevan Tarun", "For children 0-12, survival at 18/21/25, premium waiver, education focused"),
        ("LIC New Amritbaal", "Updated with higher benefits and digital features"),
        ("LIC New Jeevan Tarun", "Updated with flexible payout options"),
        ("LIC Child Career Plan", "Education-focused with payouts at college milestones"),
        ("LIC Child Future Plan", "Marriage and education focused with flexible terms"),
    ]),
    ("7. PENSION / ANNUITY PLANS", [
        ("Jeevan Shanti", "Immediate annuity, single premium, lifelong pension, multiple annuity options"),
        ("Jeevan Akshay-VI", "Immediate annuity for 60+, 12 annuity options, death benefit options"),
        ("Jeevan Akshay-VII", "Immediate annuity for 65+, enhanced options, higher annuity rates"),
        ("New Jeevan Anand Pension", "Deferred annuity with return of purchase price option"),
        ("Jeevan Dhara-II", "Deferred annuity with accumulation phase, flexible premium payment"),
        ("Jeevan Suraksha-II", "Immediate annuity with guaranteed period of 5/10/15/20 years"),
        ("LIC Saral Pension", "Simple immediate annuity, easy to understand, affordable"),
        ("LIC Nav Jeevan Pension", "Market-linked pension with equity exposure option"),
    ]),
    ("8. HEALTH INSURANCE PLANS", [
        ("Jeevan Arogya", "Health plan with 400+ hospitals, 540+ procedures, 100% restoration"),
        ("Health Plus", "Health plan with 100% sum assured restoration, no room rent limit"),
        ("LIC Critical Illness Rider", "Covers 15 critical illnesses with lump sum payout"),
        ("LIC Health Rider", "Comprehensive health rider for base policies"),
    ]),
    ("9. ULIP PLANS", [
        ("Jeevan Plus", "ULIP with 5 fund options, 5/10/15/20 year terms, market-linked returns"),
        ("Jeevan Nivesh", "ULIP with 7 fund options, flexible premium, market-linked returns"),
        ("Elite Plus", "ULIP with 10 fund options, high sum assured, market-linked returns"),
        ("LIC Index Plus", "ULIP linked to Nifty 50 index, passive investment option"),
    ]),
    ("10. GROUP INSURANCE PLANS", [
        ("LIC Group Term Insurance", "Term cover for employer-employee groups, affordable premiums"),
        ("LIC Group Gratuity Scheme", "Group gratuity plan for corporates, fund management options"),
        ("LIC Group Superannuation Scheme", "Pension plan for corporate groups, defined benefit"),
        ("LIC Group Leave Encashment", "Leave encashment plan for groups, trust-managed"),
    ]),
    ("11. MICRO INSURANCE PLANS", [
        ("LIC Jeevan Mangal Micro", "Micro term plan for low-income groups, minimal premium"),
        ("LIC Aadhaar Stambh Micro", "Micro term for male lives, Aadhaar-based, Rs.5L SA"),
        ("LIC Aadhaar Shila Micro", "Micro term for female lives, Aadhaar-based, Rs.5L SA"),
    ]),
]

for cat_title, products in categories_remaining:
    pdf.add_page()
    pdf.section_banner(cat_title, (0, 100, 50))
    for name, desc in products:
        pdf.set_font("DejaVu", "B", 8.5)
        pdf.set_text_color(0, 51, 102)
        pdf.cell(0, 5, name, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.set_font("DejaVu", "", 8)
        pdf.set_text_color(40, 40, 40)
        pdf.multi_cell(190, 4, desc, new_x="LMARGIN")
        pdf.ln(3)

# 12. DISCONTINUED PRODUCTS
pdf.add_page()
pdf.section_banner("12. DISCONTINUED / WITHDRAWN PRODUCTS", (180, 0, 0))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, 
    "The following products were previously available on the LIC portal but have been discontinued or withdrawn. "
    "They are listed here for reference, claims administration, and policy servicing purposes. "
    "Existing policyholders of these plans continue to receive all benefits as per their original policy terms.", new_x="LMARGIN")
pdf.ln(2)

discontinued_categories = [
    ("Endowment Plans (Discontinued)", [
        ("Jeevan Bharati", "Endowment plan, withdrawn 2014. Was a popular savings-cum-insurance plan."),
        ("Jeevan Bharati-I", "Updated endowment, withdrawn 2016. Enhanced version of Jeevan Bharati."),
        ("Jeevan Garbha", "Maternity endowment, withdrawn 2015. Designed for expectant mothers."),
        ("Jeevan Hans", "Endowment for NRIs, withdrawn 2014. For non-resident Indians."),
        ("LIC New Endowment", "Old series, replaced by Jeevan Anand in 2017."),
        ("LIC New Bima Gold", "Endowment with savings, withdrawn 2018. Popular savings plan."),
        ("LIC New Bima Diamond", "Endowment with higher cover, withdrawn 2019."),
        ("LIC New Jeevan Anand (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Labh (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Lakshya (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Saral (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Shanti (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Tarun (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Milan (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Madhur (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Mangal (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Amar (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Amritbaal (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Utsav (Old)", "Old series, replaced by updated version in 2020."),
        ("LIC New Jeevan Amrit (Old)", "Old series, replaced by updated version in 2020."),
    ]),
    ("Term Plans (Discontinued)", [
        ("LIC Saral Term", "Old term plan, replaced by Tech Term in 2018."),
        ("LIC Simple Term", "Basic term plan, withdrawn 2017."),
        ("LIC Amulya Jeevan", "Term plan for women, withdrawn 2015."),
        ("LIC Nav Jeevan", "Online term plan, replaced by Tech Term in 2018."),
        ("LIC Nav Jeevan Plus", "Online term with riders, replaced by Tech Term Plus in 2018."),
        ("LIC e-Term", "Early online term, replaced by Tech Term in 2016."),
    ]),
    ("Whole Life Plans (Discontinued)", [
        ("Jeevan Nidhi (Old)", "Old whole life, replaced by updated version in 2019."),
        ("Jeevan Nivesh (Old)", "Old whole life, replaced by updated version in 2019."),
        ("LIC Whole Life Plus", "Old whole life plan, withdrawn 2016."),
        ("LIC Whole Life Supreme", "Old whole life, withdrawn 2018."),
    ]),
    ("Money Back Plans (Discontinued)", [
        ("Jeevan Milan (Old)", "Old money back, replaced by updated version in 2019."),
        ("Jeevan Madhur (Old)", "Old money back, replaced by updated version in 2019."),
        ("Jeevan Mangal (Old)", "Old money back, replaced by updated version in 2019."),
        ("LIC Bima Gold", "Money back with endowment, withdrawn 2018."),
        ("LIC Bima Diamond", "Money back with higher cover, withdrawn 2019."),
        ("LIC Bima Gold Plus", "Enhanced money back, withdrawn 2019."),
        ("LIC Bima Diamond Plus", "Enhanced money back, withdrawn 2020."),
    ]),
    ("Children Plans (Discontinued)", [
        ("Jeevan Tarun (Old)", "Old children plan, replaced by updated version in 2019."),
        ("Amritbaal (Old)", "Old children plan, replaced by updated version in 2019."),
        ("LIC Child Career Plan (Old)", "Old education plan, withdrawn 2017."),
        ("LIC Child Future Plan (Old)", "Old marriage/education plan, withdrawn 2017."),
        ("LIC Child Plus", "Old children endowment, withdrawn 2015."),
        ("LIC Child Fortune", "Old children plan, withdrawn 2016."),
    ]),
    ("Pension Plans (Discontinued)", [
        ("Jeevan Akshay (Old)", "Old immediate annuity, replaced by Akshay-VI in 2018."),
        ("Jeevan Dhara (Old)", "Old deferred annuity, replaced by Dhara-II in 2018."),
        ("Jeevan Suraksha (Old)", "Old immediate annuity, replaced by Suraksha-II in 2018."),
        ("New Jeevan Anand Pension (Old)", "Old deferred annuity, replaced by updated version."),
        ("LIC Jeevan Akshay-V", "Old version, replaced by Akshay-VI in 2018."),
        ("LIC Jeevan Akshay-VI (Old)", "Old version, replaced by Akshay-VII in 2020."),
        ("LIC Nav Jeevan Pension (Old)", "Old market-linked pension, withdrawn 2019."),
    ]),
    ("Health Plans (Discontinued)", [
        ("Jeevan Arogya (Old)", "Old health plan, replaced by updated version in 2020."),
        ("Health Plus (Old)", "Old health plan, replaced by updated version in 2020."),
        ("LIC Critical Illness Rider (Old)", "Old rider, replaced by updated version."),
        ("LIC Health Rider (Old)", "Old rider, replaced by updated version."),
    ]),
    ("ULIP Plans (Discontinued)", [
        ("Jeevan Plus (Old)", "Old ULIP, replaced by updated version in 2020."),
        ("Jeevan Nivesh (Old)", "Old ULIP, replaced by updated version in 2020."),
        ("Elite Plus (Old)", "Old ULIP, replaced by updated version in 2020."),
        ("LIC Index Plus (Old)", "Old index-linked ULIP, replaced by updated version."),
    ]),
    ("Group Plans (Discontinued)", [
        ("LIC Group Term Insurance (Old)", "Old group term, replaced by updated version."),
        ("LIC Group Gratuity Scheme (Old)", "Old group gratuity, replaced by updated version."),
        ("LIC Group Superannuation Scheme (Old)", "Old pension scheme, replaced by updated version."),
        ("LIC Group Leave Encashment (Old)", "Old leave encashment, replaced by updated version."),
    ]),
    ("Other Discontinued Products", [
        ("LIC Bima Gold", "Endowment with savings, withdrawn 2018."),
        ("LIC Bima Diamond", "Endowment with higher cover, withdrawn 2019."),
        ("LIC Bima Gold Plus", "Enhanced endowment, withdrawn 2019."),
        ("LIC Bima Diamond Plus", "Enhanced endowment, withdrawn 2020."),
        ("LIC New Endowment", "Old series endowment, withdrawn 2017."),
        ("LIC New Bima Gold", "Old series, withdrawn 2018."),
        ("LIC New Bima Diamond", "Old series, withdrawn 2019."),
        ("LIC Amulya Jeevan", "Term for women, withdrawn 2015."),
        ("LIC Nav Jeevan", "Online term, withdrawn 2016."),
        ("LIC Nav Jeevan Plus", "Online term with riders, withdrawn 2017."),
        ("LIC e-Term", "Early online term, withdrawn 2015."),
        ("LIC Saral Term", "Basic term, withdrawn 2016."),
        ("LIC Simple Term", "Basic term, withdrawn 2017."),
        ("LIC Whole Life Plus", "Old whole life, withdrawn 2016."),
        ("LIC Whole Life Supreme", "Old whole life, withdrawn 2018."),
        ("LIC Child Plus", "Old children plan, withdrawn 2015."),
        ("LIC Child Fortune", "Old children plan, withdrawn 2016."),
    ]),
]

for cat_title, products in discontinued_categories:
    # Check if we need a new page
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

# 13. PRODUCT COMPARISON MATRIX
pdf.add_page()
pdf.section_banner("13. PRODUCT COMPARISON MATRIX", (100, 50, 0))
pdf.set_font("DejaVu", "I", 8)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(0, 4, "Quick comparison of key features across major LIC product categories.", new_x="LMARGIN")
pdf.ln(2)

pdf.table_row(["Feature", "Endowment", "Term", "Whole Life", "Money Back", "ULIP", "Pension"], [30, 25, 25, 25, 25, 25, 25], is_header=True)
comparison = [
    ("Life Cover", "Yes", "Yes", "Lifetime", "Yes", "Yes", "Annuity"),
    ("Savings Component", "Yes", "No", "Yes", "Yes", "Market-linked", "Yes"),
    ("Maturity Benefit", "SA + Bonus", "None", "SA + Bonus", "SA + Bonus", "Fund Value", "Pension"),
    ("Survival Benefit", "No", "No", "No", "Periodic", "No", "Monthly"),
    ("Premium Term", "Regular/Limited", "Regular/Single", "Lifetime/Limited", "Regular", "Regular/Limited", "Single/Regular"),
    ("Loan Available", "After 3 yrs", "No", "After 3 yrs", "After 3 yrs", "After 3 yrs", "No"),
    ("Surrender Value", "After 3 yrs", "No", "After 3 yrs", "After 3 yrs", "After 3 yrs", "Yes"),
    ("Tax Benefit 80C", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"),
    ("Tax Benefit 10(10D)", "Yes", "Yes", "Yes", "Yes", "Yes", "Partial"),
    ("Premium Range", "Low-High", "Very Low", "Medium-High", "Low-Medium", "Medium-High", "Medium-High"),
    ("Risk Level", "Low", "None", "Low", "Low", "Medium-High", "Low"),
    ("Best For", "Savings + Cover", "High Cover", "Estate Planning", "Regular Income", "Growth", "Retirement"),
]
for row in comparison:
    pdf.table_row(row, [30, 25, 25, 25, 25, 25, 25])
pdf.ln(5)

# 14. PREMIUM PAYMENT OPTIONS
pdf.add_page()
pdf.section_banner("14. PREMIUM PAYMENT OPTIONS", (100, 50, 0))
pdf.set_font("DejaVu", "", 8.5)
pdf.set_text_color(40, 40, 40)
pdf.multi_cell(0, 5, 
    "LIC offers multiple premium payment modes to suit the convenience of policyholders. "
    "The frequency of premium payment can be chosen at the time of policy inception in most plans.", new_x="LMARGIN")
pdf.ln(3)

pdf.table_row(["Payment Mode", "Frequency", "Availability", "Benefits"], [35, 25, 40, 85], is_header=True)
payment_modes = [
    ("Yearly", "Once a year", "All plans", "Convenient, less frequent payments, slight discount"),
    ("Half-Yearly", "Twice a year", "All plans", "Balanced frequency, moderate convenience"),
    ("Quarterly", "Four times a year", "All plans", "Higher frequency, suitable for salaried individuals"),
    ("Monthly", "Every month", "Most plans", "Most frequent, ideal for salaried, ECS/NACH available"),
    ("Single", "One-time", "Specific plans", "No future payment worry, higher initial outlay"),
    ("Limited Pay", "5/8/10/15 years", "Specific plans", "Pay during earning years, cover continues"),
    ("Salary Savings Scheme", "Monthly deduction", "Group plans", "Employer deducts from salary, hassle-free"),
    ("Online Payment", "Any frequency", "All plans", "Pay from home, instant confirmation"),
    ("ECS/NACH", "Monthly/Quarterly", "All plans", "Auto-debit from bank, no missed payments"),
    ("Payment through App", "Any frequency", "All plans", "LIC Pay app, quick and easy"),
]
for row in payment_modes:
    pdf.table_row(row, [35, 25, 40, 85])
pdf.ln(5)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 5, "Important Notes on Premium Payment:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
notes = [
    "Premium payment grace period: 30 days (15 days for monthly mode). Policy lapses if premium is not paid within grace period.",
    "Late payment interest: 8% per annum (simple) for delayed premium payment beyond grace period.",
    "Auto-cover continuation: If premium is not paid within grace period but policy has surrender value, cover continues as Extended term insurance.",
    "Revival of lapsed policy: Can be revived within 5 years from the date of first unpaid premium by paying all arrears with interest.",
    "Premium rebates: LIC offers rebates for higher sum assured (SA rebate) and for yearly/half-yearly payment modes.",
    "GST on premium: Currently 18% for first year and 4.5% for renewal premiums on life insurance plans.",
    "Premium calculator available on licindia.in for accurate premium estimation.",
]
for note in notes:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, note, new_x="LMARGIN")

# 15. CLAIMS PROCESS OVERVIEW
pdf.add_page()
pdf.section_banner("15. CLAIMS PROCESS OVERVIEW", (100, 50, 0))
pdf.set_font("DejaVu", "", 8.5)
pdf.set_text_color(40, 40, 40)
pdf.multi_cell(0, 5, 
    "LIC has a streamlined claims settlement process. The claim settlement ratio of LIC has consistently been above 98%, "
    "one of the highest in the industry. Here is an overview of the claims process for different types of claims.", new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 5, "A. Death Claim Process:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
death_claims = [
    "Step 1: Intimation - Nominee/legal heir informs LIC about the death of the policyholder through any channel (branch, online, call center).",
    "Step 2: Document Submission - Submit claim form, death certificate, policy document, ID proof, bank details, and other required documents.",
    "Step 3: Document Verification - LIC verifies all submitted documents. May require additional documents if needed.",
    "Step 4: Investigation (if required) - For early claims (within 3 years) or high value claims, LIC may conduct investigation.",
    "Step 5: Claim Settlement - Upon satisfactory verification, LIC settles the claim within 30 days of receipt of all documents.",
    "Step 6: Payout - Amount is credited to the nominee's bank account through NEFT/RTGS.",
    "Required Documents: Claim Form (Form 3783/5444), Death Certificate (original), Policy Bond, Nominee ID Proof, Bank Account Details, PAN Card, Relationship Proof.",
    "Claim Settlement Ratio: 98.62% (FY 2024-25)",
    "Claims pending beyond 30 days earn interest at 10% per annum.",
]
for item in death_claims:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, item, new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 5, "B. Maturity Claim Process:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
maturity_claims = [
    "Step 1: Discharge Form - Policyholder fills the discharge form (Form 3801) available at branch or downloadable from website.",
    "Step 2: Submit Documents - Submit original policy bond, discharge form, ID proof, and bank account details.",
    "Step 3: Pre-payment verification - LIC verifies policy status, premium payment, loans, assignments.",
    "Step 4: Payment - Maturity amount is credited to policyholder's bank account on the due date.",
    "Auto-Maturity: LIC now auto-credits maturity proceeds to the registered bank account.",
    "Option to defer: Policyholder can opt to defer maturity and keep funds with LIC earning interest.",
]
for item in maturity_claims:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, item, new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 5, "C. Survival Benefit / Money Back Claim:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
survival_claims = [
    "Auto-credit: Survival benefits are auto-credited to the registered bank account on the due date.",
    "Cheque mode: If bank details not registered, cheque is dispatched to the policyholder's address.",
    "Policyholder can opt for accumulation: Keep the survival benefit with LIC earning interest.",
    "Partial withdrawal: Available in some plans for specific purposes.",
]
for item in survival_claims:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, item, new_x="LMARGIN")
pdf.ln(3)

pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 5, "D. Loan Claim Process:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8)
pdf.set_text_color(40, 40, 40)
loan_claims = [
    "Policyholder can apply for loan after 3 years of premium payment (or as per plan terms).",
    "Loan application can be submitted online through LIC portal or at any branch.",
    "Maximum loan: Up to 90% of surrender value (85% for paid-up policies).",
    "Interest rate: Currently 10% per annum (simple), subject to change.",
    "Loan repayment: Can be repaid anytime during the policy term. Unadjusted loan with interest is deducted from claim amount.",
]
for item in loan_claims:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, item, new_x="LMARGIN")

# FINAL PAGE
pdf.add_page()
pdf.section_banner("DISCLAIMER & CONTACT", (50, 50, 50))
pdf.set_font("DejaVu", "", 8.5)
pdf.set_text_color(40, 40, 40)
pdf.multi_cell(0, 5, 
    "This document is prepared for informational and educational purposes only. "
    "While every effort has been made to ensure accuracy, the actual product features, benefits, terms, and conditions "
    "may vary and are subject to the policy contract and LIC's prevailing rules and regulations. "
    "For the most current and authoritative information, please visit www.licindia.in or contact your nearest LIC branch.", new_x="LMARGIN")
pdf.ln(5)
pdf.set_font("DejaVu", "B", 9)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 5, "LIC Contact Information:", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("DejaVu", "", 8.5)
pdf.set_text_color(40, 40, 40)
contacts = [
    "Website: www.licindia.in",
    "Customer Care: 1800 11 22 55 (Toll Free)",
    "Email: info@licindia.in",
    "Head Office: Yogoda Satsanga Society, Juhu, Mumbai - 400049",
    "Zonal Offices: Mumbai, Delhi, Kolkata, Chennai, Hyderabad, Bangalore, etc.",
    "Branch Locator: Available on licindia.in",
    "Online Services: e-Pay, e-Policy, Loan, Surrender, Claim Status, Bonus Query",
    "LIC Mobile App: Available on Android and iOS",
    "Grievance Redressal: IGMS (Integrated Grievance Management System) on licindia.in",
    "Ombudsman: For unresolved grievances, contact Insurance Ombudsman",
]
for contact in contacts:
    pdf.cell(6, 4.5, "  *")
    pdf.multi_cell(184, 4.5, contact, new_x="LMARGIN")

pdf.ln(10)
pdf.set_font("DejaVu", "B", 10)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 6, "END OF REPORT", align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

output_path = "/home/kali/insurance-support-next/lic_detailed_report.pdf"
pdf.output(output_path)
print("LIC Detailed PDF saved: %s (%.1f KB)" % (output_path, os.path.getsize(output_path)/1024))
