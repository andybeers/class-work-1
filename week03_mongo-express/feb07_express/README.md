<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> HTTP and REST
===

## Questions and Issues?

* ???

## 1-on-1's

* Signups: https://marty-401.youcanbook.me/

## Today's Learning Objectives

* Setup app routing _with ExpressJS_ correctly using 
route matching, parameters, and order of routes
* “Starting” an express app, 
	* just _httpServer_, ie .listen() vs 
	* http.createServer(app)
* Serve static assets using `express.static`

Later this week:
* Server serve rendered pages using ~~`jade`~~ `pug` and `render.view`

## Overview

### ExpressJS

* routing
	* method based functions (`app.get`)
	* response.send
	* regex
	* order
	* parameters (route and query)
		* request
	* `app.use()`
* static files
* rendered views
* project structure
	* don't use one huge app.js file!
	* views, routes, static
	* express generator
	* `express.Router()` (tomorrow)

### Mongoose (basic intro)
* Mongoose Schemas
	* Defining “Properties”
		* Types and property options
	* Schema Options
		* timestamp
		* required
		* validation...
	* Testing models
* Consuming models in routes
	* Static model methods (`Model.findOne()`)
	* instance models (`model.save()`)
* Testing mongodb
	* Running test server for use in e2e testing
	* Preparing resources for testing