# Webrook × CFI — Pitch Website

A single-page pitch site for the Cycling Federation of India tender.
Built with Next.js, zero extra libraries — fast to load, easy to edit.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add your photos

See `public/images/IMAGE-GUIDE.md` — it lists the exact folder and filename
for every photo. Missing photos show a labelled placeholder on the page.

## Deploy (free, 2 minutes)

Easiest: [Vercel](https://vercel.com)

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Click Deploy — you get a shareable link like `webrook-cfi.vercel.app`
4. (Optional) add a custom domain like `cfi.webrook.in` for extra polish

## Edit content

Everything visible on the page lives in **one file**: `app/page.js`.
Colors and fonts live in `app/globals.css` (top of the file, `:root` variables).

## Structure

```
app/page.js        ← all the pitch content (edit here)
app/globals.css    ← design system (colors, fonts, spacing)
components/        ← Reveal (scroll animation), Counter (stat tick-up), Pic (image with placeholder)
public/images/     ← your photos go here (see IMAGE-GUIDE.md)
```
