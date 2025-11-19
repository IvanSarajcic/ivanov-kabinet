import os

html_path = r'd:\Ivan\skola 2\ivanov-kabinet\index.html'
svg_path = r'd:\Ivan\skola 2\ivanov-kabinet\_shared\images\logo.svg'

with open(html_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open(svg_path, 'r', encoding='utf-8') as f:
    svg_content = f.read()

new_lines = []
for line in lines:
    if '<img src="_shared/images/logo.svg"' in line:
        # Construct the new line with inline SVG
        # Preserving the <a> wrapper
        prefix = '        <a href="index.html">'
        suffix = '</a>\n'
        new_lines.append(prefix + svg_content + suffix)
    else:
        new_lines.append(line)

with open(html_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Merged logo.svg into index.html")
