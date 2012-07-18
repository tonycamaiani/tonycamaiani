	$(function() {

		$('h2.title').mouseenter(function() {
			$(this).animate({
    			color: '#FFF'
  			}, 100, function() {
			$(this).animate({
    			color: '#069'
  			}, 400)
  			})
  		});

		$('h3.title').mouseenter(function() {
			$(this).animate({
    			color: '#FFF'
  			}, 100, function() {
			$(this).animate({
    			color: '#069'
  			}, 400)
  			})
  		});

		$('h3.expo_title a').mouseenter(function() {
			$(this).animate({
    			color: '#F28200'
  			}, 100, function() {
			$(this).animate({
    			color: '#FFF'
  			}, 400)
  			})
  		});


		$('.blink').mouseenter(function() {
			$(this).animate({
    			opacity: 1
  			}, 300)
  			}).mouseleave(function() {
			$(this).animate({
    			opacity: 0.5
  			}, 300)
  			});

		
		$(".accordion").accordion({
			collapsible: true,
			autoHeight: false,
			active: false
		});


		$(".inner_accordion").accordion({
			collapsible: true,
			autoHeight: false,
			active: 2
		});


		$(".dialog-modal").dialog({
			width: 750,
			autoOpen: false,
			zIndex: 3999,
			modal: true
		});
		

		$('.dialog-opener').click(function() {
			$(this.hash).dialog('open');
			return false;
		});
		
		$( "#tabs" ).tabs();


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
							
								$("#sendEmail").before('<p class="sent_message big">Success!</p><p class="sent_message">Your message was sent.</p>');											
							});
	   					}
					 );
			}
		
			return false;
		});	
		
		
		  $("#content").hide().slideDown(1500);



});	
	
	
jQuery(document).ready(function(){

});


