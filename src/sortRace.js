//CS335-02 Project 2 Sort Race - Team YZJ
//Authors: 
//	Youssef Chahine	- ykchahine@csu.fullerton.edu
//	Zach Hofmeister	- zachhof@csu.fullerton.edu
//	Jonathan Hana	- hanaj97@csu.fullerton.edu
//File Name: sortRace.js
//File Description: The source code and algorithms of the sortRace program.

var g_canvas = { cell_size:14, wid:70, hgt:48 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 1; // Update every 'mod' frames.
var g_stop = 0; // Go by default.

var g_algoSS = {col:0, passNum:0, color:"red"}
var g_algoGP = {col:18, passNum:0, color:"yellow"}
var g_algoMS = {col:36, passNum:0, color:"green"}
var g_algoQS = {col:54, passNum:0, color:"blue"}

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
	var currentColor = color(random(0, 255), random(0,255), random(0,255));
	for (var i = 0; i < 16; ++i) {
		let x = g_algoSS.col + i;
		let y = (g_algoSS.passNum % (g_canvas.hgt - 2)) + 2; //0 - 62
		// console.log("SS: " + x + " " + y);
		drawCell(x, y, currentColor);
	}
	++g_algoSS.passNum;
	//Gold's Pore Sort
	currentColor = color(random(0, 255), random(0,255), random(0,255));
	for (var i = 0; i < 16; ++i) {
		let x = g_algoGP.col + i;
		let y = (g_algoGP.passNum % (g_canvas.hgt - 2)) + 2; //1 - 63
		drawCell(x, y, currentColor);
	}
	++g_algoGP.passNum;
	//Merge Sort
	currentColor = color(random(0, 255), random(0,255), random(0,255));
	for (var i = 0; i < 16; ++i) {
		let x = g_algoMS.col + i;
		let y = (g_algoMS.passNum % (g_canvas.hgt - 2)) + 2; //1 - 63
		drawCell(x, y, currentColor);
	}
	++g_algoMS.passNum;
	//Quick Sort
	currentColor = color(random(0, 255), random(0,255), random(0,255));
	for (var i = 0; i < 16; ++i) {
		let x = g_algoQS.col + i;
		let y = (g_algoQS.passNum % (g_canvas.hgt - 2)) + 2; //1 - 63
		drawCell(x, y, currentColor);
	}
	++g_algoQS.passNum;
}

function drawCell(x, y, color) {
	let sz = g_canvas.cell_size;
    let rectX = 1+ x*sz; // Set x one pixel inside the sz-by-sz cell.
    let rectY = 1+ y*sz;

	fill(color);
	rect(rectX, rectY, sz, sz);
}

function keyPressed() {
	// console.log(`keyPressed: ${keyCode}`);
    if (keyCode == 32) g_stop = !g_stop; //Spacebar pause
}