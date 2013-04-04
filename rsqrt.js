"use strict"

var FLOAT_VIEW = new Float32Array(1)
  , INT_VIEW = new Uint32Array(FLOAT_VIEW.buffer)

function rsqrt(number) {
  var threhalfs = 1.5
  var x2        = 0.5 * number
  FLOAT_VIEW[0] = number
  INT_VIEW[0]   = 0x5f3759df - ( INT_VIEW[0] >>> 1 )
  FLOAT_VIEW[0] = FLOAT_VIEW[0] * ( 1.5 - ( x2 * FLOAT_VIEW[0] * FLOAT_VIEW[0] ) )
  FLOAT_VIEW[0] = FLOAT_VIEW[0] * ( 1.5 - ( x2 * FLOAT_VIEW[0] * FLOAT_VIEW[0] ) )
  FLOAT_VIEW[0] = FLOAT_VIEW[0] * ( 1.5 - ( x2 * FLOAT_VIEW[0] * FLOAT_VIEW[0] ) )
  return FLOAT_VIEW[0]
}

module.exports = rsqrt