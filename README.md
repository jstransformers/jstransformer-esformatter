# jstransformer-esformatter

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-esformatter.svg)](https://greenkeeper.io/)

[esformatter](https://github.com/millermedeiros/esformatter) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-esformatter/master.svg)](https://travis-ci.org/jstransformers/jstransformer-esformatter)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-esformatter/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-esformatter)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-esformatter/master.svg)](http://david-dm.org/jstransformers/jstransformer-esformatter)
[![NPM version](https://img.shields.io/npm/v/jstransformer-esformatter.svg)](https://www.npmjs.org/package/jstransformer-esformatter)

## Installation

    npm install jstransformer-esformatter

## API

```js
var esformatter = require('jstransformer')(require('jstransformer-esformatter'));

esformatter.render(`foo(
bar
)`).body
//=> 'foo(\n  bar\n)'
```

## License

MIT
