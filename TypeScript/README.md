# benchmark-typescript
Benchmarks of [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) and [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) with TypeScript.

## Installation

Using [npm](https://www.npmjs.com/package/typescript):
```bash
$ npm install typescript --save-dev
```

Using [yarn](https://yarnpkg.com/package/typescript):

```bash
$ yarn add typescript --dev
```

## Compiling

Using [npm](https://docs.npmjs.com/cli/v8/commands/npm-run-script):
```bash
$ npm run build
```

Using [npx](https://www.npmjs.com/package/npx):
```bash
$ npx tsc
```

Compiled files are placed within the [public directory](/TypeScript/public/).

## Examples

Point to the external [compiled JavaScript file](/TypeScript/public/index.js) within your HTML document:
```html
<script src="index.js" defer></script>
```
The script is downloaded in parallel to parsing the [page](/TypeScript/public/index.html), and executed after the page has finished parsing.

## License

[MIT](../LICENSE)

Copyright 2022, Simon Sørensen