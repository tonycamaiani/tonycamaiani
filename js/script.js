/* Author: Tony Camaiani */

(function($) {

	// accordion script  
  var allPanels = $('section').hide();
	var allHeaders = $('h2')
    
  $('h2').click(function() {
      $this = $(this);
      $target =  $this.next();

      if(!$target.hasClass('open')){
				allPanels.removeClass('open').slideUp();
				allHeaders.removeClass('active')
				$target.addClass('open').slideDown();
				$this.addClass('active');
      } else {
				allPanels.removeClass('open').slideUp();
				$this.removeClass('active');
      }
      
    return false;
  });

	// tabs script
	$(".tabContents").hide(); // Hide all tab conten divs by default
	$(".tabContents:first").show(); // Show the first div of tab content by default
	
	$("#tabs ul li a").click(function(){ //Fire the click event
		//e.preventDefault();
		
		var activeTab = $(this).attr("href"); // Catch the click link
		$("#tabs ul li a").removeClass("active"); // Remove pre-highlighted link
		$(this).addClass("active"); // set clicked link to highlight state
		$(".tabContents").hide(); // hide currently visible tab content div
		$(activeTab).fadeIn(); // show the target tab content div by matching clicked link.
		return false;
	});

	// dialog script
	$(".dialog-modal").dialog({
		width: 750,
		autoOpen: false,
		zIndex: 3999,
		modal: true,
		show: "fade",
		hide: "drop"
	});
	

	$('.dialog-opener').click(function() {
		$(this.hash).dialog('open');
		return false;
	});


	// send email script
	$("#submit").click(function(){					   				   
		$(".error").hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	
		var emailFromVal = $("#email").val();
		if(emailFromVal == '') {
			$("#email").after('<span class="error">You forgot to enter your email address.</span>');
			hasError = true;
		} else if(!emailReg.test(emailFromVal)) {	
			$("#email").after('<span class="error">Enter a valid email address.</span>');
			hasError = true;
		}
	
		var subjectVal = $("#name").val();
		if(subjectVal == '') {
			$("#name").after('<span class="error">You forgot to enter your name.</span>');
			hasError = true;
		}
	
		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#message").after('<span class="error">You forgot to enter the message.</span>');
			hasError = true;
		}
	
		if(hasError == false) {
			$(this).hide();
			$("#sendEmail li.buttons").append('<img src="images/loading.gif" alt="Loading" id="loading" />');
		
			$.post("php/sendemail.php",
   				{ emailFrom: emailFromVal, subject: subjectVal, message: messageVal },
   					function(data){
						$("#sendEmail").slideUp("normal", function() {				   
							$("#sendEmail").before('<p class="sent_message"><strong>Success!</strong>Your message was sent.</p>');											
						});
   					}
				 );
		}
	
		return false;
	});
	
	// slide in content
	$("#main").slideDown(2000);		

})(jQuery);




