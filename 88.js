var input_ = document.querySelector('#results>caption');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name', 'First Name', 'Last Name', 'Address', 'City', 'License Number', 'License Status', 'Issued Date', 'Expiration Date', 'License Action', 'Insurance'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#results>tbody>tr');
for (var i = 1; i < rows.length; i++) {
  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
	var detailsLink = rows[i].querySelector('a');
	var name_ = detailsLink.textContent;
	var address_ = rows[i].querySelector('td:nth-of-type(2)').textContent;
	var city_ = rows[i].querySelector('td:nth-of-type(3)').textContent;
	var lic_no = rows[i].querySelector('td:nth-of-type(4)').textContent;
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('.infoData');
	var last_name = values_[0].textContent;
	var first_name = values_[1].textContent;
	var lid_ = values_[3].textContent;
	var led_ = values_[4].textContent;
	var insurance_ = values_[5].textContent;
	var action_ = values_[6].textContent;
	var status_ = values_[7].textContent;
	[name_, first_name, last_name, address_, city_, lic_no, status_, lid_, led_, action_, insurance_].forEach(x => lic_.insertCell(-1).textContent = x);
	new_table_.appendChild(lic_);
	var cells_ = rows[i].querySelectorAll('td');
  	for (z=0;z<4;z++) {
  		cells_[z].remove();
  	}
}
input_.appendChild(new_table_);