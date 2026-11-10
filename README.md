# Waterscape

**What is Waters?** — the interactive Waters machine from SmartStart, as plain **HTML / CSS / JS** only.

No React, no npm, no SmartStart backend, no login, no employee data.

## Run

From this folder:

```powershell
# Option A — any static server
npx --yes serve .
# then open the URL it prints (usually http://localhost:3000)
```

```powershell
# Option B — Python
python -m http.server 8000
# open http://localhost:8000
```

Or open `index.html` directly in a browser.

## What’s included

| File | Role |
| --- | --- |
| `index.html` | Machine shell (intro, chapters, finale) |
| `styles.css` | Original `.wm` / `.wr` styles + brand toggle |
| `js/waters-machine.js` | Interactive overview machine |
| `js/waters-ride*.js` / `waters-gfx3d.js` | LC/MS “How it works” / “Become the sample” |
| `js/waters-data.js` | Public Waters story content |
| `js/boot.js` | Opens the machine on load |

Source: SmartStart `frontend/waters-*.js` + `.wm` / `.wr` CSS (brand-theme branch).
