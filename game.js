	


function getCircleCoordinates(radius){
	var coordinates = [];
	var increment = 0.5; //the smaller the increment the higher the accuracy
	if(radius <= 0){
		console.log("Error radius must be greater than 0");
		return;
	}
	for(var x = -1 * radius; x < radius; x += increment){
		y = Math.sqrt(radius * radius - x * x);
		coordinates.push(radius + x); //add the radius to shift the center
		coordinates.push(radius + y);
	}
	for(var x = radius; x > -1 * radius; x-= increment){
		y = Math.sqrt(radius * radius - x * x);
		coordinates.push(radius + x);
		coordinates.push(radius + -1 * y);
	}
	return coordinates;
}

window.onload = function() {
	var height = 480;
	var width = 640;
	Crafty.init(width,height);
	Crafty.canvasLayer.init();

	Crafty.defineScene("demo",function(){
		Crafty.background('#DCDCDC');

		//create a circle
		var c = Crafty.e("2D, Canvas, Image, Collision,Platform")
		.attr({x : 200 , y : 200  , w: 32 , h:32})
		.image("circle.png");// alternatively, object can be drawn using the canvas
		var circleCoords = getCircleCoordinates(c.attr("w") / 2);
		c.collision(circleCoords);

		//create an object to test collision
		var c = Crafty.e("2D, Canvas, Collision,Color,Motion,Fourway,Draggable")
		.attr({x : 0 , y : 0  , w: 32 , h:32})
		.color("black")
		.multiway({W: -90, S: 90, D: 0, A: 180})
		.onHit("Platform",() =>{
			 console.log(true);//logs true to the console when it hits
		});


	});
	Crafty.enterScene("demo");	
}
