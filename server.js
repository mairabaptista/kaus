//in angular, we import by:
/* import {} from 'somewhere'; */
//this is not supported yet, so we import in the usual way:
//const http = require('http'); 

//const port = process.env.PORT || 3000;
//now we need to import app.js
//const app = require('./backend/app');
//app.set('port', port);
//to use app.js as a listener to incoming requests, we pass it on server, instead of req, res
//const server = http.createServer(app);

/*const server = http.createServer((req, res) => {  //req = request, res = response, they're objects
    res.end('This is my first response');
});*/

//server.listen(port);

const app = require("./backend/app");
const debug = require("debug")("node-angular"); 
const http = require("http");

const normalizePort= val => {
    var port = parseInt(val, 10);
    if (isNaN(port)){
        //named pipe
        return val;
    }
    if (port >= 0){
        return port;
    }

    return false;

};

const onError = error => {
    if (error.syscall !== "listen"){
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code){
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);