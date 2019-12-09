Absolute require for node.js.

## Installation:
`npm i -D abs-require`.

## Usage
Instead of a relative path `const someModule = require('../../../someModule/index.js');`, write an absolute path `const someModule = require('someModule/index.js');`.

## Examples
Was:
`const someModule = require('../../../../../someModule/index.js');`.

Become:
```
const absRequire = require('abs-require');

const someModule = absRequire('someModule/index.js');
```
