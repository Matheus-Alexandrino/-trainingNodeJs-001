const http = require('http');
const host = 'http://localhost';
const port = 3030;
const stats = require('./pcRamUsage.js');

//console.log(http);
http.createServer((req, res) => {
    let url = req.url;

    if (url === '/stats') {

        res.end(JSON.stringify(stats, null, 2))
    } else {
        res.end('<h1> Welcome! </h1>')
    }
}).listen(port, () => console.log(`Server is Running in  ${host}:${port}, ${stats}`));
