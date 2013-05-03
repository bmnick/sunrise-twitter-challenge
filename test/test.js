var should = require('should')
    TwitterSearch = require('../src/twitterSearch.js').TwitterSearch;

describe('TwitterSearch', function() {
  it('should exist', function() {
    TwitterSearch.should.be.ok;
  });

  it('should have a search method', function() {
    TwitterSearch.should.have.property('search');
    TwitterSearch.search.should.be.an.instanceOf(Function);
  });

  it('should return an array of tweets', function(done) {
    results = TwitterSearch.search('Frobdignaggle', function(results) {
      // Fragile, depends on a tweet existing in an external system
      results.should.be.an.instanceOf(Array);
      results.length.should.be.above(0); 
      done();
    });
  });

  it('should be able to prepare a request', function() {
    searchString = 'Frobdignaggle';
    exemplar = {
      host: 'search.twitter.com',
      path: '/search.json?q=Frobdignaggle'
    };

    TwitterSearch.should.have.property('prepareRequest');
    TwitterSearch.prepareRequest.should.be.an.instanceOf(Function);

    var request = TwitterSearch.prepareRequest(searchString);
    request.host.should.equal(exemplar.host);
    request.path.should.include(exemplar.path);
  });

  it('should actually fetch from twitter', function(done) {
    TwitterSearch.search('Frobdignaggle', function(results) {
      results.length.should.be.above(0)
      results[0].text.should.match(/Frobdignaggle/);
      done();
    });
  });

  it('should be able to take a since_id', function() {
    var request = TwitterSearch.prepareRequest(searchString, 1520);
    request.path.should.match(/since_id=1520/);
    request.path.should.match(/rpp=20/);
  })
});

