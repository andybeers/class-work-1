<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Objects, Classes, `this`, Destructure and Spread
===

## Questions and Issues?

* ?

## Plan for the week

Day|Topic
---|---
Monday|JavaScript Object, Classes, Function Context (this), Destructure and Spread
Tuesday|Project Review/Retrospective and Array Methods and ES6 Modules
Wednesday|Intro to Basic React
Thursday|Intro to React Components
Friday|Career Day: Networking

## Today's Learning Objectives

* Object literal shorthand
* `class`
* `this`
* Destructuring and Spread

## Agenda

Try it out: https://babeljs.io/repl/

### Objects
* Literal
	* function shorthand
	> replace `method: function() {}` with `method() {}`

	* getters/setters
	> add `get` and/or `set` in front of method name, and it becomes a
	> property getter or setter:
	> `get name: function() {}`

	* property/variable shorthand
	> If you are assigning a variable to a property of an object literal,
	> and the property should have the same name as the variable, you can omit
	> the `: value` part:
	
	> ```
	> const first = 'jane';
	> const last = 'smith';
	> const person = { first, last }; 
	> // instead of { first: first, last: last }
	> ```

* Destructure
	* Assignment to variable or argument
	* Property: `const { first, last } = person;`
	* Array Index: `const [x, y, z] = [1, 2, 3];
	* Always requires parens `()` in arrow function `=>`

* Defaults
	* `= value`

* Rest and Spread
	* Array to list of values (arguments)
	* list of values (arguments) to array

### `class`

* Prototypical Inheritence
* Props ontop of Props
* Same paradigm as scope
* Favor composition over inheritence
* Useful as container for combined behavior and state (date)
	* Compare Class vs Higher-Order Function
* Useful in API's as construct to build on (React `Component`)

### `this`
* Implicit based on call-site
* Functions
	* Explicit via `bind` and `call` and `apply`
	* Contextless `=>` functions