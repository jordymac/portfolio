(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			$body.removeClass('is-preload');
			// Trigger portfolio immediately
			$('#one').addClass('loaded');
		});
		
		// Remove preload and trigger portfolio even earlier when DOM is ready
		$(document).ready(function() {
			$body.removeClass('is-preload');
			$('#one').addClass('loaded');
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);