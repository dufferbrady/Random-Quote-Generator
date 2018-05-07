$(document).ready(function() {
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
				$('#quote').text(response.quoteText);
				if (response.quoteAuthor) {
					$('#author').text('- ' + response.quoteAuthor);
				}	else {
					$('#author').text('- Unknown');
				}
			}
		});
	};
	getNewQuote();

	$('#submit').on('click', function() {
		getNewQuote();
	});
});