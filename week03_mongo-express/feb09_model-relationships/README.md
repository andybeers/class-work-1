<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> HTTP and REST
===

## Questions and Issues?

* Schedule:
	* Friday
		* 10-12 (Main area) Resume
		* 1-4 DS&A Trees

## Today's Learning Objectives

* Debug from Mocha test setup in VSCode
* Create tested express middleware

* Create related data models based on 
data usage patterns using mongoose schema options.
* Control json using mongoose `select()`, `populate()`, and `lean()`
* Consolidate business logic in models using static and 
instance mongoose model methods

Probably later:
* Create Express Error Handler

## Agenda

* Express middleware
	* Demo: Logger
	* In-class: Body Parser

* Data Relationships
	* one to one
	* one to many
		* Demo: pet type
	* many to many
* Related Models
	* ObjectId
	* Prefer children referencing parent ids
	* Sub Documents
		* logical Mongoose constructs
	* ObjectId ref’s
* Using mongoose `.select` and `.populate`
* Mongoose document objects
	* Wrapper arround data
	* performance considerations
	* use `.lean()`
* Augmenting Models with methods
	* static
	* instance
