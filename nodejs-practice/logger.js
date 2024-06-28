let url = "http://braveflamingdog.com"

function log(message){
    // send a HTTP request
    console.log(message);
}

module.exports.endpoint = url;
module.exports.log = log;

console.log(module);