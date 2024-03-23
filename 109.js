var rows = document.querySelectorAll('#GridView1>tbody>tr:not([align="center"])');
var header = rows[0];
var header_a = ['Orginal License Date','Discipline','Discipline Date','Valid Thru','Disciplinary Action'];
for (i of header_a) {
	header.insertCell(-1).textContent = i;
}
header.insertCell(3).textContent = 'Middle Name';
header.insertCell(4).textContent = 'Suffix';
header.insertCell(5).textContent = 'Address';
var rows_a = Array.prototype.slice.call(rows);
for (i of rows_a.slice(1)) {
	var detailsLink = i.querySelector('a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values = detailsPage.querySelectorAll('#DetailsView1>tbody>tr>td:nth-of-type(2)');
	if (values[0] == undefined) {
		var middle_name_ = "";
		var suffix_ = "";
		var address_ = "";
		var lid_ = "";
		var dicipline_ = "";
		var discipline_date_ = "";
		var valid_thru_ = "";
		var displicinary_action_ = "";
	}else {
		var middle_name_ = values[2].textContent;
		var suffix_ = values[4].textContent;
		var address_ = values[5].textContent;
		var lid_ = values[8].textContent;
		var dicipline_ = values[9].textContent;
		var discipline_date_ = values[10].textContent;
		var valid_thru_ = values[11].textContent;
		var displicinary_action_ = values[12].textContent;
	}
	[lid_,dicipline_,discipline_date_,valid_thru_,displicinary_action_].forEach(x => i.insertCell(-1).textContent = x);
	i.insertCell(3).textContent = middle_name_;
	i.insertCell(4).textContent = suffix_;
	i.insertCell(5).textContent = address_;
}