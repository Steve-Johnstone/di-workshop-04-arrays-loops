function setup() {
  createCanvas(400, 400)
  background(200);
}
function draw() {
  var x = 10
  var count = 10
  var y = 10

  for (var i = 0; i < count; i++) {

    x = 10
    for (var j = 0; j < count; j++) {
      rect(x, y, 20, 20)
      x = x + 20
      y= y+10
    }

    y = y + 10

  }
  /* while (i < count) {
    rect(x, 20, 20, 20)
    x = x + 20

    i = i + 1
  }*/
}

