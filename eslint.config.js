import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  { languageOptions: { parser: tsParser, globals: globals.browser } },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      prettier: pluginPrettier,
    },
  },
  {
    rules: {
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": 1,
      "react/react-in-jsx-scope": "off",
      "import/no-named-as-default-member": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", "jsx", "tsx"] },
      ],
    },
  },
  pluginJs.configs.recommended,
  prettierConfig,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
