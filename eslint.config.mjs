import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    // files: ["**/*.ts", "**/*.tsx"],
    // languageOptions: {
    //   parserOptions: {
    //     ecmaVersion: 2024,
    //     sourceType: "module",
    //     ecmaFeatures: {
    //       jsx: true,
    //     },
    //   },
    // },
    rules: {
      "no-console": "error",
      // "react/react-in-jsx-scope": "off",
      // "react/jsx-uses-react": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      // "react/prop-types": "off",
      // "@typescript-eslint/ban-ts-comment": "off",
      // "@typescript-eslint/no-explicit-any": "off",
      // "@typescript-eslint/explicit-module-boundary-types": "off",
      // "@next/next/no-img-element": "error",
      // "@next/next/no-html-link-for-pages": "error",
    },
  },
];

export default eslintConfig;
