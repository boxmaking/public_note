"""Fix all remaining syntax issues in corrupted elements.js"""
import re

with open('data/elements.js', 'r', encoding='utf-8') as f:
    src = f.read()

# 1. Fix DATA_SOURCES bad padding: "     "'...' → proper format
src = re.sub(r'"\s+"\'', r"': '", src)

# 2. Quote CATEGORY_CN keys with hyphens
replacements = [
    ("alkali-metal:", "'alkali-metal':"),
    ("alkaline-earth:", "'alkaline-earth':"),
    ("post-transition:", "'post-transition':"),
    ("noble-gas:", "'noble-gas':"),
]
for old, new in replacements:
    src = src.replace(old, new)

# 3. Quote CRYSTAL_CN keys with spaces
src = src.replace("diamond cubic:", "'diamond cubic':")
src = src.replace("simple cubic:", "'simple cubic':")

# 4. Fix density:14 → density:null (for element 114 Fl, and any other numeric density that should be null)
# Actually, 14 g/cm³ might be a real value. Let me check. Fl should have density null since it's synthetic.
# The issue is this file was generated incorrectly. Let me just fix the DATA_SOURCES formatting properly.
# The "     " pattern in DATA_SOURCES was:
#   atomicWeight: "     "'IUPAC CIAAW 2024',
# Should be:
#   atomicWeight: 'IUPAC CIAAW 2024',

# Re-fix DATA_SOURCES (the previous regex might not have worked fully)
# Pattern: key: "    "'value',
# Fix: key: 'value',
src = re.sub(r'(\w+):\s*"\s+"\'([^\']*)\'', r"\1: '\2'", src)

with open('data/elements.js', 'w', encoding='utf-8') as f:
    f.write(src)

print("Fix applied. Check CATEGORY_CN:")
for line in src.split('\n'):
    if 'alkali-metal' in line or 'simple cubic' in line or 'diamond cubic' in line or 'noble-gas' in line:
        print(" ", line.strip())
