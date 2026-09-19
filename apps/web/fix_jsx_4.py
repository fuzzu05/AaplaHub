import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The current mess is '{"{"{"}"}' which evaluates to a literal {"} in JSX.
    # We want '{"{"}'.
    content = content.replace('{"{"{"}"}', '{"{"}')
    # Similarly for '{"}"}' ... wait, '{"}"}' is actually correct if it was just replaced.
    # Wait, the error is TS1005: '}' expected.
    # If the file contains '{"}"}', let's check what InteropStep.tsx actually contains around line 175.
    pass

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file(r'd:\clg\Engineering\Hackathons\SIH26Final\apps\web\src\components\service-flow\InteropStep.tsx')
