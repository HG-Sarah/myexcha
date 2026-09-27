# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a collection of small, independent static web page exercises. There is no build system, package manager, bundler, linter, or test suite — each subfolder is a standalone set of plain HTML/CSS/JS files with no dependencies between folders.

## Development

There are no build, lint, or test commands. To view a page, open its `index.html` directly in a browser (or use a simple local server / an editor's live-preview feature) — no compilation step is required.

## Structure

Each top-level folder is a separate, self-contained page:

- `hello-world/` — basic HTML/CSS page (`index.html`, `style.css`).
- `profile/` — a self-introduction card page (`index.html`, `style.css`, `main.js`). `main.js` currently exposes an empty `initApp()` function intended as the entry point for future interactivity, but it is not yet wired up (no call site or event listener references it).

New folders follow the same pattern: `index.html` for markup, `style.css` for styling, and optionally `main.js` for behavior, linked via a `<script src="main.js"></script>` tag before `</body>`.
- 주석은 항상 한국어로 해주세요

