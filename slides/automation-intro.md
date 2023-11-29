## 7. Automatisches Testing

Mittels **statischer Code-Analyse** können sowohl Markup-Fehler als auch visuelle Probleme wie mangelnde Kontraste identifiziert werden.

Beispiele:

- [axe](https://www.deque.com/axe/): _The Standard in Accessibility Testing_
  - [Browser Extensions](https://www.deque.com/axe/browser-extensions/)
  - [ESLint-Plugin](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) (nur JSX)
  - [Editor-Extension](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) (VS Code)
- [WAVE](https://wave.webaim.org/extension/): _Web Accessibility Evaluation Tool_
  - Browser-Extension: [Vergleich mit axe](https://blog.scottlogic.com/2023/09/27/accessibility-tooling-wave-vs-axe.html)
- [HTML_CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/): _Check that your HTML code conforms to your coding standard_

Demo: [Node.js-Beispiel](https://github.com/cas-fe/Accessibility-Testing) mit axe und HTML_CodeSniffer
