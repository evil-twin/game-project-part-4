function frontMouth(x, y) {
    stroke(0);
    ellipse(x - 6, y - 25, 1, 2)
    ellipse(x + 6, y - 25, 1, 2)
    line(x - 6, y - 25, x - 4, y - 22)
    line(x - 4, y - 22,x + 4, y - 22)
    line(x + 4, y - 22,x + 6, y - 25)
}

function frontEyes(x, y) {
    fill(255)
    ellipse(x, y - 36, 18, 12)
    fill(0)    
    ellipse(x, y - 34, 9, 7)
   
}

function sideMouth(x, y, isFlipped) {
    p1 = isFlipped ? 6 : -6
    p2 = isFlipped ? 11 : -11
    stroke(0);
    ellipse(x + p1, y - 25, 1, 2)
    line(x + p1, y - 25, x + p2, y - 22)
}

function sideEyes(x, y, isFlipped) {
    p1 = isFlipped ? 7 : -7
    p2 = isFlipped ? 9 : -9

    fill(255)
    ellipse(x + p1, y - 36, 10, 12)
    fill(0)    
    ellipse(x + p2, y - 34, 7, 5)   
}

function drawBody(x, y) {
    push()
    fill(137,213,96)
    ellipse(x, y - 32, 26, 34)
    pop()
    
}

function charDrawFront(x, y) {
    
    function hand (x, y, isFlipped) {
        p1 = isFlipped ? 11 : -11
        p2 = isFlipped ? 13 : -13
        p3 = isFlipped ? 14 : -14

        line(x + p1, y - 24, x + p2, y - 20)
        line(x + p2, y - 20, x + p3, y - 12)
    }
    
    function leg (x, y, isFlipped) {
        p1 = isFlipped ? 6 : -6
        p2 = isFlipped ? 2 : -2
        p3 = isFlipped ? 5 : -5

        ellipse(x + p1, y + 1, 4, 1)
        line(x + p2, y - 15, x + p3, y - 6)
        line(x + p3, y - 6, x + p3, y)
    }

    drawBody(x, y)
    frontEyes(x, y)    
    frontMouth(x, y)

    push()
    strokeWeight(2)    
    stroke(82, 129, 54); // dark green
    fill(0, 0, 255);
    
    hand(x, y)
    leg(x, y)

    hand(x, y, true)
    leg(x, y, true)
    
    pop()
}

function charDrawFrontJump(x, y) {
    function hand (x, y, isFlipped) {
        p1 = isFlipped ? 11 : -11
        p2 = isFlipped ? 15 : -15
        p3 = isFlipped ? 16 : -16
        
        line(x + p1, y - 24, x + p2, y - 30)
        line(x + p2, y - 30, x + p3, y - 35)
    }
    
    function leg (x, y, isFlipped) {
        p1 = isFlipped ? 6 : -6
        p2 = isFlipped ? 2 : -2
        p3 = isFlipped ? 8 : -8
        p4 = isFlipped ? 5 : -5
        
        ellipse(x + p1, y - 3, 4, 1)
        line(x + p2, y - 15, x + p3, y - 10)
        line(x + p3, y - 10, x + p4, y - 3)
    }

    drawBody(x, y)
    frontEyes(x, y)    
    frontMouth(x, y)

    push()
    strokeWeight(1.8)    
    stroke(82, 129, 54); // dark green
    fill(0, 0,255);
    
    hand(x, y)
    leg(x, y)
    
    hand(x, y, true)
    leg(x, y, true)
    
    pop()
}

function charDrawSide(x, y, isFlipped) {
    function leg (x, y, isFlipped) {
        p1 = isFlipped ? -1 : +1
        p2 = isFlipped ? -3 : +3
        line(x, y - 15, x - p1, y - 10)
        line(x - p1, y -10, x + p1, y +2)
        ellipse(x + p1, y + 1, 4, 1)
                
        line(x + p2, y - 15, x - p1 + p2, y - 10)
        line(x - p1 + p2, y -10, x + p1 + 2 * p2, y +2)
        ellipse(x + p1, y + 1, 4, 1)
        ellipse(x + p1 + 2 * p2 , y + 1, 4, 1)
    }
    
    function hand (x, y, isFlipped) {
        p1 = isFlipped ? -5 : +5
        p2 = isFlipped ? 10 : -10
        
        line(x + p1, y - 30, x, y - 20)
        line(x, y - 20, x + p2, y - 12)
    }
    
    drawBody(x, y, isFlipped)
    sideEyes(x, y, isFlipped)
    sideMouth(x, y, isFlipped)
    
     push()
    strokeWeight(1.8)    
    stroke(82, 129, 54); // dark green
    fill(0, 0,255);
    
    hand(x, y, isFlipped)
    leg(x, y, isFlipped)
   
    pop()
    
}

function charDrawSideJumping(x, y, isFlipped) {
    function leg (x, y, isFlipped) {
        p1 = isFlipped ? -5 : +5
        p2 = isFlipped ? -3 : +3
        
        line(x, y - 15, x - p1, y - 10)
        line(x - p1, y - 10, x + p1, y - 5)
        ellipse(x + p1, y - 5, 4, 1)
                
        line(x + p2, y - 15, x - p1 + p2, y - 10)
        line(x - p1 + p2, y -10, x + p1 + 2 * p2, y - 4)
        ellipse(x + p1 + 2 * p2 , y - 4, 4, 1)
    }
    
    function hand (x, y, isFlipped) {
        p1 = isFlipped ? -5 : +5
        p2 = isFlipped ? -1 : +1
        p3 = isFlipped ? -2 : 2
        
        line(x + p1, y - 30, x + p2, y - 35)
        line(x + p2, y - 35, x + p3, y - 44)
    }
    
    drawBody(x, y, isFlipped)
    sideEyes(x, y, isFlipped)
    sideMouth(x, y, isFlipped)
    
     push()
    strokeWeight(1.8)    
    stroke(82, 129, 54); // dark green
    fill(0, 0,255);
    
    hand(x, y, isFlipped)
    leg(x, y, isFlipped)
   
    pop()
    
}