// JavaScript Document
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

<!-- Contact Form --> 
 function verify() {
    var themessage = "You are required to complete the following fields: ";
    if (document.form.FirstName.value=="") {
    themessage = themessage + "First Name,";
    }
    if (document.form.LastName.value=="") {
    themessage = themessage + " Last Name,";
    }
    if (document.form.Email.value=="") {
    themessage = themessage + " Email,";
    }
    if (document.form.Message.value=="") {
    themessage = themessage + " Message";
    }
	
    //alert if fields are empty and cancel form submit
    if (themessage == "You are required to complete the following fields: ") {
    document.form.submit();
}
    else {
    alert(themessage);
    return false;
   }
}