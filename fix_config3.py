import json, re

with open("/home/kali/insurance-support-next/src/data/calculatorsConfig.ts", "r") as f:
    lines = f.readlines()

# Find the start line (export const calculatorsConfig)
start_line = None
for i, line in enumerate(lines):
    if 'export const calculatorsConfig' in line and '=' in line:
        start_line = i
        break

if start_line is None:
    print("ERROR: Could not find calculatorsConfig")
    exit(1)

# Find the end line (];)
end_line = None
for i in range(len(lines) - 1, start_line, -1):
    if lines[i].strip().startswith('];'):
        end_line = i
        break

if end_line is None:
    print("ERROR: Could not find end of array")
    exit(1)

print(f"Array starts at line {start_line+1}, ends at line {end_line+1}")

# Extract the array text
arr_text = ''.join(lines[start_line:end_line+1])

# Extract just the JSON part (from [ to ])
bracket_start = arr_text.index('[')
bracket_end = arr_text.rindex(']') + 1
json_text = arr_text[bracket_start:bracket_end]

# Fix trailing commas
json_text = re.sub(r',\s*}', '}', json_text)
json_text = re.sub(r',\s*]', ']', json_text)
# Fix double commas
json_text = re.sub(r',{2,}', ',', json_text)

try:
    data = json.loads(json_text)
    print(f"Loaded {len(data)} calculators successfully")
except json.JSONDecodeError as e:
    print(f"JSON error: {e}")
    # Show the problematic area
    pos = e.pos
    print(f"Around position {pos}:")
    print(json_text[max(0,pos-100):pos+100])
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

# Rebuild the file
prefix_lines = lines[:start_line]
suffix_lines = lines[end_line+1:]

# Build new array
new_lines = ["export const calculatorsConfig: CalculatorConfig[] = [\n"]
for i, d in enumerate(data):
    new_lines.append("  {\n")
    new_lines.append(f'    "id": "{d["id"]}",\n')
    new_lines.append(f'    "slug": "{d["slug"]}",\n')
    new_lines.append(f'    "category": "{d["category"]}",\n')
    new_lines.append(f'    "categoryName": "{d["categoryName"]}",\n')
    new_lines.append(f'    "title": "{d["title"]}",\n')
    new_lines.append(f'    "engineType": "{d["engineType"]}",\n')
    new_lines.append(f'    "description": "{d["description"]}",\n')
    new_lines.append(f'    "seoTitle": "{d["seoTitle"]}",\n')
    new_lines.append(f'    "seoDescription": "{d["seoDescription"]}"\n')
    if i < len(data) - 1:
        new_lines.append("  },\n")
    else:
        new_lines.append("  }\n")
new_lines.append("];\n")

with open("/home/kali/insurance-support-next/src/data/calculatorsConfig.ts", "w") as f:
    f.writelines(prefix_lines + new_lines + suffix_lines)

print(f"File updated. Total calculators: {len(data)}")
