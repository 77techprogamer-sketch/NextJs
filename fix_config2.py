import json, re

with open("/home/kali/insurance-support-next/src/data/calculatorsConfig.ts", "r") as f:
    content = f.read()

# Find the FIRST occurrence of the array
start = content.index("export const calculatorsConfig")
start = content.index("[", start)

# Find the LAST occurrence of the array end (];)
# We need to find the LAST ]; that closes the array
end = content.rindex("];") + 2

arr_text = content[start:end]

# Count opening and closing braces to find the real array end
# Remove trailing commas
arr_text = re.sub(r',\s*}', '}', arr_text)
arr_text = re.sub(r',\s*]', ']', arr_text)
# Remove any double commas
arr_text = re.sub(r',{2,}', ',', arr_text)

try:
    data = json.loads(arr_text)
    print(f"Loaded {len(data)} calculators successfully")
except json.JSONDecodeError as e:
    print(f"JSON error at pos {e.pos}: {e.msg}")
    # Show context
    context_start = max(0, e.pos - 50)
    context_end = min(len(arr_text), e.pos + 50)
    print(f"Context: ...{arr_text[context_start:context_end]}...")
    print(f"Around line {arr_text[:e.pos].count(chr(10))+1}")
    exit(1)

# Check if sukanya already exists
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

print(f"File updated. Total calculators: {len(data)}")
