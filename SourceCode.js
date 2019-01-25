$( document ).ready(function() {
    $('.datepicker').datepicker();
    $( "#LogButton" ).click(function( event ) {
        $('#div3, #div2, .front').toggleClass("Hide");
        
    });
 

$(window).on("load",(function() {
    return alert("Bye now!");
  }));
 
/*
function myFunction() {
$('#div3, #div2').toggleClass("Hide");
};*/
});

