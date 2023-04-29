# @kamilmielnik/eslint-config

## Setup

1. Install the package

```Shell
npm install @kamilmielnik/eslint-config --save-dev
```

2. Add `@kamilmielnik/eslint-config` to `extends` array in [ESLint configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package).

```js
/* .eslintrc.js */
module.exports = {
  /* ... */
  extends: ['@kamilmielnik/eslint-config'],
};
```

3. Make sure your `tsconfig.json` provides [Type Information](https://typescript-eslint.io/linting/typed-linting/) - your `.eslintrc.js` should enable `parserOptions.project` and specify `parserOptions.tsconfigRootDir`:

```js
/* .eslintrc.js */
module.exports = {
  /* ... */
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
```
