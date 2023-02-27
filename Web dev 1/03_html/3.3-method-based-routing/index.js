const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {
  if (request.method == 'GET') {
    readFileSendResponse('get.html', 'text/html', response);
    } else if (request.method == 'POST') {
        readFileSendResponse('post.html', 'text/html', response);
    } else {
    response.statusCode = 405;
    response.writeHead(405, {'Allow':'GET, POST'});
    response.end();
  }
}).listen(3000);

const readFileSendResponse = (fileName, contentType, response) => {
    fs.readFile(path.resolve(fileName), function(error, file) {
      if (error) {
        response.writeHead(405, {'Allow':'GET, POST'});
        response.write('An error occured: ', error);
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.write(file);
      }
      response.end();
    })
  }