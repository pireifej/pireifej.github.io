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
	
	var readmore = "<span class='glyphicon glyphicon-collapse-down'></span> Read more </em>"
	var readless = "<span class='glyphicon glyphicon-collapse-up'></span> Read less </em>"
	
	$("#infant").on("hide.bs.collapse", function() {
		$("#infant-btn").html(readmore);
	});
	$("#infant").on("show.bs.collapse", function() {
		$("#infant-btn").html(readless);
	});	
	
	$("#toddler").on("hide.bs.collapse", function() {
		$("#toddler-btn").html(readmore);
	});
	$("#toddler").on("show.bs.collapse", function() {
		$("#toddler-btn").html(readless);
	});	
	
	$("#primary").on("hide.bs.collapse", function() {
		$("#primary-btn").html(readmore);
	});
	$("#primary").on("show.bs.collapse", function() {
		$("#primary-btn").html(readless);
	});	
	
	$("#summer").on("hide.bs.collapse", function() {
		$("#summer-btn").html(readmore);
	});
	$("#summer").on("show.bs.collapse", function() {
		$("#summer-btn").html(readless);
	});	
	
	$("#enrichment").on("hide.bs.collapse", function() {
		$("#enrichment-btn").html(readmore);
	});
	$("#enrichment").on("show.bs.collapse", function() {
		$("#enrichment-btn").html(readless);
	});	
	
	$("#after").on("hide.bs.collapse", function() {
		$("#after-btn").html(readmore);
	});
	$("#after").on("show.bs.collapse", function() {
		$("#after-btn").html(readless);
	});	
	
	$("#why").on("hide.bs.collapse", function() {
		$("#why-btn").html(readmore);
	});
	$("#why").on("show.bs.collapse", function() {
		$("#why-btn").html(readless);
	});	
	
	$("#impact").on("hide.bs.collapse", function() {
		$("#impact-btn").html(readmore);
	});
	$("#impact").on("show.bs.collapse", function() {
		$("#impact-btn").html(readless);
	});
	
	$("#google").on("hide.bs.collapse", function() {
		$("#google-btn").html(readmore);
	});
	$("#google").on("show.bs.collapse", function() {
		$("#google-btn").html(readless);
	});
	
	$("#madness").on("hide.bs.collapse", function() {
		$("#madness-btn").html('<span class="glyphicon glyphicon-collapse-down"></span> ' + madness + '</em>');
	});
	$("#madness").on("show.bs.collapse", function() {
		$("#madness-btn").html('<span class="glyphicon glyphicon-collapse-up"></span> ' + madness + '</em>');
	});
});