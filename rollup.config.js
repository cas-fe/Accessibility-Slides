import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [nodeResolve(), postcss({ extract: true })],
  onwarn(warning, warn) {
    // Skip
    if (warning.code === "THIS_IS_UNDEFINED") {
      return;
    }

    warn(warning);
  },
};
