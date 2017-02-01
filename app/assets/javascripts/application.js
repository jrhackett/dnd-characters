(function($) {
	$new_button = $(".new-character-button");
	$new_button.on("mouseover", function() {
		if(!$new_button.hasClass("active")) {
			$new_button.addClass("active");
		}
	});

	$new_button.on("mouseout", function() {
		if($new_button.hasClass("active")) {
			$new_button.removeClass("active");
		}
	});
}) (jQuery);