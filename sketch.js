    /*

The Game Project

Week 3

Game interaction

*/


/* NOTE:
   code is modulerised - check `/lib` files
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
var tree_x;
var clouds;

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
        isFound: false,
	}
    
    canyon = {
		x_pos: width - 400,
		y_pos: height,
		width: 150,
		height: floorPos_y,
	}
    tree_x = [100, 400, 900]
    clouds = [
        { x: 100, size: 1 },
        { x: 300, size: 2 },
        { x: 800, size: 1 },
    ]
    mountains = [
        {x: 100, size: 2},
        {x: 400, size: 4},
        {x: 800, size: 5},
    ]

}

function draw()
{
	background(100,155,255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

    // draw clouds
    for (var i = 0; i < clouds.length; i++) {
        cloud(clouds[i].x, 100, clouds[i].size)
    }

    // draw mountains
    for (var i = 0; i < mountains.length; i++) {
        mountain(mountains[i].x, floorPos_y, mountains[i].size)
    }
    
	//draw the canyon
    drawCanyon(canyon.x_pos, canyon.y_pos, canyon.width, canyon.height)
    
    // draw trees
    for (var i = 0; i < tree_x.length; i++) {
        tree(tree_x[i], floorPos_y)
    }

    //draw the collectable
    if (!collectable.isFound) { 
	   drawCollactable(collectable.x_pos, collectable.y_pos)
    }
    
    //collect the collectable
    if (dist(collectable.x_pos, collectable.y_pos, gameChar_x, gameChar_y) < 24) {
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
        charDrawSideJumping(gameChar_x, gameChar_y, false)
	}

	else if(isRight && isFalling)
	{
        charDrawSideJumping(gameChar_x, gameChar_y, true)
	}

	else if(isLeft)
	{
        charDrawSide(gameChar_x, gameChar_y, false)
	}

    else if(isRight)
	{
        charDrawSide(gameChar_x, gameChar_y, true)
	}

    else if(isFalling || isPlummeting)
	{
        charDrawFrontJump(gameChar_x, gameChar_y)
	}

    else
	{
        charDrawFront(gameChar_x, gameChar_y)
	}
    // end game char


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
        isLeft = false
        isRight = false
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
