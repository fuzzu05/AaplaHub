import re
import os

def escape_json_in_jsx(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all <pre ...> ... </pre> and escape { and } inside them.
    # Note: this is a bit crude but we'll only target the specific files and specific tags
    
    def replacer(match):
        inner = match.group(2)
        # Escape curly braces
        inner = inner.replace('{', '{"{"}').replace('}', '{"}"}')
        return match.group(1) + inner + match.group(3)
        
    content = re.sub(r'(<pre[^>]*>)(.*?)(</pre>)', replacer, content, flags=re.DOTALL)
    
    # Let's just fix the specific unescaped < in InteropStep.tsx
    content = content.replace('AnnualIncome < ₹2,50,000', 'AnnualIncome &lt; ₹2,50,000')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = r'd:\clg\Engineering\Hackathons\SIH26Final\apps\web\src\components\service-flow'
for filename in os.listdir(base_dir):
    if filename.endswith('.tsx'):
        escape_json_in_jsx(os.path.join(base_dir, filename))
