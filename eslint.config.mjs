import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.webextensions
      }
    }
  },
  {
    ignores: ["extension/lib/**"]
  },
  {
    rules: {
      "quotes": ["error", "double", { "avoidEscape": true }],
      "semi": ["error", "always"]
    }
  }
];