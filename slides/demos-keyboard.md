## Demo 7: Buttons & Links

1. [Nicht barrierefrei](https://cas-fe.github.io/Accessibility/demos/buttons-links/buttons-links-inaccessible.html)
2. [Barrierefrei](https://cas-fe.github.io/Accessibility/demos/buttons-links/buttons-links-inaccessible.html)

### Erkenntnisse

- Entferne <u>nie</u> die Focus-Styles
  - Falls doch: Definiere alternative, gut sichtbare Styles
- Verwende bereits barrierefreie Elemente wie `<a>` oder `<button>`
  - Falls nicht: Füge `role=”button”` und `tabindex=”0”` hinzu und definiere keydown listeners für Space- and Enter-Taste
<!-- - Füge bei Icon-Links eine visuelle versteckte Textalternative hinzu -->
<!-- - Verstecke Iconfont-Characters, sofern sie nicht korrekt gemappt werden -->
