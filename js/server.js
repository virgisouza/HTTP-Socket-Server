const net = require('net');
const fs = require('fs');


const server = net.createServer((client) => {

  client.on('data', (data) => {
    console.log('connected to server');
    const dataString = data.toString();

    const uri = dataString.split(' ')[1];


    if( uri === '/'){
      fs.readFile('../html/index.html', (err, data) => {
        if (err) throw err;
          console.log(data.toString());
      })
    };

    if(uri === '/index.html' ){
      fs.readFile('../html/index.html', (err, data) => {
        if (err) throw err;
          console.log(data.toString());
      })
    };

    if(uri === '/hydrogen.html' ){
      fs.readFile('../html/hydrogen.html', (err, data) => {
        if (err) throw err;
          console.log(data.toString());
      })
    };

    if( uri === '/helium.html'){
      fs.readFile('../html/helium.html', (err, data) => {
        if (err) throw err;
          console.log(data.toString());
      })
    };

    if( uri === '/styles.css'){
      fs.readFile('../css/styles.css', (err, data) => {
        if (err) throw err;
          console.log(data.toString());
      })
    };

    client.end();
  });

  client.on('end', () => {
    console.log('socket ended');
  });

  client.on('error', (err) => {
    throw err
  });

});



server.listen(8080,  () => {});

server.on('connection', (c) => {});





// {
//       'GET/ index.html HTTP / 1.1\r\n'
//       'Host': 'www.alvin.com\r\n'
//       'Connection' : 'Keep-Alive\r\n'
//       'Content-type' : 'text/plain\r\n'
//     }



//Goals:
//transmit hardcoded, in-memory html body for each route
//term connection
//if path not found, return 404

/////////////////////////////////////////////////////

//http server example
// http.createServer(function (request, response) {
//   response.writeHead(200, {'POST': 'HTTP/1.1\n', 'Host': 'www.alvin.com\n','Connection' : 'Keep-Alive\n', 'Content-type' : 'text/plain\n'});
//   response.write('Hello Client , From your server');
//   response.end();
// }).listen(8080)