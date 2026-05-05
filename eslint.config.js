const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["app/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        document: "readonly",
        Date: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-redeclare": "off"
    }
  }
];
