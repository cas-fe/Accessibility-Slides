## Demo 3: Formulare

1. [Nicht barrierefrei](https://cas-fe.github.io/Accessibility/demos/form/form-inaccessible.html)
2. [Barrierefrei](https://cas-fe.github.io/Accessibility/demos/form/form-accessible.html)
3. [ARIA](https://cas-fe.github.io/Accessibility/demos/form/form-aria.html)
4. [HTML5](https://cas-fe.github.io/Accessibility/demos/form/form-html5.html)

### Erkenntnisse

- Verwende ein `<label>` für jedes Feld
- Markiere obligatorische Felder mit Text innerhalb des Labels. Verwende `required` and `aria-required` Attribute als *progressive enhancement*.
- Teile dem User mit, wenn ein Input nicht valide ist:
    - Ergänze das Label mit einer Fehlermeldung und fokussiere das erste invalide Feld. Verwende `aria-invalid` zur zusätzlichen Indikation.
    - Verwende `aria-describedby` um Fehlermeldungen mit dem entsprechenden Feld zu verbinden.