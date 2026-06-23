import re

files = [
    ("src/app/lic-vs-private-life/page.tsx", '"LIC"', '"Private Insurers (Avg)"'),
    ("src/app/lic-vs-hdfc-life/page.tsx", '"LIC"', '"HDFC Life"'),
    ("src/app/lic-vs-sbi-life/page.tsx", '"LIC"', '"SBI Life"'),
    ("src/app/lic-vs-icici-pru/page.tsx", '"LIC"', '"ICICI Prudential"'),
]

for filepath, lic, comp in files:
    try:
        with open(filepath, "r") as f:
            content = f.read()
        new_tag = f'<ComparisonTable rows={{rows}} headers={[{lic}, {comp}]} />'
        content = re.sub(
            r'<ComparisonTable\s+rows=\{rows\}\s+[^>]*/>',
            new_tag,
            content,
        )
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Fixed: {filepath}")
    except Exception as e:
        print(f"Error: {filepath}: {e}")
