import os

directory = 'd:/clg/Engineering/Hackathons/SIH26Final/apps/web/src/pages'
old_text = "import.meta.env.VITE_API_URL || 'http://localhost:3000'"
new_text = "import.meta.env.VITE_API_URL || 'https://aaplahub.onrender.com'"

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if old_text in content:
                content = content.replace(old_text, new_text)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {filepath}")
