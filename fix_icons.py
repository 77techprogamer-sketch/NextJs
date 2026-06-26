#!/usr/bin/env python3
"""Add icon mappings for new service types"""

filepath = '/home/kali/insurance-support-next/src/app/services/[serviceType]/page.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add new icons to imports
old_import = 'import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock } from "lucide-react"'
new_import = 'import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, Building, TrendingUp } from "lucide-react"'

content = content.replace(old_import, new_import)

# 2. Add new service asset entries
old_assets_end = '''    "lic-agent": { icon: UserCheck, iconName: "UserCheck", image: "/lic-agent.png" }
}'''

new_assets_end = '''    "lic-agent": { icon: UserCheck, iconName: "UserCheck", image: "/lic-agent.png" },
    "home-insurance": { icon: Home, iconName: "Home", image: "/home-insurance.png" },
    "business-insurance": { icon: Building, iconName: "Building", image: "/business-insurance.png" },
    "investment-plans": { icon: TrendingUp, iconName: "TrendingUp", image: "/investment-plans.png" }
}'''

content = content.replace(old_assets_end, new_assets_end)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Icon mappings added for 3 new services")
