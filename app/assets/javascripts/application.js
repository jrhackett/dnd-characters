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

	/* Characters */
	$("#overview-button").on("click", function() {
		$("#abilities").hide();
		$("#combat").hide();
		$("#feats").hide();
		$("#spells").hide();

		$("#overview").show();
	});

	$("#abilities-button").on("click", function() {
		$("#overview").hide();
		$("#combat").hide();
		$("#feats").hide();
		$("#spells").hide();

		$("#abilities").show();
	});

	$("#combat-button").on("click", function() {
		$("#overview").hide();
		$("#combat").hide();
		$("#feats").hide();
		$("#abilities").hide();

		$("#combat").show();
	});

	$("#feats-button").on("click", function() {
		$("#overview").hide();
		$("#combat").hide();
		$("#feats").hide();
		$("#abilities").hide();

		$("#feats").show();
	});

	$("#spells-button").on("click", function() {
		$("#overview").hide();
		$("#combat").hide();
		$("#feats").hide();
		$("#abilities").hide();

		$("#spells").show();
	});
}) (jQuery);