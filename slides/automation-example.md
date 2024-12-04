## Automatisches Testing: Trefferquote

- Beispiel [inaccessible table](https://cas-fe.github.io/Accessibility/demos/table/table-inaccessible.html):
  - WAVE und HTML*CodeSniffer erkennen \_Layout table*.
  - [Tenon](https://tenon.io) (deprecated) warnte zusätzlich _Implicit table headers_.
  - Axe ist [happy](https://github.com/dequelabs/axe-core/issues/3011#issuecomment-863283657).
- Beispiel [inaccessible form](https://cas-fe.github.io/Accessibility/demos/form/form-inaccessible.html):
  - axe, WAVE, HTML_CodeSniffer und Tenon finden alle Felder ohne Label.

<div class="fragment">

- _Grenzen_: [Building the most inaccessible site possible with a perfect Lighthouse score](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/)

</div>
