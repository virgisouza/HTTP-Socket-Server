const net = require('net');
const fs = require('fs');
const path = require('path');


const server = net.createServer((socket) => {

  socket.on('data', (data) => {
    console.log('connected to server');
    const dataString = data.toString();
    const uri = dataString.split(' ')[1];


  function buildBodyandHeader(target, path) {
     let header = 'GET/ index.html HTTP / 1.1\r\nServer : www.alvin.com\r\nDate : Tue, 03 Oct 2017 22:17:07 GMT';

     if( uri === target){
        fs.readFile(path, (err, data) => {
          if (err){
            throw err;
            //console log err returns 'null'
          }else{
            return header + '\n\n' + data.toString();
            console.log(header + '\n\n' + data.toString());
          };

        });
    };
    socket.end();
  };

buildBodyandHeader('/helium.html', '../html/helium.html');


  socket.on('end', () => {
    console.log('socket ended');
  });

  socket.on('error', (err) => {
    throw err
  });

  });
});

server.listen(8080,  () => {});


////////////////////////////////////////////////////

//let response = ' ';

// read(element, (fileContent) => {
//   response += fileContents;
//   socket.write(response, (err) => {
//     socket.end()
//   })
// })

  // let buildHeader = function (statusCode, server) {

  //   function date(){
  //     var d = new Date();
  //     var n = d.toUTCString();
  //     return n;
  //   }

  //   function host(server) {
  //     return server;
  //   }

  //   function status(statusCode) {
  //     return statusCode;
  //   }


  //   return {
  //     date : date,
  //     host : host,
  //     status : status
  //   }
  // }

  // console.log(Object.values(buildHeader('200 OK', 'www.alvin.com')));

//server.on('connection', (c) => {});

   // if( uri === '/'){
    //   fs.readFile('../html/index.html', (err, data) => {
    //     if (err) throw err;
    //       console.log(data.toString());
    //   })
    // };

    // if(uri === '/index.html' ){
    //   fs.readFile('../html/index.html', (err, data) => {
    //     if (err) throw err;
    //       console.log(data.toString());
    //   })
    // };

    // if(uri === '/hydrogen.html' ){
    //   fs.readFile('../html/hydrogen.html', (err, data) => {
    //     if (err) throw err;
    //       console.log(data.toString());
    //   })
    // };

    // if( uri === '/helium.html'){
    //   fs.readFile('../html/helium.html', (err, data) => {
    //     if (err) throw err;
    //       console.log(data.toString());
    //   })
    // };

    // if( uri === '/styles.css'){
    //   fs.readFile('../css/styles.css', (err, data) => {
    //     if (err) throw err;
    //       console.log(data.toString());
    //   })
    // };