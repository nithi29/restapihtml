function deleteid(userid) {
	var id = parseInt(userid);
	var doIt = confirm('Do you want to delete the record?' + id);
	if (doIt) {
		$.ajax({
			type : "DELETE",
			url : "/users/" + id,
			data : {
				userId : userid
			},
			success : function(data) {
				alert("Record Deleted");
				listDisplay();
				loadData();
			},
			error : function(data) {
				$("#deleteStatus").html("failed to delete user id" + userid);
			}
		});
	} else {
		alert("Not Deleted");

	}
}