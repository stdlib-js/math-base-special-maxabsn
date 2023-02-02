<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# maxabsn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the maximum absolute value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
maxabsn = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-maxabsn@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-maxabsn/tags). For example,

```javascript
maxabsn = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-maxabsn@v0.0.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var maxabsn = require( 'path/to/vendor/umd/math-base-special-maxabsn/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-maxabsn@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.maxabsn;
})();
</script>
```

#### maxabsn( \[x\[, y\[, ...args]]] )

Returns the maximum absolute value.

```javascript
var v = maxabsn( -4.2, 3.14 );
// returns 4.2

v = maxabsn( +0.0, -0.0 );
// returns +0.0

v = maxabsn( 4.2, 3.14, -1.0, 6.8 );
// returns 6.8
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = maxabsn( 4.2, NaN );
// returns NaN

v = maxabsn( NaN, 3.14 );
// returns NaN
```

If not provided any arguments, the function returns `+infinity`.

```javascript
var v = maxabsn();
// returns Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, negative infinity is the identity element for the maximum, and thus, the function returns `+infinity` (i.e., the absolute value of negative infinity).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-maxabsn@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*1000.0 ) - 500.0;
    y = ( randu()*1000.0 ) - 500.0;
    v = maxabsn( x, y );
    console.log( 'maxabs(%d,%d) = %d', x, y, v );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/max`][@stdlib/math/base/special/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minabs`][@stdlib/math/base/special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-maxabsn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-maxabsn

[test-image]: https://github.com/stdlib-js/math-base-special-maxabsn/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/math-base-special-maxabsn/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-maxabsn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-maxabsn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-maxabsn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-maxabsn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-maxabsn/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-maxabsn/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-maxabsn/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-maxabsn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-maxabsn/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/max]: https://github.com/stdlib-js/math-base-special-max/tree/umd

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math-base-special-minabs/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
