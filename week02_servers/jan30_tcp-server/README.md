<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> TCP Server
===

## Review
* Asynchronous programming

## Today's Learning Objectives

1. Subscribe to an EventEmitter (event publisher) via function handlers.
1. Write and run and TCP server with Node.js
1. Write E2E Tests for TCP server using the TCP client
1. Write and run a TCP client


### Application Architecture
* Client _(browser, mobile, IoT)_
* Server _(Node.js)_
* Database _(MongoDB)_

### Layers
* [Networking layers](https://drawings.jvns.ca/layers/)
* [Packets](https://drawings.jvns.ca/packet/)
* [DNS](https://drawings.jvns.ca/dns/) (see also https://howdns.works/ep1/)
* [TCP](https://drawings.jvns.ca/tcp-1/)
* [OSI vs TCP/IP Model](http://www.tcpipguide.com/free/diagrams/tcpiplayers.png)
* [OSI Model](http://blog.buildingautomationmonthly.com/wp-content/uploads/2013/05/OSI-Model.png)

### Overview

* Event Emitter pattern
	* Subscribe and use an event emitter
	* DEMO How would we implement a publisher?
    * Streams as event emitters
        * Demo `fs.createReadStream()`
* TCP long-lived streams over sockets
* server
    * EventEmitter for connecting sockets
    * call `listen` to start listening
    * Emits "client sockets"
        * Duplex streams (read and write)
        * event emitter
            * `on`: `data` and `close`
        * `write`
