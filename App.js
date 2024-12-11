// 1st Node.js web server.

const http = require('http');
const port = 3000;

const server = http.createServer(function (request, response) {
    response.write('Hello node');
    response.end();
})

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log(' Server is listening to port' + port);
    }
})
























