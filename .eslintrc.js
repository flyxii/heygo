module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ["prettier", "testing-library", "jest-dom"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "testing-library/prefer-screen-queries": "off",
    "testing-library/no-node-access": "off",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
