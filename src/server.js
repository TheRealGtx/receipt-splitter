let http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('Production version on AWS');
});

module.exports = server

if (require.main == module) {
    server.listen(8080, '0.0.0.0', () => {
        console.log('Server listening on port 8080')
    });
}