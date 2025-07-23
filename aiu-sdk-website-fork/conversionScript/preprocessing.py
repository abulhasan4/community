import pypandoc
import sys
import os
import re

# Example usage:
# [Repository Directory]/.venv/bin/python [Repository Directory]/aiu-sdk-website-fork/conversionScript/preprocessing.py aiu-sdk-website-fork/data/PURL.rst

ROOT_DIR = 'aiu-sdk-website-fork'
DOCS_DIR = ROOT_DIR + '/docs'

########################

def convert_md_to_docs(input_file):

    """
    Converts a .md docs file to a file hierarchy in the docs folder, corresponding to
    different sections in the documentation.

    TODO : Add support for sub-sections.
    TODO : Add error handling
    """

    input_file = input_file.replace('.rst', '.md')
    if not os.path.isfile(input_file):
        print(f"Error: '{input_file}' does not exist.")
        return
    
    with open(input_file, 'r') as f:
        f_lines = f.readlines()

    md_contents = ''
    out_md_path = ''

    for line in f_lines:
        if line.startswith('#'):
            if len(md_contents) > 0:
                with open(out_md_path, 'w') as f:
                    f.write(md_contents)
                md_contents = ''

            md_section_name = line.replace('#','').strip()
            md_section_name = ''.join(char for char in md_section_name.replace(' ','_') if char.isalnum() or char == '_')

            os.makedirs(DOCS_DIR + '/' + md_section_name)

            out_md_path = DOCS_DIR + '/' + md_section_name + '/' + md_section_name + '.md'
        else:
            md_contents += line

########################

def convert_rst_to_md(input_file, output_file=None):
    """
    Converts the input .rst file to a .md file. This is an intermediary step
    to process the input file for ease of use.

    TODO: Ask ourselves if this is necessary in the future.
    """

    if not os.path.isfile(input_file):
        print(f"Error: '{input_file}' does not exist.")
        return

    output_file = os.path.splitext(input_file)[0] + ".md"

    try:
        # Convert rst to markdown
        output = pypandoc.convert_file(input_file, 'md', format='rst')

        # Replace angle-bracket links <https://example.com> with markdown links [https://example.com](https://example.com)
        output = re.sub(
            r'<(https?://[^ >]+)>',
            lambda m: f"[{m.group(1)}]({m.group(1)})",
            output
        )

        # Wrap {key: value} like objects in backticks to avoid MDX parsing errors
        # This regex matches {...} with some content inside
        output = re.sub(
            r'(\{[^}]+\})',
            r'`\1`',
            output
        )

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(output)
        print(f"Conversion complete: '{output_file}'")
    except Exception as e:
        print(f"Conversion failed: {e}")

########################

def docs_to_sidebar():
    """
    Generates a sidebar JSON file from the docs folder. This will be fed into the
    sidebars.js file.
    """
    pass

########################

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python convert_rst_to_md.py <input.rst> [output.md]")
    else:
        convert_rst_to_md(sys.argv[1])
        convert_md_to_docs(sys.argv[1])