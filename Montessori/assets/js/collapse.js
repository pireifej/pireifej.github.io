$( document ).ready(function() {
	var infant = "Infant Program <em>– 6 weeks through 18 months";
	var toddler = "Toddler Program <em>– 18 months through 3 years";
	var primary = "Primary Program <em>– 3 years through 6 years";
	var summer = "Summer Camp";
	var enrichment = "Enrichment Programs";
	var after = "After School Programs";
	var why = "Why Montessori?";
	var impact = "Impact of Montessori Education on the children";
	var google = "Google Founders Talk Montessori";
	var madness = "Montessori Madness From A Parent’s Perspective";
	
	$("#infant").on("hide.bs.collapse", function() {
		$("#infant-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + infant + '</em>');
	});
	$("#infant").on("show.bs.collapse", function() {
		$("#infant-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + infant + '</em>');
	});	
	
	$("#toddler").on("hide.bs.collapse", function() {
		$("#toddler-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + toddler + '</em>');
	});
	$("#toddler").on("show.bs.collapse", function() {
		$("#toddler-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + toddler + '</em>');
	});	
	
	$("#primary").on("hide.bs.collapse", function() {
		$("#primary-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + primary + '</em>');
	});
	$("#primary").on("show.bs.collapse", function() {
		$("#primary-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + primary + '</em>');
	});	
	
	$("#summer").on("hide.bs.collapse", function() {
		$("#summer-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + summer + '</em>');
	});
	$("#summer").on("show.bs.collapse", function() {
		$("#summer-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + summer + '</em>');
	});	
	
	$("#enrichment").on("hide.bs.collapse", function() {
		$("#enrichment-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + enrichment + '</em>');
	});
	$("#enrichment").on("show.bs.collapse", function() {
		$("#enrichment-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + enrichment + '</em>');
	});	
	
	$("#after").on("hide.bs.collapse", function() {
		$("#after-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + after + '</em>');
	});
	$("#after").on("show.bs.collapse", function() {
		$("#after-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + after + '</em>');
	});	
	
	$("#why").on("hide.bs.collapse", function() {
		$("#why-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + why + '</em>');
	});
	$("#why").on("show.bs.collapse", function() {
		$("#why-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + why + '</em>');
	});	
	
	$("#impact").on("hide.bs.collapse", function() {
		$("#impact-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + impact + '</em>');
	});
	$("#impact").on("show.bs.collapse", function() {
		$("#impact-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + impact + '</em>');
	});
	
	$("#madness").on("hide.bs.collapse", function() {
		$("#madness-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + madness + '</em>');
	});
	$("#madness").on("show.bs.collapse", function() {
		$("#madness-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + madness + '</em>');
	});
});