# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site Overview

This is **Chenhao Chen's personal academic portfolio** built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. It is deployed to GitHub Pages at `https://chinshinkou.github.io`.

## Essential Commands

```bash
# Start local dev server (recommended — runs at http://localhost:8080)
docker compose pull && docker compose up

# Rebuild after dependency changes
docker compose up --build

# Stop server
docker compose down

# Format code before committing (mandatory — CI will fail without it)
npm install --save-dev prettier @shopify/prettier-plugin-liquid  # first time only
npx prettier . --write
```

## Site-Specific Architecture

### Publications

Publications are organized by category using a **custom BibTeX `category` field** in `_bibliography/papers.bib`. Each publication entry must include `category = {<type>}`. The five sub-pages filter by category:

| Page file | BibTeX query |
|---|---|
| `_pages/publications_conferences_international.md` | `@*[category=conferences_international]*` |
| `_pages/publications_conferences_japanese.md` | `@*[category=conferences_japanese]*` |
| `_pages/publications_journals_international.md` | `@*[category=journals_international]*` |
| `_pages/publications_journals_japanese.md` | `@*[category=journals_japanese]*` |
| `_pages/publications_others.md` | `@*[category=others]*` |

The Publications nav item is a **dropdown** (configured via `dropdown: true` and `children:` in `_pages/publications.md`).

### Key Content Files

- `_pages/about.md` — Homepage with bio; edit the `<div class="about-intro">` block for the biography
- `_news/` — News items shown on the homepage (most recent 3 are displayed)
- `_bibliography/papers.bib` — All publications; must include `category` field for correct sub-page routing
- `_data/socials.yml` — Social media links shown in profile
- `_data/cv.yml` — CV data
- `_data/citations.yml` — Citation counts (auto-updated by `update-citations.yml` GitHub Action)
- `_data/coauthors.yml` — Coauthor link definitions for publications page

### `_config.yml` Critical Settings

- `url: https://chinshinkou.github.io` + `baseurl:` (empty) — must stay in sync or CSS/JS breaks
- Feature flags (search, announcements, latest_posts, etc.) are toggled here

## Pre-Commit Requirements

1. Run `npx prettier . --write` — the `prettier.yml` CI workflow will fail PRs if skipped
2. Verify locally at `http://localhost:8080` after running `docker compose up --build`

## Common Pitfalls

- **YAML special characters** in `_config.yml`: quote strings containing `:`, `&`, or `#`
- **New BibTeX entries** without a `category` field will not appear on any publications sub-page
- **Port 8080 in use**: run `docker compose down` first
