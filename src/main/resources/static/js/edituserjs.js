/**
 * 
 */
// Function for getting the Data Based upon User ID
function getbyId(userid) {
	// editFunc();
	$('#firstName').css('border-color', 'lightgrey');
	$('#lastName').css('border-color', 'lightgrey');
	$('#email').css('border-color', 'lightgrey');
	$.ajax({
		url : "/users/" + userid,
		typr : "GET",
		contentType : "application/json;charset=UTF-8",
		dataType : "json",
		success : function(result) {
			console.log(" successfully got the data for id: " + userid);
			$('#userid').val(result.userid);
			$('#firstName').val(result.firstName);
			$('#lastName').val(result.lastName);
			$('#email').val(result.email);
		},
		error : function(errormessage) {
			console.log(" Failed to  get the data for id: " + userid);
		}
	});
	// return false;
}
function editUser() {
	$.ajax({
		type : "PUT",
		url : "/users/" + $('#userid').val(),
		contentType : "application/json",
		data : JSON.stringify({
			userid : $('#userid').val(),
			firstName : $('#firstName').val(),
			lastName : $('#lastName').val(),
			email : $('#email').val()
		}),
		dataType : "json",
		success : function(response) {
			$('#info').html(response);
			$('#info').hide();
			reset();
			listDisplay();
			loadData();
		},
		error : function(e) {
			console.log("error while updating user for userid: "
					+ $('#userid').val());
			$('#error').html(e.responseJSON.error);
			$('#info').hide('slow');
			$('#error').show('slow');

		}

	});
}