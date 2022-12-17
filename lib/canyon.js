function drawCanyon(canyonX, canyonY, canyonWidth, canyonHeight) {
	push()
	background
	fill(100, 155, 255);

	rect(canyonX, canyonHeight, canyonWidth, canyonHeight);
	
	// rocks
	fill(100, 50, 0);
	rect(canyonX, canyonY - 10, canyonWidth, 10);
	triangle(
		canyonX, canyonY - 36,
		canyonX + 20, canyonY,
		canyonX, canyonY
	)
	triangle(
		canyonX + canyonWidth, canyonY - 36,
		canyonX + canyonWidth - 20, canyonY,
		canyonX + canyonWidth, canyonY
	)
	rect(canyonX, canyonHeight, 3, canyonHeight);
	rect(canyonX + canyonWidth - 3, canyonHeight, 3, canyonHeight);
	pop()
}