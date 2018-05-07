var quote, author;

function getNewQuote() {
	$.ajax({
		url: 'http://api.forismatic.com/api/1.0/',
		jsonp: 'jsonp',
		dataType: 'jsonp',
		data: {
			method: 'getQuote',
			lang: 'en',
			format: 'jsonp'
		},
		success: function(response) {
			quote = response.quoteText;
			author = response.quoteAuthor;
			$('#quote').text(quote);
			if (author) {
				$('#author').text('- ' + author);
			}	else {
				$('#author').text('- Unknown');
			}
		}
	});
};

$(document).ready(function() {

	getNewQuote();

	$('#submit').on('click', function() {
		getNewQuote();
	});

	$('#tweet').on('click', function() {
		window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '- ' + author));
	})
});