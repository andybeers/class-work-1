<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30>Webpack and SCSS
===

## Agenda

* What's in a build system?
* Webpack and Webpack Dev Server
	* From Scratch
	* Compare to `eject` from `create-react-app`
* Adding SCSS...

## Core Build System, "Boilerplate" project
* stuff to get you up and running
* [boilerplate projects](http://zerosixthree.se/create-your-own-personal-boilerplate/)
* See ["JavaScript fatigue"](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=javascript+fatigue)
* What do we need for FullStack JS?
* Basic node project (both server and app)
	* source control
	* linting
	* testing
	* running
	* `npm`
		* dependency management
		* scripts
	* environment
* server
	* node project
	* testing - `mocha`, `chai`, `chai-http` (`superagent`)
	* running
		* `server.js`
		* `lib`
* app
	* node project
		* `npm init` for `package.json`
	* running - `webpack`
		* `webpack.config.js`
	* testing - `jest`
	* running (actual code to run) `src`
* repo (Travis CI)
	* run both sub-folder projects
	* Or use two repos

## Webpack and Webpack Dev Server

Code Along:
* `> mkdir my-project && cd my-project`
* `> npm init`
* `> npm i webpack -D`
* `> touch webpack.config.js`
* `> mkdir src`
* `> touch src/index.js`

1. Webpack build
    * WHY? 
        * Enable us to code in node require system
        * Bundle all into one file - easier to manage 
    * use a `src` folder
    * bundle.js
        * entry point(s)
        * output
    * npm modules
2. preloaders (and loaders)
    * WHY?
        * Make sure things have been linted
    * eslint
3. Webpack dev server
    * WHY? Live reload
    * plugins
    * "live reload"
5. Loaders
    * WHY?
        * Transform the assets being required
    * css
    * babel
        * ES6 (and beyond!) language features
        * ES6 module syntax
            * import/export
            * named exports
            * static bindings (fyi)
4. Plugins
    * WHY? 
        * Some assets aren't "require"d, but we want to include in output
        * dev server can now know about index.html
        * puts in script tag for us
    * HtmlWebpackPlugin



## SCSS

* Goals for CSS
    * DRY CSS
    * Non-global
    * Modularity FTW!
* [CSS Methodology](http://getbem.com/introduction/)
    * Organize by “type” of css
    * SMACSS
        * base, layout, module, state, theme
    * BEM
        * Block Element Modifier
    * Atomic
        * Tiny pieces reassembled
    * Somewhat obsolete if component “scoping” used.
* [SASS](http://sass-lang.com/)
    * Technically SCSS
    * We'll be using webpack
    * Use “:local” function of css loader to scope component
    * Nested CSS
    * Split files (`_partials`/`@import`)
    * Share includes in main scss and component scss
    * Also:
        * Variables
        * `mixins`/`@include`
        * Functions
        * Extend