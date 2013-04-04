rsqrt
=====
An attempt to port [Quake's fast inverse square root](http://en.wikipedia.org/wiki/Fast_inverse_square_root) to JS.  Do not ever use this.

## Install:

    npm install rsqrt

## Example:

```javascript
console.log(require("rsqrt")(100.0))  //Prints out approximately 0.1
```

## `require("rsqrt")(number)`
Computes an approximation for `1.0 / Math.sqrt(number)`

## Should I ever use this?

No.  `1.0 / Math.sqrt` is at least twice as fast.

## Why did you publish this?

To warn others.

## Credits
(c) 2013 Mikola Lysenko. MIT License
