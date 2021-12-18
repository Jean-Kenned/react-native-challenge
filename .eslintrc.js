module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig-eslint.json"
      },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "ecmaFeatures": {
        "arrowFunctions":true,
      },
    "rules": {
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/comma-spacing": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/no-namespace": "off",
        "no-redeclare": "off",
        "import/export": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};
