var Promise = require('bluebird');
var fs = require('fs');
var path = require('path');

var executors = {};

var execute = function (command){
    if(!executors[command.action])
        throw "Executor not found, verify if the action of this command is declared: " + command.action;

    var executor = executors[command.action];

    try {
        var result = executor.execute(command);
    } catch(error) {
        return Promise.reject(error);
    }

    var isPromise = result != null && result['then'] != null;
    return isPromise? result : Promise.resolve(result);
}

var scan = function (currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function(name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && ((filePath.toString().indexOf("Executor.js") > 0))) {
            callback(filePath);
        } else if (stat.isDirectory()) {
            scan(filePath, callback);
        }
    });
}

var setExecutorsMap = function(filePath){
    var executorQualifiedName = path.relative(__dirname, filePath.toString());
    var executor = require("./"+executorQualifiedName);
    executors[executor.action] = executor;
}

scan(__dirname, setExecutorsMap);

module.exports = execute;