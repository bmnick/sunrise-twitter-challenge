#!/usr/local/bin/node

// ==== Imports
var TwitterSearch = require('./src/twitterSearch.js');

// ==== Constants
var START_COLOR = "\033[94m";
var END_COLOR = "\033[0m";

// ==== State
var query = process.argv[2];
var last_id = 0;

// ==== Functions
function printTweet(tweet) {
	console.log(START_COLOR + tweet['from_user'] + ": " + END_COLOR + tweet['text']);
}

function processTweets(tweets) {
	// First, store away our newest id so we know where to continue from
	last_id = tweets[0]['id'];

	// Since we're printing in order, let's go ahead and reorder them
	tweets.reverse;

	// Loop over our newly ordered tweets and print them
	for (var index in tweets) {
		var tweet = tweets[index];

		printTweet(tweet);
	}
}

function checkTweets(tweets) {
	if (tweets.length > 0) {
		processTweets(tweets);
	}
}

function fetchTweets() {
	var tweets = TwitterSearch.search(query, checkTweets, last_id);
}

// ==== Main
fetchTweets();
setInterval(fetchTweets, 5000 );

