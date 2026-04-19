let http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('Website working');
}).listen(8080, '0.0.0.0', () => {
    console.log('Server running on port 8080');
});