## Demo 5: Autosuggest

1. [Nicht barrierefrei](https://cas-fe.github.io/Accessibility/demos/aria/autosuggest-inaccessible.html)
2. [Barrierefrei](https://cas-fe.github.io/Accessibility/demos/aria/autosuggest-accessible.html)

<div class="fragment">

### Erkenntnisse

- Definiere `keydown`-Listeners für Pfeiltasten, um durch Suggestions zu navigieren
- Informiere den User mit `aria-live`-Region über dynamischen Inhalt
- Verwende die Rollen `listbox` (Container) und `option` (Suggestions)
- Verwende den Zustand `aria-expanded` je nach Sichtbarkeit der Suggestions

</div>
