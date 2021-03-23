// Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '0.0.0.0';
var host = 'https://gowthamarputharaj.github.io/cors_proxy/';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8888;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    // requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});


