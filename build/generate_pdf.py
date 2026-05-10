#!/usr/bin/env python3
"""
Generate PDF versions of all fiches from their HTML source.

Usage:
    pip install weasyprint
    python build/generate_pdf.py

Output: one .pdf next to each .html file.
"""

import os
import sys
from pathlib import Path

try:
    from weasyprint import HTML, CSS
except ImportError:
    print("Missing dependency. Install with:")
    print("    pip install weasyprint")
    sys.exit(1)


# All HTML files to convert, relative to repo root
HTML_FILES = [
    "fiches/01-methode-dissertation.html",
    "fiches/02-methode-explication.html",
    "fiches/03-conscience.html",
    "fiches/04-inconscient.html",
    "fiches/05-raison.html",
    "fiches/06-verite.html",
    "fiches/07-science.html",
    "fiches/08-religion.html",
    "fiches/09-nature.html",
    "fiches/10-travail.html",
    "fiches/11-technique.html",
    "fiches/12-art.html",
    "reperes/reperes-complets.html",
    # Fiches flash (1 page chacune)
    "flash/03-conscience-flash.html",
    "flash/04-inconscient-flash.html",
    "flash/05-raison-flash.html",
    "flash/06-verite-flash.html",
    "flash/07-science-flash.html",
    "flash/08-religion-flash.html",
    "flash/09-nature-flash.html",
    "flash/10-travail-flash.html",
    "flash/11-technique-flash.html",
    "flash/12-art-flash.html",
]


def main() -> int:
    # Resolve repo root = parent of this script's directory
    repo_root = Path(__file__).resolve().parent.parent

    print(f"Repo root : {repo_root}\n")

    errors = 0
    for rel in HTML_FILES:
        src = repo_root / rel
        if not src.exists():
            print(f"  ✗ MISSING  {rel}")
            errors += 1
            continue

        dst = src.with_suffix(".pdf")
        try:
            HTML(filename=str(src), base_url=str(src.parent)).write_pdf(str(dst))
            size_kb = dst.stat().st_size / 1024
            print(f"  ✓  {rel}  →  {dst.name}  ({size_kb:.0f} KB)")
        except Exception as exc:  # noqa: BLE001
            print(f"  ✗ ERROR   {rel} : {exc}")
            errors += 1

    print()
    if errors == 0:
        print(f"Done. {len(HTML_FILES)} PDF(s) generated.")
        return 0
    print(f"Done with {errors} error(s).")
    return 1


if __name__ == "__main__":
    sys.exit(main())
