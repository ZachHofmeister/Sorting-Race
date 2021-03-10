//CS335-02 Project 2 Sort Race - Team YZJ
//Authors: 
//	Youssef Chahine	- ykchahine@csu.fullerton.edu
//	Zach Hofmeister	- zachhof@csu.fullerton.edu
//	Jonathan Hana	- hanaj97@csu.fullerton.edu
//File Name: sortRace.js
//File Description: The source code and algorithms of the sortRace program.

var g_canvas = { cell_size:14, wid:70, hgt:48 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 3; // Update every 'mod' frames.
var g_stop = 0; // Go by default.

var g_algoSS = {col:0, passNum:0, color:"red", string:"0123456789ABCDEF"}
var g_algoGP = {col:18, passNum:0, color:"yellow", string:"0123456789ABCDEF"}
var g_algoMS = {col:36, passNum:0, color:"green", string:"0123456789ABCDEF"}
var g_algoQS = {col:54, passNum:0, color:"blue", string:"0123456789ABCDEF"}

var width;
var height;

function setup() { // P5 Setup Fcn
    var sz = g_canvas.cell_size;
    width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
	background("#000"); // set canvas to black
}

function draw() { // P5 Frame Re-draw Fcn, Called for Every Frame.	
    ++g_frame_cnt;
	// //The following two lines give output similar to the first 30 moves example txt. MAKE SURE iterations and g_frame_mod both = 1
	// // let tempState = get_state(g_bot.x, g_bot.y);
	// // console.log(` #${g_frame_cnt} {p=${g_bot.x},${g_bot.y} d=${g_bot.dir} m=${g_bot.mode} i=${g_bot.counter}}; {c=${tempState[0]} t=${tempState[1]}}`);

    if (0 == g_frame_cnt % g_frame_mod) {
        if (!g_stop) pass();
    }
}

function pass() {
	//Selection Sort
	drawString(g_algoSS);
	g_algoSS.string = selecSortOnce(g_algoSS.string);
	++g_algoSS.passNum;
	//Gold's Pore Sort
	drawString(g_algoGP);
	g_algoGP.string = goldsPoreOnce(g_algoGP.string);
	++g_algoGP.passNum;
	//Merge Sort
	drawString(g_algoMS);
	g_algoMS.string = mergeSortOnce(g_algoMS.string);
	++g_algoMS.passNum;
	//Quick Sort
	drawString(g_algoQS);
	g_algoQS.string = quickSortOnce(g_algoQS.string);
	++g_algoQS.passNum;
}

function selecSortOnce(str) { //One pass for the selection sort algorithm
	return "0123456789ABCDEF"; //return the outcome from the pass

	// Note: parseInt(char, 16) can be used to get the numerical value of a hex character '1'-'F' => 0-15
}

function goldsPoreOnce(str) { //One pass for the gold's pore sorting algorithm
	return "0123456789ABCDEF";
}

function mergeSortOnce(str) { //One pass for the merge sort algorithm
	return "0123456789ABCDEF";
}

function quickSortOnce(str) { //One pass for the quick sort algorithm
	return "0123456789ABCDEF";
}

function drawString(algoObject) {
	var currentColor = color(random(0, 255), random(0,255), random(0,255));
	// var currentColor = "white";
	for (var i = 0; i < 16; ++i) {
		let x = algoObject.col + i;
		let y = (algoObject.passNum % (g_canvas.hgt - 2)) + 2; //0 - 62
		// console.log("SS: " + x + " " + y);
		drawCell(x, y, currentColor, algoObject.string[i]);
	}
}

function drawCell(x, y, color, char) {
	let sz = g_canvas.cell_size;
    let rectX = 1+ x*sz; // Set x one pixel inside the sz-by-sz cell.
    let rectY = 1+ y*sz;

	fill(color);
	rect(rectX, rectY, sz, sz);
	textSize(sz);
	textAlign(CENTER, CENTER);
	fill("#000");
	text(char, rectX + (sz / 2), rectY + (sz / 2) + 2);
}

function keyPressed() {
	// console.log(`keyPressed: ${keyCode}`);
    if (keyCode == 32) g_stop = !g_stop; //Spacebar pause
}