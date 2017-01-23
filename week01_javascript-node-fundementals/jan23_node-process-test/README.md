<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Running and Testing a Node Process
===

## Questions to Ponder...

* What is an app?
* What is a process?
* What were you calling when you made an AJAX "call"?
* What is a server?

### OS/CPU/Process

* [Operating System](https://drawings.jvns.ca/os-responsibilities/)
* [User space vs kernal space](https://drawings.jvns.ca/userspace/)
* [Memory space](https://drawings.jvns.ca/pagetable/)
* [CPU Time](https://drawings.jvns.ca/scheduling/)
* [Threads](https://drawings.jvns.ca/threads/)
* [Process](https://drawings.jvns.ca/process/)
* [Signals](https://drawings.jvns.ca/signals/)

### Demo

* Activity Monitor
* `kill`
* `node index.js`

## Node.js

* Single threaded!

### JavaScript

* Let's use ES6!

### [Globals](https://nodejs.org/api/globals.html) 
* `require`
* [`process`](https://nodejs.org/api/process.html#process_process)
    * `argv`
    * `stdout`

### Built-in modules
* [`child_process`](https://nodejs.org/api/child_process.html)
* [`assert`](https://nodejs.org/api/assert.html)

## Testing and TDD

Testing is verification that something works, "checking"

TDD is a development process that utilizes testing as part of the process

Why TDD?

Cycle:
    * Red - Write a failing test
    * Green - Make in pass with simpliest possible code
    * Refactor - Improve code without changing functionality

### Demo

1. TDD Greeting Console app
1. Debugging Node with VSCode
1. Introduce `mocha` and `assert`

## Review Lab Assignment

## Advanced JavaScript

What's in our JS Toolkit?

### Execution/Runtime

#### Control Flow

Modify and adapt the path of the code execution

Control keywords:

* `if` and `else`
* `for`, `while`, (and rarely `do`)
* `switch` and `case`
* `function`???

#### Variables

Share data:
* Store for reuse/later
* Share intent through naming

What kind of data can we share?
* Primatives
    * Numbers, dates, booleans, strings (let's pretend)
* References (to Objects)
    * Object (`{}`, `new ConstructorFunction()`)
    * Array (`[]`)
    * Other JavaScript built in objects like `Set` and `Map`
    * Functions

#### Functions

* Functions are all about sharing behavior.
* In JavaScript, `function` (definitions) are objects and can be passed around and shared.
* Adding parenthesis `myFunction()` "calls" or "invokes" or "executes" the function with the
supplied arguments.
* The place (in the code) where a function is called is called the "call site"
* Code inside the function is only run when the function is called.
* Functions are sometimes called methods, particularly when called as a property of an object:
    ```
    someObj.greet();
    ```






