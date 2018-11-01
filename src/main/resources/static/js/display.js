function formDisplay() {
	document.getElementById('form').style.display = 'block';
	document.getElementById('list_user').style.display = 'none';
}

function listDisplay() {
	document.getElementById('list_user').style.display = 'block';
	document.getElementById('form').style.display = 'none';
}
function addFunc() {
	formDisplay();
	document.getElementById('add').style.display = 'block';
	document.getElementById('edit').style.display = 'none';
	document.getElementById('edit_btn').style.display = 'none';
	document.getElementById('add_btn').style.display = 'block';
}

function editFunc(userid) {
	formDisplay();
	getbyId(userid);
	document.getElementById('edit').style.display = 'block';
	document.getElementById('add').style.display = 'none';
	document.getElementById('edit_btn').style.display = 'block';
	document.getElementById('add_btn').style.display = 'none';
}
function reset() {
	// $('#userid').val("");
	$('#firstName').val("");
	$('#lastName').val("");
	$('#email').val("");
}