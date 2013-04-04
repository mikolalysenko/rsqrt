var rsqrt = require("../rsqrt.js")
  , almostEqual = require("almost-equal")

var TOLERANCE = 1e-6

require("tap").test("rsqrt", function(t) {

  for(var f=TOLERANCE; f<=100.0; f+=0.01) {
    t.assert(almostEqual(rsqrt(f), 1.0/Math.sqrt(f), TOLERANCE, TOLERANCE), f + ": " + rsqrt(f) + " / " + 1.0/Math.sqrt(f))
  }

  //Ensure rsqrt is faster than sqrt
  var total = 0.0
  var start = new Date()
  for(var f=0.1; f<1000; f+=0.0001) {
    total += rsqrt(f)
  }
  var rs_time = (new Date()) - start

  var total = 0
  var start = new Date()
  for(var f=0.1; f<1000; f+=0.0001) {
    total += 1.0 / Math.sqrt(f)
  }
  var m_time = (new Date()) - start
  
  t.assert(rs_time < m_time, "Performance check, rsqrt = " + rs_time + "ms, 1.0/Math.sqrt = " + m_time + "ms")
  
  t.end()
})