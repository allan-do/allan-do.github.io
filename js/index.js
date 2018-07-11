$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top}, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

/*
var test = $('<a></a>')
      .addClass('twitter-share-button')
      .attr('href', 'http://twitter.com/share')
      .attr('data-text', $('#share').html()+" "+$('#authShare').html()+" #randomQuotes");
  $('#tweetBtn').append(tweetBtn);
  */
/*
var test = $('<p>hi</p>');
$('#aboutSec').append(test);
*/