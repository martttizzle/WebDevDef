//HIDE AND SHOW TEXT BUTTON
$("#b1").on("click", function() {
$("h1").slideToggle(1500);
 $("p").toggleClass("big");
if ($("#b1").text() === "Remove All Text") {   $(this).text("  Reset  ");
}else{
    $("#b1").text("Remove All Text");
}
});


 
  