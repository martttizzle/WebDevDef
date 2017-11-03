
//HIDE AND SHOW TEXT BUTTON
/*$("#b1").on("click", function() {
$("h1").slideToggle(1500);
 $("p").toggleClass("big");
if ($("#b1").text() === "Remove All Text") {   $(this).text("Replace All Text");
}else{
    $("#b1").text("Remove All Text");
}
});*/


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
    var   pNum =  1;
    const total = 3;
    var spec = ")no-repeat"+" " + "0" +" "+"-600px";

window.setInterval(function picChanger() {
    pNum = pNum + 1; 
if (pNum > total || pNum < 1) {  
        pNum = 1; 
} 
 $("#picSldr").css("background", "url(/jQueryImages/pic"+pNum+".jpg"+spec+"");  
},10000);
 
//Text fade in
/*window.setInterval(function () {
  $("#title,#paraG").fadeOut(15000);
     
});
 */  






