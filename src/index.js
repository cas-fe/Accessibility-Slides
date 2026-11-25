import "./fonts.css";
import "reveal.js/reset.css";
import "reveal.js/reveal.css";
import "reveal.js/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./index.css";

import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes";
import RevealMarkdown from "reveal.js/plugin/markdown";
import RevealHighlight from "reveal.js/plugin/highlight";

Reveal.initialize({
  hash: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
});

Reveal.configure({ pdfSeparateFragments: false });
