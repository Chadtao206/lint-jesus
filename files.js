const eslintIgnore = `node_modules`;
const eslintJSON = `
{
    "root": true,
    "env": {
      "browser": true,
      "commonjs": true,
      "node": true,
      "es6": true
    },
    "rules": {
      "no-empty": "error",
      "no-extra-semi": "error",
      "no-func-assign": "error",
      "no-irregular-whitespace": "error",
      "no-unreachable": "error",
      "dot-notation": "error",
      "eqeqeq": "error",
      "no-empty-function": "error",
      "no-multi-spaces": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-trailing-spaces": "error",
      "default-case": "error",
      "no-unused-vars": "error",
      "no-use-before-define": "error",
      "no-redeclare": "error",
      "brace-style": "error",
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "no-undef": "error",
      "arrow-parens": "error"
    },
    "extends": ["prettier"]
  }  
`;

const prettierIgnore = `node_modules`;

const prettierJSON = `
{
    "arrowParens": "always",
    "singleQuote": true,
    "trailingComma": "none",
    "semi": true,
    "endOfLine": "lf",
    "tabWidth": 2
}
`;

export default [
  { path: "./.eslintignore", content: eslintIgnore },
  { path: "./.eslintrc.json", content: eslintJSON },
  { path: "./.prettierignore", content: prettierIgnore },
  { path: "./.prettierrc.json", content: prettierJSON },
];
