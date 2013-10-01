
# useful-string

  useful functions i never really know where to put

## Installation

  Install with [component(1)](http://component.io):

    $ component install muigui/useful-string

  Install with npm:

    $ npm install useful-string

## API

### string.capitalize( item:String ):String
Returns a copy of the String with the first character in uppercase and all subsequent characters in lowercase.

#### Example:

```javascript

	var string = require( 'useful-string' )

    string.capitalize( 'LOREM IPSUM DOLOR' ) // returns => "Lorem ipsum dolor"

    string.capitalize( 'lorem ipsum dolor' ) // returns => "Lorem ipsum dolor"

    string.capitalize( 'Lorem Ipsum Dolor' ) // returns => "Lorem ipsum dolor"

    string.capitalize( 'Lorem ipsum dolor' ) // returns => "Lorem ipsum dolor"

```

### string.format( tpl:String, arg1:String[, arg2:String, ..., argN:String] ):String
Replaces the – zero indexed – numeric tokens in the String with the passed parameters.

If a token does not have a value, an empty String is used in its place.

**NOTE:** `format` calls `interpolate` internally.

#### Example:

```javascript

	var string = require( 'useful-string' );

    string.format( '{0} {1} {2} {3}', 'lorem', 'ipsum', 'dolor' ) // returns => "lorem ipsum dolor "

```

### string.guid():String
Generates a guid/uuid, the code for this was adapted from [this gist](https://gist.github.com/2295777).

```javascript

	var string = require( 'useful-string' );

	string.guid(); // returns something like => "286cb768-df10-4466-aabf-f5cb4ba406a2"

```

### string.hyphenate( item:String ):String
Returns a copy of the String with any spaces and/ or underscores replaced by hyphens.

When uppercase characters are encountered they are also replaced with a hyphen followed by their lowercase equivelant.

#### Example:

```javascript

	var string = require( 'useful-string' );

    string.hyphenate( 'Lorem IpsumDolor_sit' )     // returns => "lorem-ipsum-dolor-sit"

    string.hyphenate( 'Lorem IPsumDolor_sit' )     // returns => "lorem-i-psum-dolor-sit"

    string.hyphenate( 'Lorem    IpsumDolor_-sit' ) // returns => "lorem-ipsum-dolor-sit"

```

### string.id( item:Mixed[, prefix:String] ):String
Returns the `id` property of the passed item – item can be an Object, HTMLElement, "JavaScript Class" instance, etc...

If an `id` does not exist on the passed `item`, the item is assigned an auto-generated `id` and the value is returned.

If a `prefix` is supplied then it is used as the prefix for the `id` – if not `anon` is used as the `prefix`.

An internal counter that is automatically incremented is appended to the end of the `prefix` and is separated from the prefix by a hyphen.

#### Example:

```javascript

	var string = require( 'useful-string' );

    var foo = { id   : 'foo' },
       bar = { name : 'bar' },
       yum = { nam  : 'yum' };

    string.id( foo );         // returns => "foo"

    string.id( bar );         // returns => "anon-1000"

    string.id( yum, 'yum' );  // returns => "yum-1001"

```

### string.interpolate( tpl:String, dictionary:String[]|String{}[, pattern:RegExp] ):String
Replaces the tokens in the String with the values of the corresponding properties from the passed `dictionary` Object.

Also accepts an optional second parameter allowing you to define your own token matching `pattern`.

If a token does not have a value, an empty String is used in its place.

#### Example:

```javascript

	var string = require( 'useful-string' );

    string.interpolate( '{one} {two} {three} {four}', { one : 'lorem', two : 'ipsum', three : 'dolor' } ) // returns => "lorem ipsum dolor "

```

### string.toCamelCase( item:String ):String
Returns a copy of the String with any spaces and/ or hyphens removed and the lowercase character succeeding them transformed to uppercase.

#### Example:

```javascript

	var string = require( 'useful-string' );

    string.toCamelCase( 'Lorem IpsumDolor_sit' )     // returns => "LoremIpsumDolorSit"

    string.toCamelCase( 'Lorem IPsumDolor_sit' )     // returns => "LoremIPsumDolorSit"

    string.toCamelCase( 'lorem    IpsumDolor_-sit' ) // returns => "loremIpsumDolorSit"

```

### string.underscore( item:String ):String
Returns a copy of the String with any spaces and/ or hyphens replaced by underscores.

When uppercase characters are encountered they are also replaced with a underscore followed by their lowercase equivelant.

#### Example:

```javascript

	var string = require( 'useful-string' );

    string.underscore( 'Lorem IpsumDolor_sit' )     // returns => "lorem_ipsum_dolor_sit"

    string.underscore( 'Lorem IPsumDolor_sit' )     // returns => "lorem_i_psum_dolor_sit"

    string.underscore( 'Lorem    IpsumDolor_-sit' ) // returns => "lorem_ipsum_dolor_sit"

```

## License

(The MIT License)

Copyright (c) 2011 christos "constantology" constandinou http://muigui.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

