import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./index.css";

import "reveal.js/dist/reveal.js";
import "reveal.js/plugin/notes/notes.js";
import "reveal.js/plugin/markdown/markdown.js";
import "reveal.js/plugin/highlight/highlight.js";

Reveal.initialize({
  hash: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
});
