$(document).ready(function() {
	$('.tweet-controls').hide();
	$('.stats').hide();
	$('.reply').hide();
	$('.tweet-actions').hide();

	$('.tweet').click(function() {
		console.log("tweet clikc");
		$(this).find('.stats').show({duration: 400});
		$(this).find('.reply').show();
	});

	$('.tweet').hover(function() {
		$(this).find('.tweet-actions').show();
	}, function() {
		$(this).find('.tweet-actions').hide();
	});

	$('.tweet-compose').focus(function() {
		$('.tweet-controls').show();
		$(this).height($(this).height()*2);
	});

	$('.tweet-compose').keyup(function() {
		console.log('up');
		var count = 140-$('.tweet-compose').val().length;
		$('.char-count').html(count);
		if (count < 10) {
			$('.char-count').css('color', 'red');
		}
		else {
			$('.char-count').css('color', 'inherit');
		}
		if (count == 140 || count < 0) {
			$('.tweet-controls button').prop('disabled', true);
		}
		else {
			$('.tweet-controls button').prop('disabled', false);
		}
	});
	$('.tweet-controls button').click(function() {
		var el = $('.tweet:first').clone();
		el.find('.avatar').prop('src', 'https://si0.twimg.com/profile_images/1482831577/vendetta_headshot.jpg');
		el.find('.fullname').html('Cahlan Sharp');
		el.find('.username').html('@cahlan');
		el.find('.tweet-text').html($('.tweet-compose').val());
		$('.stream').prepend(el);
	});
});