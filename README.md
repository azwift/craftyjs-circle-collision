# craftyjs-circle-collision
crafty.js example on creating collisions for circular boundaries

This is an algorithm that produces boundaries for circular objects in crafty.js

crafty.js does have a builtin function for circles (Crafty.circle()) but it can not be drawn on the canvas.

This workaround uses the builtin .collision function to allow users that create their own circle images (either by importing images or by drawing using the canvas) to set the collision to match a circle's boundary. 
