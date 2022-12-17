function drawCollactable(x, y, size) {
	const center = {
		x: x - size / 2 - 5,
		y: y - size / 2 - 5, 
	}
	push()
	fill(240,220,0);   
	// ellipse(400, 400, 20, 50)
	ellipse(center.x, center.y, size - size/3, size)
	fill(255,255,0);   
	ellipse(center.x, center.y, size / 2 , size / 1.5);
	strokeWeight(size / 8);
	stroke(240,220,0); 
	line(center.x - size / 4, center.y, center.x + size / 4, center.y);
	// strokeWeight(0);
	pop()
}