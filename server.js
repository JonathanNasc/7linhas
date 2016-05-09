#!/bin/env node
//  7linhas node server
var express  = require('express');
var execute = require('./app/execute');

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
     *  Initialize the server (express) and create the routes.
     */
    self.initializeServer = function() {
        //
        self.app = express();

        // Enable the front-end page
        self.app.use('/', express.static('web'));

        // Enable Galleon
        self.app.use('/galleon', express.static('galleon'));

        // Test Alisson JSON
        self.app.get('/alisson', function(req, res) {
            res.json({mensagem:"JSON rima com alisSON"});
        })

        // Wake Up method
        self.app.get('/wake-up', function(req, res) {
            execute({action:'wake-up'}).then(function (response) {res.send(response)})
        })

        // Route for commands with a expecific action
        self.app.post('/execute', function(req, res) {
            execute(req.query).then(function (response) {res.json(response)})
        })
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

var serverApp = new ServerApp();
serverApp.start();