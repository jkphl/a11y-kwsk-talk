---
title: "15. Sichtbarer Fokus"
css: html css
theme: tertiary
---
## 15. Sichtbarer Fokus

- Tastaturfokus immer deutlich sichtbar
- **niemals** `outline: none`, allenfalls mit Ersatz ([WCAG SC 2.4.7](https://www.w3.org/TR/WCAG21/#focus-visible))
- Fokushervorhebung muss zweckmäßig, aber nicht schön sein
- neu: `:focus-visible` (bisher nur Firefox als `:-moz-focusring`)
- keinen Tastaturfokus in unsichtbaren Bereichen (`hidden`-Attribut / `display: none`)
