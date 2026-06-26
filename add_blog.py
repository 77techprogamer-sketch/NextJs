#!/usr/bin/env python3
"""Add new blog posts to blogs.json"""

import json
import sys

def add_blog_entry(json_path, new_entry):
    """Add a new blog entry to the JSON file"""
    with open(json_path, 'r', encoding='utf-8') as f:
        blogs = json.load(f)
    
    # Check if slug already exists
    existing_slugs = [b['slug'] for b in blogs]
    if new_entry['slug'] in existing_slugs:
        print(f"WARNING: {new_entry['slug']} already exists. Skipping.")
        return False
    
    # Insert at beginning (newest first)
    blogs.insert(0, new_entry)
    
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(blogs, f, ensure_ascii=False, indent=2)
    
    print(f"Added: {new_entry['slug']}. Total posts: {len(blogs)}")
    return True

if __name__ == '__main__':
    json_path = '/home/kali/insurance-support-next/src/data/blogs.json'
    
    # Term Life Insurance Blog Post
    term_life = {
        "slug": "term-life-insurance-complete-guide",
        "title": "Term Life Insurance: The Complete Guide for Indian Families (2026)",
        "date": "2026-06-28",
        "categories": ["Life Insurance", "Term Insurance", "Insurance Guide"],
        "summary": "Everything about term life insurance: how it works, how much cover you need, best plans in India 2026, myths debunked. The cheapest life insurance with highest cover.",
        "tags": [
            "term life insurance India",
            "best term insurance plan 2026",
            "term insurance vs endowment",
            "how much term insurance do I need",
            "LIC Tech Term",
            "HDFC Click 2 Protect",
            "ICICI Pru iProtect",
            "Max Life term insurance",
            "term insurance tax benefits 80C"
        ],
        "author": "Hari Kotian",
        "content": open('/home/kali/insurance-support-next/blog_term_life_content.md', 'r', encoding='utf-8').read()
    }
    
    add_blog_entry(json_path, term_life)
