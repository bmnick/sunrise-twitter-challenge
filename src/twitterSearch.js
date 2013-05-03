var TwitterSearch = {};
var http = require('http');

TwitterSearch.prepareRequest = function(searchString) {
  return {
      host: 'search.twitter.com',
      path: '/search.json?q=' + searchString,
      method: 'GET'
    };
}

TwitterSearch.search = function(query, callback) {
  var req = http.request(TwitterSearch.prepareRequest(query), function(res) {
    var response = '';

    res.on('data', function(chunk) {
      response += chunk;
    });

    res.on('end', function(err) {
      var parsed = JSON.parse(response);
      callback(parsed.results)
    });
  });
  
  req.on('error', function(err) {
    console.log(err);
  });
  req.end();
};

exports.TwitterSearch = TwitterSearch;
