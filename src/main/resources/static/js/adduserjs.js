/**
 * 
 */
function addUser() {
	//reset();
	// get the form values
	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var email = $('#email').val();

	$.ajax({
		type : "POST",
		url : "/new",
		contentType : "application/json",
		dataType : "json",
		data : JSON.stringify({
			"firstName" : firstName,
			"lastName" : lastName,
			"email" : email
		}),
		success : function(response) {
			$('#info').html(response);
			$('#info').show('slow');
			listDisplay();
			loadData();

		},
		error : function(e) {
			$('#error').html(e.responseJSON.error);
			//$('#info').hide('slow');
			$('#error').show();
		//	$('#info').hide();


		}
	});
}