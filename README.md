# proxyquire issue reproduction

Demonstrates a question I have with proxyquire and ES6 import/export syntax.

The module I want to test exports using ES 6 `export default`. In order to make it work, I have to add `.default` in the `proxyquire` call. (See `fetchBuilds.test.js`.) This seems not quite right.

## Usage

Install dependencies:
```
yarn
```

Run the "app", which fetches a list from an external API and logs it to the console:
```
yarn start
```

Run tests:
```
yarn test # Test runs, but I have to append a weird `.default` to the `proxyquire` call.
```

```
yarn broken-test # Code looks right, but does not run.
```

## Notes

- Using yarn instead of npm. Kinda obvious, but worth mentioning in case this somehow affects the behavior in question.

- Using Tape for testing.

- Using `babel-node`, which comes from `babel-cli`, with `babel-preset-env`. `babel-node` runs the test script, so that I can use ES6 `import/export` syntax in the test file.
