<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30>Asynchronous programming (fs database)
===

## Issues and Questions
* Questions from material and lab?

## ES6

* Arrow Functions (aka fat arrows: `=>`)

## Learning Objectives

* Asynchronous programming
    * Node.js callback pattern
    * Orchestration
    * Error Propagation
* Write asynchronous tests using the Mocha `done` parameter/argument
* Basic Filesystem I/O using fs built-in Node.js module
* Understand the difference between an in-memory object and its 
serialized representation and be able to move between the two formats by using:
	* JavaScript JSON to stringify and parse objects to strings

## Agenda

### Asynchronous Programing

* What is it?
* Node Event Loop
    * Basic node architecture 101
    * v8 + event-loop + os-lib
    * Process - OS manage computation time
    * Thread - actual "thread of execuation"
    * Event loop explained
    * JavaScript single threaded event model
* Demo: `event-loop.js`

### Passing functions in javascript

* Closures
    * variable is stored
    * Demo: Show function in debugger
    * Asynchronous: variable is a pointer to a values
        * Demo: `for` loop with `setTimeout`

* Types of Functions
    * function definition
    * function expression
    * (named function)
    * [arrows functions](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/fat-arrows.md)

* [Three function passing patterns](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/async-js-patterns.md) 
* Async pattern can use:
    * callbacks
    * promises
    * async/await ([ES2017](https://github.com/tc39/proposals/blob/master/finished-proposals.md))
* Review node event loop
* How do we
	* return values?
	* Propagate errors?
* Node callback pattern `callback(err, result)`
* Some hardfast rules:
    1. You can't create asynchronicity with just js
    2. If your building functionality ontop of asychronous API's, 
    then your library must be asynchronous!
* Demo
	* Mocha `done`
		* test parameter
		* Tests function.length
		* if > 0, test is async
		* calling done with any non-null argument is failure (matches node callback signature)
	* and node `fs` module
	* Demo: Test drive "get files from directory"
    * Mocha `before` and friends
    * Demo: Write `index.txt`
* Orchestration?
	* Sequential
	* Parallel
		* Async order is "completion" based