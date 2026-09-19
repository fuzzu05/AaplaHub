import os
import re

base_dir = r"C:\Users\fuzai\.gemini\antigravity-ide\brain\538baa84-8644-4a85-96c1-0864661d6799\scratch"
out_dir = r"d:\clg\Engineering\Hackathons\SIH26Final\apps\web\src\components\service-flow"

files = {
    'service_details.jsx': ('EligibilityStep', 'ELIGIBILITY'),
    'consent.jsx': ('ConsentStep', 'CONSENT'),
    'interop.jsx': ('InteropStep', 'FETCHING'),
    'app_review.jsx': ('AppReviewStep', 'APPLICATION'),
    'payment.jsx': ('PaymentStep', 'SUCCESS')
}

for filename, (comp_name, step_name) in files.items():
    filepath = os.path.join(base_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract everything inside <main ...> ... </main>
    # Note: payment.jsx has an <aside> before <main>. We only want <main>.
    match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
    if match:
        main_content = match.group(1)
        
        # Some basic cleanup
        main_content = main_content.replace('class=', 'className=')
        main_content = main_content.replace('onclick=', 'onClick=')
        main_content = main_content.replace('for=', 'htmlFor=')
        main_content = main_content.replace('viewbox=', 'viewBox=')
        main_content = main_content.replace('stroke-width=', 'strokeWidth=')
        main_content = main_content.replace('checked=""', 'defaultChecked')
        main_content = re.sub(r'<script.*?</script>', '', main_content, flags=re.DOTALL)
        main_content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', main_content, flags=re.DOTALL)
        
        # Replace buttons with function calls from props where necessary, but for now just create the wrapper
        
        react_comp = f"""import React from 'react';
import {{ useApplicationStore }} from '../../store/applicationStore';

interface Props {{
  onNext: () => void;
  onReject?: () => void;
}}

export default function {comp_name}({{ onNext, onReject }}: Props) {{
  const store = useApplicationStore();

  return (
    <>
      {main_content}
    </>
  );
}}
"""
        with open(os.path.join(out_dir, f"{comp_name}.tsx"), 'w', encoding='utf-8') as f:
            f.write(react_comp)
        print(f"Generated {comp_name}.tsx")
    else:
        print(f"Could not find <main> in {filename}")

