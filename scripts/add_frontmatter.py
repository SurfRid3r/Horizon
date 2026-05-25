#!/usr/bin/env python3
"""Add Jekyll frontmatter to a Horizon summary file for GitHub Pages."""
import re
import sys


def main():
    if len(sys.argv) < 4:
        print("Usage: add_frontmatter.py <input.md> <output.md> <date>", file=sys.stderr)
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]
    date_str = sys.argv[3]

    # Determine language from filename
    lang = "zh" if "-zh.md" in input_path else "en"

    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove existing frontmatter if present
    if content.startswith('---'):
        content = re.sub(r'^---\n.*?\n---\n*', '', content, count=1, flags=re.DOTALL)

    frontmatter = f"""---
layout: default
title: "Horizon Summary: {date_str} ({lang.upper()})"
date: {date_str}
lang: {lang}
---

"""

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(frontmatter + content.strip() + '\n')

    print(f"✅ Added frontmatter to {output_path}")


if __name__ == '__main__':
    main()
