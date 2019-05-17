const fs = require('fs');
const http = require('http');

const calculator = require('./services/calculator.js');
const rTa = require('./services/romanToArabic.js');
const aTr = require('./services/arabicToRoman.js');
const primes = require('./services/primes.js');
const fizzBuzz = require('./services/fizzBuzz.js');
 
const api = require('./api');

const home = fs.readFileSync('./static/index.html');

const port = process.env.PORT || 8080;

const server = http
    .createServer((req, res) => {
        const path = req.url.split('?')[0];
        console.log('path', path);
        try {
            if (path === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(home);
            } else if (/.*\.js$/.test(path)) {
                fs.readFile('./static' + path, (err, data) => {
                    if (err) {
                        console.log(error);
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/javascript' });
                        res.end(data);
                    }
                });
            } else if (/.*\.css$/.test(path)) {
                fs.readFile('./static' + path, (err, data) => {
                    if (err) {
                        console.log(error);
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/css' });
                        res.end(data);
                    }
                });
            } else if (/.*\.jpg$/.test(path)) {
                fs.readFile('./static' + path, (err, data) => {
                    if (err) {
                        console.log(error);
                    } else {
                        res.writeHead(200, { 'Content-Type': 'image/jpg' });
                        res.end(data);
                    }
                });
            } else {
                let resource;
                switch (path) {
                    case '/api/calculator': resource = api.create(calculator); break;
                    case '/api/arabicToRoman': resource = api.create(aTr); break;
                    case '/api/romanToArabic': resource = api.create(rTa); break;
                    case '/api/primes': resource = api.create(primes); break;
                    case '/api/fizzBuzz': resource = api.create(fizzBuzz); break;
                }
                resource.route(req, res);
            }
        }
        catch {
        }
    })
    .listen(port);
server.on('error', (e) => {
    console.log(e);
})


server.on('listening', () => console.log('Server is listening on port', server.address().port));