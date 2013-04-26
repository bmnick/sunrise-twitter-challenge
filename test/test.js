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

  it('should return an array of tweets', function() {
    results = TwitterSearch.search('Frobdignaggle');
    
    // Fragile, depends on a tweet existing in an external system
    results.should.be.an.instanceOf(Array);
    results.length.should.be.above(0); 
  });
});

