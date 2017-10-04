const net = require('net');
const fs = require('fs');

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
            //console.log(header + '\n\n' + data.toString());
            socket.write(header + '\n\n' + data.toString(), () => {
              socket.end();
            });
          };
        });
      };
    };

    buildBodyandHeader('/', '../html/index.html');
    buildBodyandHeader('/index.html', '../html/index.html');
    buildBodyandHeader('/hydrogen.html', '../html/hydrogen.html');
    buildBodyandHeader('/helium.html','../html/helium.html');
    buildBodyandHeader('/404.html', '../html/404.html');
    buildBodyandHeader('/styles.css','../css/styles.css')


  });

   socket.on('end', () => {
    console.log('socket ended');
  });

  socket.on('error', (err) => {
    throw err
  });
});

server.listen(8080,  () => {});




