$( document ).ready(function() {
	var infant = "Infant Program <em>– 6 weeks through 18 months";
	var toddler = "Toddler Program <em>– 18 months through 3 years";
	var primary = "Primary Program <em>– 3 years through 6 years";
	var summer = "Summer Camp";
	
	$("#infant").on("hide.bs.collapse", function() {
		$("#infant .btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + infant + '</em>');
	});
	$("#infant").on("show.bs.collapse", function() {
		$("#infant .btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + infant + '</em>');
	});	
	
	$("#toddler").on("hide.bs.collapse", function() {
		$("#toddler .btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + toddler + '</em>');
	});
	$("#toddler").on("show.bs.collapse", function() {
		$("#toddler .btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + toddler + '</em>');
	});	
	
	$("#primary").on("hide.bs.collapse", function() {
		$("#primary .btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + primary + '</em>');
	});
	$("#primary").on("show.bs.collapse", function() {
		$("#primary .btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + primary + '</em>');
	});	
	
	$("#summer").on("hide.bs.collapse", function() {
		$("#summer .btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + summer + '</em>');
	});
	$("#summer").on("show.bs.collapse", function() {
		$("#summer .btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + summer + '</em>');
	});	
});