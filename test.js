const http = require('http');

var cors_url = 'http://localhost:8888';
// http://localhost:8888/https://www.instagram.com/

var url = 'https://www.instagram.com/';
url = 'https://www.google.com';

http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
    console.log('req', req);

    console.log('res', res);
    res.write(res);
    // res.write('hello from server');
    res.end();

}).listen(5000, (r) => {
    console.log('listening in ');
});




