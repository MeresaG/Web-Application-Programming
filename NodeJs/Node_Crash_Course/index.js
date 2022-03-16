/*

* @author Meresa G
* @since 2022-3-11

*/

console.log("Starting HttpServer for HelloWorld...");
const http = require(`http`);
const Person = require('./person');

const p1 = new Person("Meresa", 29);
p1.greeting();
//Create HTTPServer 
http.createServer( function(req, res) {

    res.writeHead(200, {
        'content-type' : "text/html"
    });

    res.end("<h1>Hello World</h1>");

}).listen(8000);