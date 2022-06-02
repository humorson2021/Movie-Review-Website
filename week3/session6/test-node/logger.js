//this is a module created by self

let version = 2.6;
function log() {
    console.log("logged successfully");
}

//module.exports.version = version;
//module.exports.log = log;

module.exports = {
    log: log,
    version: version
}

//shortcut:
//exports.log = log;
//...


//console.log(module);