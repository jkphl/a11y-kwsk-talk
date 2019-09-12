---
title: "11. Inhalte visuell verstecken"
css: css
theme: tertiary
---
## 11. Inhalte visuell verstecken

<figure class="side-by-side">
<figcaption>

- Für alle Nutzer verstecken durch `hidden`-Attribut / `display: none`
- Element-Inhalte oder ganze Elemente visuell verstecken, aber für AT auslesbar lassen (»**visually hidden**«)
- Beispiel Menüschalter: `Menü<span class="hide-element"> anzeigen</span>`

</figcaption>

    .hide-content {
        white-space: nowrap !important;
        overflow: hidden !important;
        text-indent: 300% !important;
    }
    
    .hide-element {
        position: absolute !important;
        overflow: hidden !important;
        clip: rect(0 0 0 0) !important;
        height: 1px !important;
        width: 1px !important;
        margin: -1px !important;
        padding: 0 !important;
        border: 0 !important;
    }

</figure>
