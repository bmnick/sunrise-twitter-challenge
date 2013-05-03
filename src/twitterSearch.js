var TwitterSearch = {};
var http = require('http');

TwitterSearch.prepareRequest = function(searchString, since_id) {
  since_id = since_id || 0;
  return {
      host: 'search.twitter.com',
      path: '/search.json?q=' + searchString + '&rpp=20&since_id=' + since_id,
      method: 'GET',
      headers: { 'User-Agent': 'bmnick/sunrise-demo 1.0' }
    };
}

TwitterSearch.search = function(query, callback, since_id) {
  var req = http.request(TwitterSearch.prepareRequest(query, since_id), function(res) {
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
