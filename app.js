#!/usr/local/bin/node

var TwitterSearch = require('./src/twitterSearch.js').TwitterSearch;

var search_string = process.argv[2];
var last_id = 0;

function printTweet(tweet) {
	console.log(tweet['from_user'] + ": " + tweet['text']);
}

function fetchTweets() {
	var tweets = TwitterSearch.search(search_string, function(tweets) {
		last_id = tweets[0]['id']; // newest are placed first

		tweets.reverse
		for (var index in tweets) {
			var tweet = tweets[index];

			printTweet(tweet);
		}
	}, last_id);
}

fetchTweets();
setInterval(fetchTweets, 5000 );

