import json, re

with open("/home/kali/insurance-support-next/src/data/calculatorsConfig.ts", "r") as f:
    content = f.read()

# Find the array bounds
start = content.index("export const calculatorsConfig")
start = content.index("[", start)
end = content.rindex("]") + 1

arr_text = content[start:end]

# Fix trailing commas
arr_text = re.sub(r',\s*}', '}', arr_text)
arr_text = re.sub(r',\s*]', ']', arr_text)

# Fix any double commas
arr_text = re.sub(r',{2,}', ',', arr_text)

try:
    data = json.loads(arr_text)
    print(f"Loaded {len(data)} calculators")
except json.JSONDecodeError as e:
    print(f"JSON error: {e}")
    # Try to find the problematic area
    lines = arr_text.split('\n')
    line_num = e.lineno
    for i in range(max(0, line_num-3), min(len(lines), line_num+3)):
        print(f"  Line {i+1}: {lines[i][:100]}")
    exit(1)

# Check if sukanya exists
exists = any(d["id"] == "sukanya-samriddhi-calculator" for d in data)
print(f"Sukanya exists: {exists}")

if not exists:
    new_entry = {
        "id": "sukanya-samriddhi-calculator",
        "slug": "sukanya-samriddhi-calculator",
        "category": "savings",
        "categoryName": "Savings & Investment",
        "title": "Sukanya Samriddhi Yojana Calculator",
        "engineType": "ppf",
        "description": "Calculate your Sukanya Samriddhi maturity value for your daughter with current 8.2% interest rate.",
        "seoTitle": "Sukanya Samriddhi Calculator 2026 | SSY Maturity Calculator",
        "seoDescription": "Calculate SSY maturity value, interest earned, and withdrawal amounts. Free online tool."
    }
    data.append(new_entry)
    print(f"Added Sukanya Samriddhi. Total: {len(data)}")

# Rebuild the TS file
prefix = content[:start]
suffix = content[end:]

lines = ["["]
for i, d in enumerate(data):
    lines.append("  {")
    lines.append(f'    "id": "{d["id"]}",')
    lines.append(f'    "slug": "{d["slug"]}",')
    lines.append(f'    "category": "{d["category"]}",')
    lines.append(f'    "categoryName": "{d["categoryName"]}",')
    lines.append(f'    "title": "{d["title"]}",')
    lines.append(f'    "engineType": "{d["engineType"]}",')
    lines.append(f'    "description": "{d["description"]}",')
    lines.append(f'    "seoTitle": "{d["seoTitle"]}",')
    lines.append(f'    "seoDescription": "{d["seoDescription"]}"')
    if i < len(data) - 1:
        lines.append("  },")
    else:
        lines.append("  }")
lines.append("];")

new_arr = "\n".join(lines)
new_content = prefix + new_arr + suffix

with open("/home/kali/insurance-support-next/src/data/calculatorsConfig.ts", "w") as f:
    f.write(new_content)

print("File updated successfully")
