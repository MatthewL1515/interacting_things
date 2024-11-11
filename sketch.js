// Variables creation
  // Shapes
  let circle1, circle2

  // Other Variables
  let w, distance, c, n, low, high

function setup() {  
  w = 400
  createCanvas(w, w)
  
  // Max Color
  c = 255
  
  // Flip to Negative Multiplier
  n = -1

  // Velocities
  low = -3
  high = 3
  
  // Circle 1 (Cannon) Variables
  circle1 = createCircle(60,"black")
  circle2 = createCircle(20,"red")
}

function draw() {
  background(220)
  
  updateCircle(circle1)
  updateCircle(circle2)
  
  // Collision Check
  distance = dist(circle1.x, circle1.y, circle2.x, circle2.y)
  if (distance <= circle1.r + circle2.r) {
    handleCollision()
  }
}

function createCircle(size, color) {
  return{
    x: random(w),
    y: random(w),
    dx: random(low,high),
    dy: random(low,high),
    s: size,
    r: 0.5 * size,
    color: color
  }
}

function updateCircle(c) {
  //Draw circle
  fill(c.color)
  circle(c.x, c.y, c.s)
  
  // Move Circle
  c.x += c.dx
  c.y += c.dy
  
  // Boundary Checks
  if (c.x - c.r < 0 || c.x + c.r > width) {
    c.dx *= n
  }
  if (c.y - c.r < 0 || c.y + c.r > height) {
    c.dy *= n
  }
}

function handleCollision() {
  // Change both circles' colors to random colors
  circle1.color = color(random(c), random(c), random(c))
  circle2.color = color(random(c), random(c), random(c))
  
  // Reverse the directions
  circle1.dx *= n
  circle1.dy *= n
  circle2.dx *= n
  circle2.dy *= n
}

// Reset function for key press
function reset() {
  circle1 = createCircle(60, "black")
  circle2 = createCircle(20, "red")
}

// Key press to reset
function keyPressed() {
  reset()
}
