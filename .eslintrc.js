module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "warn", // Предупреждение для отсутствующих PropTypes
    "no-unused-vars": "warn", // Предупреждение для неиспользуемых переменных
    "no-console": "off", // Предупреждение для использования console.log
    "eqeqeq": "error", // Требовать строгое сравнение (=== вместо ==)
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};