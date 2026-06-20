#!/usr/bin/env python3
"""Fix: Remove phone number from Header, keep only Google review badge."""

filepath = "/home/kali/insurance-support-next/src/components/Header.tsx"

with open(filepath, "r") as f:
    content = f.read()

# 1. Remove the tel: link block (phone number with Phone icon) in the top bar
# Find and remove: <a href="tel:+919****4506" ...>...</a>
old_tel_block = '''            <a
              href="tel:+919****4506"
              className="flex items-center gap-1.5 text-sm font-bold text-green-600 hover:text-green-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {contactConfig.phoneFull}
            </a>'''

content = content.replace(old_tel_block, '')
print("Removed tel: link from header")

# 2. Remove the "Call Now" phone button from the nav area
old_call_btn = '''            <a 
              href={contactConfig.getDialUrl()} 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">Call Now</span>
            </a>'''

# Replace with a link to contact page instead
new_call_btn = '''            <Link
              href="/contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">Contact</span>
            </Link>'''

content = content.replace(old_call_btn, new_call_btn)
print("Replaced Call Now button with Contact link")

# 3. Remove unused Phone import if no longer used
# Check if Phone is still used elsewhere in the file
phone_uses = [i for i, line in enumerate(content.split('\n')) if 'Phone' in line and 'import' not in line]
if not phone_uses:
    content = content.replace("import { ChevronDown, ShieldCheck, Phone } from 'lucide-react';", 
                               "import { ChevronDown, ShieldCheck } from 'lucide-react';")
    print("Removed unused Phone import")

# 4. Remove unused contactConfig import if no longer used
contact_uses = [i for i, line in enumerate(content.split('\n')) if 'contactConfig' in line and 'import' not in line]
if not contact_uses:
    content = content.replace('import { contactConfig } from \'@/data/contact\';\n', '')
    print("Removed unused contactConfig import")

with open(filepath, "w") as f:
    f.write(content)

print(f"Header.tsx updated. Size: {len(content)} bytes")
