#!/usr/bin/env python3
"""Add new service pages to services.ts"""

import re

# Read the file
with open('/home/kali/insurance-support-next/src/data/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add new services to the services array
old_array_end = """    'lic-agent',
];"""

new_array_end = """    'lic-agent',
    'home-insurance',
    'business-insurance',
    'investment-plans',
];"""

content = content.replace(old_array_end, new_array_end)

# 2. Add descriptions
old_desc_end = """    'lic-agent': 'Connect with certified LIC insurance advisors to manage your portfolio, revive lapsed policies, and ensure seamless claim settlements with regular policy servicing.',
};"""

new_desc_end = """    'lic-agent': 'Connect with certified LIC insurance advisors to manage your portfolio, revive lapsed policies, and ensure seamless claim settlements with regular policy servicing.',
    'home-insurance': 'Protect your biggest investment — your home. Comprehensive coverage against fire, theft, natural disasters, and structural damage for complete peace of mind.',
    'business-insurance': 'Safeguard your enterprise with liability, property, cyber, and keyman insurance solutions designed for Indian businesses of all sizes.',
    'investment-plans': 'Grow your wealth with confidence. Compare ULIP, NPS, PPF, and ELSS plans to optimize returns while maintaining essential life protection.',
};"""

content = content.replace(old_desc_end, new_desc_end)

# 3. Add highlights
old_highlights_end = """    'lic-agent': ['Certified LIC Advisors', 'Policy Servicing Support', 'Doorstep Consultations'],
};"""

new_highlights_end = """    'lic-agent': ['Certified LIC Advisors', 'Policy Servicing Support', 'Doorstep Consultations'],
    'home-insurance': ['Building + Contents Cover', 'Natural Disaster Protection', 'Theft & Burglary Cover'],
    'business-insurance': ['Liability Protection', 'Cyber Security Cover', 'Employee Benefit Plans'],
    'investment-plans': ['Market-Linked Returns', 'Tax Benefits under 80C', 'Flexible Fund Options'],
};"""

content = content.replace(old_highlights_end, new_highlights_end)

# 4. Add labels
old_labels_end = """    'lic-agent': 'Insurance Advisor',
};"""

new_labels_end = """    'lic-agent': 'Insurance Advisor',
    'home-insurance': 'Home Insurance',
    'business-insurance': 'Business Insurance',
    'investment-plans': 'Investment Plans',
};"""

content = content.replace(old_labels_end, new_labels_end)

# Write back
with open('/home/kali/insurance-support-next/src/data/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("services.ts updated with 3 new services")
