import re
import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        pre_open = match.group(1)
        inner = match.group(2)
        pre_close = match.group(3)
        
        # Unescape all our messed up braces
        inner = inner.replace('{"{"{"}"}"{"{"{"}"}"{"}"}', '{')
        inner = inner.replace('{"{"{"}"}"{"}"}"{"}"}', '}')
        inner = inner.replace('{"{"{"}"}', '{')
        inner = inner.replace('{"}"}', '}')
        inner = inner.replace('{"{"}', '{')
        
        # Now escape them correctly
        inner = inner.replace('{', '{"{"}').replace('}', '{"}"}')
        
        return pre_open + inner + pre_close
        
    content = re.sub(r'(<pre[^>]*>)(.*?)(</pre>)', replacer, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = r'd:\clg\Engineering\Hackathons\SIH26Final\apps\web\src\components\service-flow'
for filename in os.listdir(base_dir):
    if filename.endswith('.tsx'):
        fix_file(os.path.join(base_dir, filename))
