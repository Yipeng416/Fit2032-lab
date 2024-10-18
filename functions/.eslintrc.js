module.exports = {
  env: {
    es6: true,
    node: true, // Node.js 环境
    browser: true, // 浏览器环境
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {
    process: "readonly", // 显式声明全局变量
    module: "readonly",  // 显式声明全局变量
  },
};
