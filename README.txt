CPSC 335-02 Project 2 - Sort Race

Members: Zach Hofmeister, Youssef Chahine, Jonathan Hana

Intro

	This project is a sort racing program between 4 algorithms: Selection Sort, Quick Sort, Merge Sort, and Gold's Pore Sort.
	The goal for this project is to display each algorithm, side-by-side, sorting a selected string, including rotations of the string after a full pass.
	This is done by running through an algorithm, a single pass, displaying the result of the pass, then moving onto the next algorithm. The cycle continues.
	When a string is sorted, it will show the entire row of the relative pass as the same color, where as unsorted passes will have different lighting values of the color it shares.
	
	You can select a different input string with the left and right arrow keys. This will choose an input string that's adjacent to the current string with the "inputs" array.
	
	This is designed to run on your browser, so there is no need to install any programs for it to work.
	To get started, just double-click the "sortRace.html" file for it to run on your browser; you can also drag-and-drop it onto your browser.
	You also do not need to worry about building it, it will simply just run after any code changes.
	You do however need to refresh the page if you make any code changes while the page is open, in order to see active changes.

Selection Sort:
- Rough running time: T(N) = 4 + 5n + 5
-- 4 for algorithm setup (4 fields in g_algoSS).
-- 5n for looping (5 for assigning variable "min" per loop).
-- additional 5 for comparisons, assignments, and swapping.
- Converted to Big-O: T(N) = O(n)
- T(N) does not consider time taken for parseInt.

Gold's Pore Sort:
- Rough running time: T(N) = 3N + 7
-- 4 for algorithm setup (4 fields in g_algoGP).
-- 2N+1 for sorted() function call and comparison
-- N for the for loop, N/2 elements each loop running two comparisons / statements
-- additional 2 for assignments.
- Converted to Big-O: T(N) = O(n)

Merge Sort:
- Rough running time: T(N) = 3N + 2LogN + 16
-- 5 for algorithm setup (5 fields in g_algoMS).
-- 2N+1 for sorted() function call and comparison
-- 1+N (Worst-case) for comparison and first for loop with assignment.
-- 2LogN + 4 for second for loop.
-- 5 for additional comparison, assignment, and swapping calls.
- Converted to Big-O: T(N) = O(n)
- Rather than doing a concatination for each pass, which would result in an unknown time required to concatanate the string, a secondary variable is used "partitionS" to store the pass string, which would be O(1).

Quick Sort:
- Rough running time: T(N) = 5N + 26
-- 8 for algorithm setup (8 fields in g_algoQS).
-- 2N+2 for sorted() function call and comparisons
-- 3N (Worst-case) for first for loop with 3 comparisons, assignments, and swapping.
-- 16 for additional comparison, assignment, and swapping calls.
- Converted to Big-O: T(N) = O(n)


Zip Contents

	README.txt - This file.
	
	src/p5.js - The library file used for drawing.
	
	src/sortRace.html - The file for running the program (on your browser).
	
	src/sortRace.js - The JavaScript file that contains the code necessary for sortRace.html to display.
	
Bugs

	There are currently no known bugs found with the algorithm.

