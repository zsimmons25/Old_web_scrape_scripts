var input_ = document.querySelector('font[size="+1"]');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['First Name', 'Middle Name', 'Last Name', 'City', 'State', 'License Number', 'License Type', 'License Status', 'Issued Date', 'Expiration Date', 'License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#DataTable>tbody>tr>td>table>tbody>tr');
var no_match_a = document.querySelectorAll('#DataTable>tbody>tr>td>table>tbody>tr>td');
if (no_match_a[7].textContent != "Criteria entered does not match anyone in system or the individual's certification is not active.") {
	for (var i = 1; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i].querySelector('a');
		var first_name = rows[i].querySelector('td:nth-of-type(2)').textContent;
		var mid_name = rows[i].querySelector('td:nth-of-type(3)').textContent;
		var last_name = rows[i].querySelector('td:nth-of-type(4)').textContent;
		var lic_no = rows[i].querySelector('td:nth-of-type(5)').textContent;
		var lic_type = rows[i].querySelector('td:nth-of-type(6)').textContent;
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_br = detailsPage.querySelectorAll('#DataTable>tbody>tr>td>table>tbody>tr>td:nth-of-type(2)>br');
		for (y=0; y<values_br.length;y++) {
	  		values_br[y].textContent = '|';
		}
		var values_ = detailsPage.querySelector('#DataTable>tbody>tr>td>table>tbody>tr>td:nth-of-type(2)');
		var city_ = values_.textContent.split('|')[3];
		var state_ = values_.textContent.split('|')[4];
		var lid_ = values_.textContent.split('|')[6];
		var led_ = values_.textContent.split('|')[7];
		var status_ = values_.textContent.split('|')[8];
		var action_ = values_.textContent.split('|')[9];
		[first_name, mid_name, last_name, city_, state_, lic_no, lic_type, status_, lid_, led_, action_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<6;z++) {
	  		cells_[z].remove();
	  	}
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
input_.appendChild(new_table_);