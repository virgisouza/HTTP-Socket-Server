const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {

  socket.on('data', (data) => {
    console.log('connected to server');
    const dataString = data.toString();
    const uri = dataString.split(' ')[1];

    function date() {
      var d = new Date();
      var n = d.toUTCString();
      return n;
    }

    function buildBodyandHeader(target, path) {

     if( uri === target){
        fs.readFile(path, 'utf8', (err, data) => {
          if (err){
            throw err;
            //console log err returns 'null'
          }else{
            let header = `HTTP/1.1 200 OK\nServer: nginx/1.4.6 (Ubuntu)\nDate: ${date()}\nContent-Type: text/html; charset=utf-8\nContent-Length: ${data.length}\nConnection: keep-alive`;
            socket.write(header + '\n\n' + data, () => {
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





