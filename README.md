match-like-gulp
===

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/match-like-gulp.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/match-like-gulp?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/match-like-gulp.png)](https://travis-ci.org/LingyuCoder/match-like-gulp)
[![Dependency Status](https://david-dm.org/LingyuCoder/match-like-gulp.svg)](https://david-dm.org/LingyuCoder/match-like-gulp)
[![devDependency Status](https://david-dm.org/LingyuCoder/match-like-gulp/dev-status.svg)](https://david-dm.org/LingyuCoder/match-like-gulp#info=devDependencies)
[![License](http://img.shields.io/npm/l/match-like-gulp.svg?style=flat-square)](LICENSE)

## Install

```bash
$ npm install --save match-like-gulp
```

## Usage

```javascript
var match = require('match-like-gulp');
match('/a/b/c.js', '/**/*.js'); // => true
match('/a/b/c.js', ['/a/**/*.js']); // => true
match('/a/b/c.js', ['/b/**/*.js']); // => false
match('/a/b/c.js', ['/b/**/*.js', '/a/**/*.js']); // => true
match('/a/b/c.js', ['/**/*.js', '!/a/**/*.js']); // => false
```

## License

The MIT License (MIT)

Copyright (c) 2015 天镶

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
