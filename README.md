Absolute require for node.js.

## Installation:
`npm i -D abs-require`.

## Motivation
Instead of a long relative path to the module, write a short absolute path.

## Examples
Was:
```
const someModule = require('../../../../../someModule/index.js');
```

Become:
```
const absRequire = require('abs-require');

const someModule = absRequire('someModule/index.js');
```
