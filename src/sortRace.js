//CS335-02 Project 2 Sort Race - Team YZJ
//Authors: 
//	Youssef Chahine	- ykchahine@csu.fullerton.edu
//	Zach Hofmeister	- zachhof@csu.fullerton.edu
//	Jonathan Hana	- hanaj97@csu.fullerton.edu
//File Name: sortRace.js
//File Description: The source code and algorithms of the sortRace program.

var g_canvas = { cell_size:14, wid:74, hgt:48 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 3; // Update every 'mod' frames.
var g_stop = 0; // Go by default.

var g_algoSS = {col:2, passNum:0, color:"red", str:"1FAB3D47905FC286", unsortedIndex:0}
var g_algoGP = {col:20, passNum:0, color:"yellow", str:"0123456789ABCDEF"}
var g_algoMS = {col:38, passNum:0, color:"green", str:"0123456789ABCDEF"}
var g_algoQS = {col:56, passNum:0, color:"blue", str:"0123456789ABCDEF", left:0, right:15}

var inputs = ["05CA62A7BC2B6F03","065DE66B71F040BA","0684FB89C3D5754E","07C9A2D18D3E4B65","09F48E7862ED2616","1FAB3D47905FC286","286E1AD0342D7859","30E530BC4786AF21","328DE47C65C10BA9","34F2756FD18E90BA","90BA34F07E56F180","D7859286E2FD0342"];
var width;
var height;

function setup() { // P5 Setup Fcn
    var sz = g_canvas.cell_size;
    width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
	background("#000"); // set canvas to black
	textSize(sz);
	fill("#FFF");
	text("Selection Sort", g_canvas.cell_size * g_algoSS.col, 20);
	text("Gold's Pore Sort", g_canvas.cell_size * g_algoGP.col, 20);
	text("Mergesort", g_canvas.cell_size * g_algoMS.col, 20);
	text("Quicksort", g_canvas.cell_size * g_algoQS.col, 20);
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
	selecSortOnce(g_algoSS);
	drawString(g_algoSS);
	++g_algoSS.passNum;
	//Gold's Pore Sort
	goldsPoreOnce(g_algoGP);
	drawString(g_algoGP);
	++g_algoGP.passNum;
	//Merge Sort
	mergeSortOnce(g_algoMS);
	drawString(g_algoMS);
	++g_algoMS.passNum;
	//Quick Sort
	quickSortOnce(g_algoQS);
	drawString(g_algoQS);
	++g_algoQS.passNum;
}

function selecSortOnce(ssObject) { //One pass for the selection sort algorithm
	//Find minimum
	let sorted = isSorted(ssObject.str);
	
	if (!sorted) {
		var startingString = ssObject.str;
		var min = ssObject.unsortedIndex;

		for (var j = min+1; j < 16; ++j) {
			// console.log(ssObject.str[j], ssObject.str[min], parseInt(ssObject.str[j], 16) < parseInt(ssObject.str[min], 16));
			if (parseInt(ssObject.str[j], 16) < parseInt(ssObject.str[min], 16)) {
				min = j;
			}
		}
	
		//Swap minimum element with the first element
		var temp = ssObject.str[min]; //For first pass: temp = 0
		ssObject.str = replaceChar(ssObject.str, min, ssObject.str[ssObject.unsortedIndex]); //at 0's spot, put the 1
		ssObject.str = replaceChar(ssObject.str, ssObject.unsortedIndex, temp); //at 1's spot (the front), put the 0
		++ssObject.unsortedIndex;
	} else {
		ssObject.color = "white";
	}

	return sorted;
}

function goldsPoreOnce(gpObject) { //One pass for the gold's pore sorting algorithm
	return "0123456789ABCDEF";
}

function mergeSortOnce(msObject) { //One pass for the merge sort algorithm
	return "0123456789ABCDEF";
}

function quickSortOnce(qsObject) { //One pass for the quick sort algorithm
	qsObject.str
	return "0123456789ABCDEF";
}

function replaceChar(str, index, char) {
	return str.substr(0,index) + char + str.substr(index+1);
}

function isSorted(str) {
	let sorted = true;
	// console.log(str + " " + str.length);
	for (let i = 0; i < str.length - 1; ++i) {
		if (parseInt(str[i], 16) > parseInt(str[i+1], 16)) {
			// console.log("index: " + i + "i: " + parseInt(str[i], 16) + "    i+1: " + parseInt(str[i+1], 16));
			sorted = false;
			break;
		}
	}
	return sorted;
}

// function quickSort(arr, left, right)
function drawString(algoObject) {
	// var currentColor = color(random(0, 255), random(0,255), random(0,255));
	// Uncomment the following to display pass number
	// let x = algoObject.col - 1.5;
	// let y = (algoObject.passNum % (g_canvas.hgt - 2)) + 2; //0 - 62
	// drawCell(x, y, "#000", algoObject.passNum, "#fff");
	for (var i = 0; i < 16; ++i) {
		let x = algoObject.col + i;
		let y = (algoObject.passNum % (g_canvas.hgt - 2)) + 2; //0 - 62
		// console.log("SS: " + x + " " + y);
		drawCell(x, y, algoObject.color, algoObject.str[i], "#000");
	}
}

function drawCell(x, y, cellColor, char, charColor) {
	let sz = g_canvas.cell_size;
    let rectX = 1+ x*sz; // Set x one pixel inside the sz-by-sz cell.
    let rectY = 1+ y*sz;

	fill(cellColor);
	rect(rectX, rectY, sz, sz);
	
	textAlign(CENTER, CENTER);
	fill(charColor);
	text(char, rectX + (sz / 2), rectY + (sz / 2) + 2);
}

function keyPressed() {
	// console.log(`keyPressed: ${keyCode}`);
    if (keyCode == 32) g_stop = !g_stop; //Spacebar pause
}