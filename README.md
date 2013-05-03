Submission
-----

This twitter apps is a CLI twitter search app using the search API over the streaming API

API decisions
-----

I chose to use the search API over the streaming API for one main reason. Search allows you to avoid authenticating against twitter. I felt that OAuth added too much complexity to a simple search application. The downside is that this slows down the responses. I noticed a resopnse time on ther order of 10-30 seconds on new tweets. It can also be somewhat slow printing through large amounts of history for a given search. I did provide a user agent in order to better avoid any rate limiting, as the API documentation states

External Dependencies
-----

There are only two dependencies, and that is for testing. I chose to use should.js, and mocha as my testing tools. I felt that for a simple requirement in development dependencies only, should.js and it's much more readable and human-friendly tests were worthwhile. 

Usage
-----

node app.js \<search\_term\>
