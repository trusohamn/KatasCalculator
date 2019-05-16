const fs = require('fs');
const http = require('http');

const calculator = require('./calculator.js');
const rTa = require('./romanToArabic.js');
const aTr = require('./arabicToRoman.js');
const primes = require('./primes.js');
const fizzBuzz = require('./fizzBuzz.js');
const api = require('./api');

const home = fs.readFileSync('./index.html');
const error = fs.readFileSync('./error.html');

const port = 8080;

const server = http
    .createServer((req, res) => {
        const path = req.url.split('?')[0];
        console.log('path', path);
        try {
            if (path === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(home);
            }
            else if (path === '/client.js') {
                fs.readFile('client.js', (err, data) => {
                    if (err) {
                        next();
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/javascript' });
                        res.end(data);
                    }
                });
            }
            else {
                let resource;
                switch (path) {
                    case '/calculator': resource = api.create(calculator); break;
                    case '/arabicToRoman': resource = api.create(aTr); break;
                    case '/romanToArabic': resource = api.create(rTa); break;
                    case '/primes': resource = api.create(primes); break;
                    case '/fizzBuzz': resource = api.create(fizzBuzz); break;
                    default: {
                        fs.readFile(base + path, (err, data) => {
                            if (err) {
                                next();
                            } else {

                                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                                res.end(data);
                            }
                        });
                    }
                }
                resource.route(req, res);
            }
        } catch {
        }
    })
    .listen(port);
server.on('error', (e) => {
    console.log(e);
})


server.on('listening', () => console.log('Server is listening on port', server.address().port));