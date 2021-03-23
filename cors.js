var cors_proxy = require('cors-anywhere');
// Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '0.0.0.0';
// var host = 'https://gowthamarputharaj.github.io/cors_proxy/';
// // Listen on a specific port via the PORT environment variable
// async function getHost() {
//     var host = await lookup('https://gowthamarputharaj.github.io/cors_proxy');
//     return host;
// }
// var host = getHost();
var host = '0.0.0.0'
var port = 8888;
require('cors-anywhere', (cors_proxy) => {
    cors_proxy.createServer({
        originWhitelist: [], // Allow all origins
        // requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2']
    }).listen(port, host, function() {
        console.log('Running CORS Anywhere on ' + host + ':' + port);
    });
    
    fetch('https://localhost:8888/https://www.google.com').then(e => console.log(e)).catch(e => console.log(e.message));

    fetch('http://localhost:8888/https://www.google.com').then(e => console.log(e)).catch(e => console.log(e.message));

})





