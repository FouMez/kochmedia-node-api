// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    node: true
  },
  extends: [
    "airbnb-base",
    "plugin:security/recommended",
    "eslint:recommended",
    "plugin:node/recommended"
  ],
  plugins: ["html", "security", "mocha"],
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-console": 0,
    "semi": ["error", "always", { omitLastInOneLineBlock: true }],
    "node/exports-style": ["error", "module.exports"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "mocha/no-exclusive-tests": "error",
    "security/detect-non-literal-fs-filename": 0
  }
};
