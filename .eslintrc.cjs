// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//     "standard",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   settings: { react: { version: "18.2" } },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": "warn",
//     "react/prop-types": [
//       "warn",
//       {
//         ignore: [],
//         customValidators: [],
//         skipUndeclared: false,
//       },
//     ],
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // Customize rules as per your project's needs
  },
  settings: {
    react: {
      version: 'detect' // Automatically includes the React version
    }
  }
}
