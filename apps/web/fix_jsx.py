import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix 1: < inside JSX text
    content = content.replace('Predicate: AnnualIncome < ₹2,50,000', 'Predicate: AnnualIncome &lt; ₹2,50,000')
    
    # Fix 2: { and } wrapping JSON inside pre
    # Instead of regex, just replace literal { and the trailing }
    content = content.replace('<pre className="text-secondary-fixed">{', '<pre className="text-secondary-fixed">{"{"}')
    content = content.replace('}</pre>', '{"}"}</pre>')
    
    content = content.replace('<pre className="text-primary-fixed"><code>{', '<pre className="text-primary-fixed"><code>{"{"}')
    content = content.replace('}</code></pre>', '{"}"}</code></pre>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
base_dir = r'd:\clg\Engineering\Hackathons\SIH26Final\apps\web\src\components\service-flow'
for filename in os.listdir(base_dir):
    if filename.endswith('.tsx'):
        fix_file(os.path.join(base_dir, filename))
