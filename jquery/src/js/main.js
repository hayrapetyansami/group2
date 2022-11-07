import $ from "jquery";

$("h1").text("Hello World !!!");
$("#box")
.css("width", "200px")
.css("height", "200px")
.css("background", "#cc2266");

$("h1").on("click", function () {
	$(this)
	.addClass("title")
	.text("Hello Armenia !!!");
	
	$("#box").fadeToggle();
});

$("button").on("click", function () {
	$("#box").animate({
		height: "600px"
	}, 1000, function() {
		// $("#box").css("height", "200px");
		console.log("DONE");
	})
});