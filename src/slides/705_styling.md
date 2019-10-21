---
title: "6. Semantik ≠ Styling"
css: css
theme: tertiary
---
## 6. Semantik ≠ Styling

- Standardstyling der Browser ist kein Stilmittel!
- Styling stets unabhängig von Semantik halten
- Nur in Ausnahmefällen auf HTML-Elemente stylen (z.B. `*`, Schriftart für `<input>`, browserspezifische Standardabstände)
- `.classname {…}` → `[attribute=value] {…}` → `element {…}` → ~`#id {…}`~ → ~`!important {…}`~
