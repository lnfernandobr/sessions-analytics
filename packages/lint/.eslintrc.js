module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier", "react-app"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    "no-console": "error",
    "no-unused-vars": "warn",
    semi: ["error", "always"],
    indent: ["error", 2],
    "comma-dangle": ["error", "always-multiline"],
    "no-use-before-define": "error",
    "no-undef": "error",
  },
};
