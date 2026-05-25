#!/usr/bin/env python3
"""Generate plain-text summary from Horizon zh.md for Telegram delivery."""
import re
import sys


def strip_html_tags(text: str) -> str:
    """Remove HTML tags and clean up markdown for plain text."""
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Remove markdown image syntax
    text = re.sub(r'!\[([^\]]*)\]\([^)]+\)', '', text)
    # Convert markdown links to "text (url)"
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'\1 (\2)', text)
    # Remove {: #"..." } attributes
    text = re.sub(r'\s*\{:\s*#"[^"]*"\s*\}', '', text)
    # Remove --- horizontal rules (keep content)
    text = re.sub(r'^---+$', '', text, flags=re.MULTILINE)
    # Collapse multiple blank lines
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def extract_title_section(md_text: str) -> str:
    """Extract the numbered title list and real URLs from the summary."""
    lines = md_text.split('\n')
    # Parse numbered list: 1. [Title](#item-N) ⭐️ X/10
    title_entries = []
    for line in lines:
        m = re.match(r'^\d+\.\s+\[(.+?)\]\(#[^)]*\)\s*(⭐️?\s*[\d.]+/10)?', line)
        if m:
            title, score = m.groups()
            score_str = f" {score.strip()}" if score else ""
            title_entries.append((title, score_str))

    # Parse ## heading sections for real URLs: ## [Title](real-url) {: #"item-N" }
    real_urls = {}
    heading_pattern = re.compile(
        r'^##\s+\[([^\]]+)\]\((https?://[^\)]+)\)\s*\{:\s*#"item-(\d+)"'
        , re.MULTILINE
    )
    for m in heading_pattern.finditer(md_text):
        url = m.group(2)
        idx = m.group(3)
        real_urls[idx] = url

    titles = []
    for i, (title, score_str) in enumerate(title_entries, 1):
        url = real_urls.get(str(i), "")
        titles.append(f"• {title}{score_str}")
        if url:
            titles.append(f"  {url}")
    return '\n'.join(titles)


def main():
    if len(sys.argv) < 2:
        print("Usage: gen_txt.py <summary-zh.md>", file=sys.stderr)
        sys.exit(1)

    filepath = sys.argv[1]
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"⚠️ File not found: {filepath}", file=sys.stderr)
        sys.exit(1)

    # Extract date from filename
    date_match = re.search(r'horizon-(\d{4}-\d{2}-\d{2})-zh\.md', filepath)
    date_str = date_match.group(1) if date_match else "Unknown"

    # Extract the count line: "> From N items, M important..."
    count_match = re.search(r'>\s*From\s+(\d+)\s+items,\s+(\d+)\s+important', content)
    total = count_match.group(1) if count_match else "?"
    important = count_match.group(2) if count_match else "?"

    # Build output
    output_parts = []
    output_parts.append(f"🌅 Horizon 每日科技速递 — {date_str}")
    output_parts.append(f"📊 从 {total} 条资讯中筛选出 {important} 条重要内容\n")

    titles = extract_title_section(content)
    if titles:
        output_parts.append(titles)
    else:
        # Fallback: extract all ## headings
        headings = re.findall(r'^##\s+\[(.+?)\]\((.+?)\)', content, re.MULTILINE)
        for title, url in headings:
            output_parts.append(f"• {title}")
            output_parts.append(f"  {url}")

    print('\n'.join(output_parts))


if __name__ == '__main__':
    main()
