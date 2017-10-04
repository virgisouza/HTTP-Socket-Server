const net = require('net');
const fs = require('fs');
const PORT = process.env.PORT || 8080;
const client = new net.Socket();

client.connect(PORT, () => {
  console.log('Connected');
  let target = process.stdin.pipe( client );
  client.pipe( process.stdout );


  client.on('data', (data) => {
    let responseHeaders = {};

    function receiveHeaders(target, data) {
      fs.readFile(target, (err, data) => {
        if(err){
          throw err;
        }else{
          console.log(target)
          //push data into hash table responseHeaders
        }
      });
    };

  })




  function date() {
    var d = new Date();
    var n = d.toUTCString();
    return n;
  };

  client.write('data', (data) => {
    //const dataString = data.toString();

    function giveBack(target) {
      let header = `POST ${target} HTTP/1.1\r\nDate : ${date()}\r\nHost: www.alvin.com\r\nUser-Agent: me`;
      console.log(header)

    };


  });

  // client.end();

  client.on('close', function() {
    console.log('Connection closed');
  });

  client.on('error', (err) => {
    throw err;
  });

});



