## Demo 6: Modal

1. [Nicht barrierefrei](https://cas-fe.github.io/Accessibility/demos/aria/modal-inaccessible.html)
2. [Barrierefrei](https://cas-fe.github.io/Accessibility/demos/aria/modal-accessible.html)
2. [Barrierefrei (nativer Dialog)](https://cas-fe.github.io/Accessibility/demos/aria/modal-accessible-native.html)

<div class="fragment">

### Erkenntnisse

- Stelle sicher, dass der Fokus innerhalb des Modals bleibt
- Seit Kurzem stabile Lösung: natives <code>dialog</code>-Element
- Wenn selber gebaut: 
    - Verwende `role=“dialog”` für den Container und verknüpfe ihn via `aria-labelledby` mit dem Titel
    - Schliesse den Dialog auf `esc`
    - Fokussiere nach dem Schliessen das öffnende Element

</div>
