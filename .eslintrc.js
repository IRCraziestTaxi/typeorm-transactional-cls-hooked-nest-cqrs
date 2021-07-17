module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
      project: "tsconfig.json",
      sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended"],
  root: true,
  env: {
      node: true,
      jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "quotes": ["error", "double"],
      "comma-dangle": ["error", "never"],
      "@typescript-eslint/indent": ["error", 4, {
          SwitchCase: 1
      }],
      "brace-style": ["error", "stroustrup"],
      "curly": ["error", "all"],
      "@typescript-eslint/explicit-member-accessibility": "error",
      "no-trailing-spaces": "error",
      "semi": ["error", "always"],
      "@typescript-eslint/prefer-readonly": "error"
  },
};
