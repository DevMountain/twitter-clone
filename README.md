Use this repo as the starting point for the Twitter clone project:

## PART ONE ##
* Fork the repo
* Get familiar with the html/css
* Right before your closing body tag, link to your jQuery found in the js folder.
* Create a animations.js file and then link to it right before your the closing body tag
* Use jQuery to add the following features:
  * Initially, the Tweet button and the character count button should be hidden (CSS).
  * When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.
  * As the user types, the character count should decrease.
  * When there are 10 or less characters, the character counter should turn red.
  * If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars).
  * When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname.

## PART TWO ##
* The tweet actions (Reply, Retweet, etc) should only show up when you hover over that individual tweet. Otherwise, they should be hidden.
* The Retweets/timestamp/Reply areas should also be hidden by default. These should only expand if you click on the tweet. Have the students use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com

### ADVANCED: (Black Diamond) ###
* Make timestamps similar to how they look on Twitter (1h, 18m, 1m) and use the jQuery timeago plugin to make them automatic.
* Implement the icons for when a tweet is favorited/retweeted in the upper right of the tweet.
* Implement the Bootstrap tooltips for when you hover over a user’s avatar image
* Persist new tweets using local storage
* Persist new tweets using a service like parse https://parse.com/



### Here's a list of (in my opinion) the jQuery 'Need to Knows'
* $(document).ready(function(){});
* $(“element”)
* $(‘‘idOrClass”)
* $(“idOrClass, idOrClass”)
*  var myNameEle = $(‘\<span>Tyler McGinnis \</span>’)
* $(‘idOrClass’).prepend(myNameEle);
* $(‘idOrClass’).append(myNameEle) / myNameEle.$appendTo($(‘idOrClass’))
* $(‘idOrClass’).remove();
* $(‘idOrClass’).on(‘\<event>’, function(){}); http://api.jquery.com/category/events/
* $(this)
* $(‘idOrClass’).val() //input, textarea, select
* $(‘idOrClass’).html()
* $('idOrClass').css()
* $(‘idOrClass’).text()
* $(‘idOrClass’).find()
* $(‘idOrClass’).show() // .hide();
* $(this).toggleClass(‘className’);
