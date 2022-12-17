    /*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;
var canyon;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    collectable = {
		x_pos: width / 2 - 200,
		y_pos: floorPos_y,
		size: 30,
        isFound: false,
	}
    
    canyon = {
		x_pos: width - 400,
		y_pos: height,
		width: 150,
		height: floorPos_y,
	}

}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    drawCanyon(canyon.x_pos, canyon.y_pos, canyon.width, canyon.height)
    
    //draw the collectable
    if (!collectable.isFound) { 
	   drawCollactable(collectable.x_pos, collectable.y_pos, collectable.size)
    }

    //collect the collectable
    if (dist(collectable.x_pos, collectable.y_pos, gameChar_x, gameChar_y) < 20) {
        collectable.isFound = true
    }
    
    if (
        gameChar_y > floorPos_y &&
        gameChar_x > canyon.x_pos &&
        gameChar_x < canyon.x_pos + canyon.width
        
    ) {
        isPlummeting = true
    }
    
    
	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        charDrawSideJumping(gameChar_x, gameChar_y, false)

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        charDrawSideJumping(gameChar_x, gameChar_y, true)

	}
	else if(isLeft)
	{
		// add your walking left code
        charDrawSide(gameChar_x, gameChar_y, false)

	}
	else if(isRight)
	{
		// add your walking right code
        charDrawSide(gameChar_x, gameChar_y, true)

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        charDrawFrontJump(gameChar_x, gameChar_y)

	}
	else
	{
		// add your standing front facing code
        charDrawFront(gameChar_x, gameChar_y)

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

    if (isLeft)
    {
        gameChar_x -= 4
    }
    
    if (isRight)
    {
        gameChar_x += 4
    }

    if ((gameChar_y > floorPos_y) && !isPlummeting)
    {
        isFalling = false
    } else {
        isFalling = true
        gameChar_y += 3
    }
    
    if (isPlummeting) {
        
        gameChar_y += 5;
    }

}


function keyPressed()
{
    if (isPlummeting) return
  
    if (keyCode == 65) {
        isLeft = true
    }
    
    if (keyCode == 68) {
        isRight = true
    }
    
    if (keyCode == 87 && !isFalling) {
        gameChar_y -=150
    }
}

function keyReleased()
{
    if (isPlummeting) return

    if (keyCode == 65) {
        isLeft = false
    }
    
    if (keyCode == 68) {
        isRight = false
    }
}
