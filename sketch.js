// Variables creation

// Shapes
// Circle 1 (Cannon)
let circle1_x, circle1_y, circle1_dx, circle1_dy, circle1_color, circle1_s, circle1_r
// Circle 2 (CannonBall)
let circle2_x, circle2_y, circle2_dx, circle2_dy, circle2_color, circle2_s, circle2_r
// Other Variables
let w, distance, c, n, low, high

function setup() {  
  w = 400
  createCanvas(w, w)
  // Max Color
  c = 255
  // Flip to Negative
  n = -1

  // Velocities
  low = -3
  high = 3
  
  // Circle 1 (Cannon) Variables
  circle1_s = 60
  circle1_r = 0.5 * circle1_s
  circle1_color = "black"
  
  // Circle 2 (Cannonball) Variables
  circle2_s = 20
  circle2_r = 0.5 * circle2_s
  circle2_color = "red"
  
  reset()
}

function draw() {
  background(220)
  
  // Draw circles
  fill(circle1_color)
  circle(circle1_x, circle1_y, circle1_s)
  
  fill(circle2_color)
  circle(circle2_x, circle2_y, circle2_s)
  
  // Move circles
  circle1_x += circle1_dx
  circle1_y += circle1_dy
  circle2_x += circle2_dx
  circle2_y += circle2_dy
  
  // Boundary Check: Circle 1
  if (circle1_x - circle1_r < 0 || circle1_x + circle1_r > width) { 
    circle1_dx *= n
  }
  
  if (circle1_y - circle1_r < 0 || circle1_y + circle1_r > height) { 
    circle1_dy *= n
  }
  
  // Boundary Check: Circle 2
  if (circle2_x - circle2_r < 0 || circle2_x + circle2_r > width) { 
    circle2_dx *= n
  }
  
  if (circle2_y - circle2_r < 0 || circle2_y + circle2_r > height) { 
    circle2_dy *= n
  }
  
  // Collision Check
  distance = dist(circle1_x, circle1_y, circle2_x, circle2_y)
  if (distance <= circle1_r + circle2_r) {
    handleCollision()
  }
}

// Collision handling - changes color and makes circles go in opposite directions
function handleCollision() {
  // Change both circles' colors to random colors
  circle1_color = color(random(c), random(c), random(c))
  circle2_color = color(random(c), random(c), random(c))
  
  // Make circles go in opposite directions by swapping and reversing velocities
  circle1_dx *= n
  circle1_dy *= n
  
  circle2_dx *= n
  circle2_dy *= n

}

// Reset function for key press
function reset() {
  // Set random initial positions and velocities
  circle1_x = random(w)
  circle1_y = random(w)
  circle1_dx = random(low, high)
  circle1_dy = random(low, high)
  
  circle2_x = random(w)
  circle2_y = random(w)
  circle2_dx = random(low, high)
  circle2_dy = random(low, high)
  
  // Reset colors
  circle1_color = "black"
  circle2_color = "red"
}

// Key press to reset
function keyPressed() {
  reset()
}
