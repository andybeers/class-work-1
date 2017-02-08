<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> HTTP and REST
===

## Questions and Issues?

* `.travis.yml` for installing mongodb:

```
language: node_js
node_js:
  - "6"
  
services:
  - mongodb
```

## Today's Learning Objectives

* Code models that correspond to logic business entities 
(aka resources, aka domain logic) _using mongoose_.* 
* Code an express Router that expose CRUD operations against 
the mongoose models as a set of callable REST API endpoints.
* Correctly order app routes and multi-function routes by 
knowing how middleware "flows"
* Use the next() function to 
	* Selectively apply common app logic like authentication and authorization
	* Introduce custom properties on the request object

## Agenda

### Schemas
* Why?
	* Demo: garbage in/garbage out
* Connecting with Mongoose
* Schemas
	* Defining “Properties”
		* Types and property options
	* Schema Options
		* timestamp
		* required
		* validation...
* Models
	* schema => model
	* "service"
	* Consuming models in routes
		* Static model methods (`Model.findOne()`)
		* instance models (`model.save()`)
* Testing models
	* `validate`

### Middleware
* What is it?
	* Ambiguous based on broad history
	* Larger architectural meaning - middle between API and db
	* In Express, in the “middle” between request and response
	* Sometimes is just basic "handler" function
	* Middleware is flow to find one or more handlers
* Middleware “Functions”
	* `(req, res, next) => {}`
* Mounting middleware
	* `app.use`
	* `app.METHOD` are "short cuts" for `app.use`
	* Multiple handlers: `app.use(handler1, handler2, handler3)`
	* Branches: `express.Router`
* `express.Router`
	* Extract routes from main app.js
	* Leverage mounting path in app.use
	* Routers are nestable
* Middleware error handling
* [Additional info here](https://github.com/martypdx/workshop-express-middleware)

### Project Structure

Modularize routes (aka don't use one huge app.js file!)

```
|- lib
  |- models
    o pet.js
    o store.js
  |- routes
    o auth.js
    o pets.js
    o stores.js
  o app.js
o server.js
```
	 
