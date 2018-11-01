$(document).ready(function() {
	loadData();
});

function loadData() {
	$.ajax({
		url : "/users",
		type : "GET",
		contentType : "application/json;charset=utf-8",
		dataType : "json",
		success : function(result) {
			var html = '';
			$.each(result, function(key, item) {
				html += '<tr>';
				html += '<td>' + item.userid + '</td>';
				html += '<td>' + item.firstName + '</td>';
				html += '<td>' + item.lastName + '</td>';
				html += '<td>' + item.email + '</td>';
				html += '<td><a href="#" onclick="editFunc(' + item.userid
						+ ')">Edit</a>| <a href="#" onclick="deleteid('
						+ item.userid + ')" >Delete</a></td> ';
				html += '</tr>';

			});
			$('.tbody').html(html);
		},
		error : function(errormessage) {
			alert(errormessage.responseText);
		}
	});
}
