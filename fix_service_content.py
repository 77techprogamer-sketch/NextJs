#!/usr/bin/env python3
"""Fix ServiceContent to handle missing highlights gracefully and add FAQ categories for new services"""

filepath = '/home/kali/insurance-support-next/src/components/ServiceContent.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add new services to iconMap
old_icon_map = "    Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock\n};"
new_icon_map = "    Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, Building, TrendingUp\n};"

content = content.replace(old_icon_map, new_icon_map)

# 2. Add new services to iconMap record
old_icon_record_end = '''    Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock
};'''

# Already replaced above. Now add to the Record
old_icon_map_record = '''const iconMap: Record<string, React.ElementType> = {
    Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock
};'''

new_icon_map_record = '''const iconMap: Record<string, React.ElementType> = {
    Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, Building, TrendingUp
};'''

content = content.replace(old_icon_map_record, new_icon_map_record)

# 3. Add FAQ categories for new services
old_faq_map = '''    'pension-plans': 'Life',
    'ulip-plans': 'Life',
};'''

new_faq_map = '''    'pension-plans': 'Life',
    'ulip-plans': 'Life',
    'home-insurance': 'General',
    'business-insurance': 'General',
    'investment-plans': 'Life',
};'''

content = content.replace(old_faq_map, new_faq_map)

# 4. Fix the features line to handle undefined
old_features = "const features = serviceHighlights[serviceType] || [];"
# This is already safe (uses || []), so no change needed.

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("ServiceContent.tsx updated with new icons and FAQ mappings")
