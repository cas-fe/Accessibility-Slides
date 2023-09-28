## Automatisches Testing: Trefferquote

- Beispiel [inaccessible table](https://cas-fe.github.io/Accessibility/demos/table/table-inaccessible.html):
  - WAVE und HTML_CodeSniffer erkennen _Layout table_.
  - [Tenon](https://tenon.io) (deprecated) warnte zusätzlich _Implicit table headers_.
  - Axe ist [happy](https://github.com/dequelabs/axe-core/issues/3011#issuecomment-863283657).
- Beispiel [inaccessible form](https://cas-fe.github.io/Accessibility/demos/form/form-inaccessible.html):
  - axe, WAVE, HTML_CodeSniffer und Tenon finden alle Felder ohne Label.
