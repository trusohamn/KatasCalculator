const querystring = require('querystring');

function create(service) {
  return {
    route: function (req, res) {
      if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end();
      }

      const query = req.url.split('?')[1];
      if (query === undefined) {
        res.statusCode = 400;
        res.end('{"error":"Could not parse query string."}');
      }
      const decoded = querystring.decode(query);

      try {
        const response = {
          result: service.eval(decoded.q).toString()
        };
        console.log(response);
        res.end(JSON.stringify(response));
      } catch (err) {
        errorHandler(err, res);
      }
    }
  };
}

function errorHandler(err, res) {
  if (err.message === 'invalidExpression') {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'not a valid expression' }));
  } else if (err.message === 'zeroDivisionError') {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Don\'t divide by zero!!!' }));
  } else if (err.message === 'invalidInput') {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Invalid input!!!' }));
  } else {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message }));
  }
}

module.exports.create = create;