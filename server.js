#!/bin/env node
//  7linhas node server
var express  = require('express');
var executor = require('./app/api/executor');

/**
 *  Define the sample application.
 */
var ServerApp = function() {
    var self = this;

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            console.warn('No OPENSHIFT_NODEJS_IP var, using localhost 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };

    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating server app ...', Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };

    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };

    /**
     *  Create the routing entries API Logic is HERE:
     */
    self.createRoutes = function() {
        self.routes = { };

        self.routes['/alisson'] = function(req, res) {
            res.json({mensagem:"JSON rima com alisSON"});
        };
        
        self.routes['/execute'] = function(req, res) {
            res.json(executor.execute(req.query));
        };

    };

    /**
     *  Initialize the server (express) and create the routes and register the handlers.
     */
    self.initializeServer = function() {
        self.createRoutes();
        self.app = express();
        
        // Enable the front-end page
        self.app.use(express.static('web'));
        
        // Enable Galleon
        self.app.use('/galleon', express.static('galleon'));

        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };

    /**
     *  Initializes the server application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.setupTerminationHandlers();
        self.initializeServer();
    };

    /**
     *  Start the server (starts up the server application).
     */
    self.start = function() {
    	self.initialize();
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddress, self.port);
        });
    };
}; 

/**
 *  main():  Main code.
 */
var serverApp = new ServerApp();
serverApp.start();