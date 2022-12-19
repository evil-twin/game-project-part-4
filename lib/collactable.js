function drawCollactable(x, y) {

	const center = {
		x,
		y: y - 18, 
	}	

	push()

	fill(240,220,0);   
	ellipse(center.x, center.y, 20, 30)
	fill(255,255,0);   
	ellipse(center.x, center.y, 15 , 20);
	strokeWeight(3);
	stroke(240,220,0); 
	line(center.x - 8, center.y, center.x + 8, center.y);
	pop()
}