(function($) {

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

})(jQuery);