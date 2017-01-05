(function($) {

	$("#overview-button").on("click", function() {
		$("#abilities").hide();

		$("#overview").show();
	});

	$("#abilities-button").on("click", function() {
		$("#overview").hide();

		$("#abilities").show();
	});

})(jQuery);