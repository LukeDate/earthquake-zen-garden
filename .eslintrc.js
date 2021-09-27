module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    '@typescript-eslint'
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "react/prop-types": ["off"],
    "max-lines-per-function": ["error", 40],
    "@typescript-eslint/no-explicit-any": 2
  }
}
