picChanger();
//HIDE AND SHOW TEXT BUTTON
$("#b1").on("click", function() {
$("h1").slideToggle(1500);
 $("p").toggleClass("big");
if ($("#b1").text() === "Remove All Text") {   $(this).text("Replace All Text");
}else{
    $("#b1").text("Remove All Text");
}
});


//Option drop down menu
  function selectChp() {
let a = document.getElementById("chpSlct").value;
    console.log(a);
    location.href = "#" + a;
  } 

//Back to top button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
 
function openJQL(){
    window.open("TextBooklessonsjQuery.html");
}

//pichanger
function picChanger() {
   $("#showcase").
    alert(a );
}







/*
 
var total = 5;
var imagecount = 1;

function picSlider(x) {
var image = document.getElementById('img');
    imagecount = imagecount + x; 
    if(imagecount > total || imagecount < 1){
        imagecount = 1;
    }
    image.src = "picSlider/img"+ imagecount +".jpg";
}
window.setInterval(function picSlider() {
  var image = document.getElementById('img');
    imagecount = imagecount + 1; 
    if(imagecount > total || imagecount < 1){
        imagecount = 1;
    }
    image.src = "picSlider/img"+ imagecount +".jpg";
},9500);*/