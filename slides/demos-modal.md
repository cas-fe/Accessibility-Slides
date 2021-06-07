## Demo 6: Modal

1. [Nicht barrierefrei](https://cas-fe.github.io/Accessibility/demos/aria/modal-inaccessible.html)
2. [Barrierefrei](https://cas-fe.github.io/Accessibility/demos/aria/modal-accessible.html)

### Erkenntnisse

- Stelle sicher, dass der Fokus innerhalb des Modals bleibt
- Verwende `role=“dialog”` für den Container und verknüpfe ihn via `aria-labelledby` mit dem Titel
- Schliesse den Dialog auf `esc`
