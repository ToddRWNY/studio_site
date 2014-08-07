// JavaScript Document
// Instantiate the DOM has loaded --- Keep all DOM Ready functions in one annonymous function --//
$( document ).ready( function(){

	var openMenu = false;

// quick quote functions
$( "#menu-button" ).click(function() {
	if (openMenu == false){
		document.getElementById("nav-wrap").style.display="block";
		openMenu = true;
		console.log(openMenu);	
	}
	else if(openMenu==true){
		document.getElementById("nav-wrap").style.display="none";
		openMenu = false;
		console.log(openMenu);
	}
});



});//End Document.Ready


