var input_ = document.querySelector('#lblFormTitle');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['First Name', 'Middle Name', 'Last Name', 'Full Name', 'City', 'License Number', 'License Type', 'License Issue Date', 'License Expiration Date', 'License Status', 'Disciplinary Action', 'Corrective Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#_ctl7_grdSearchResults>tbody>tr:not([class="TablePager"])');
if (rows[0] != undefined) {
	for (var i = 1; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
	  	var last_name_ = rows[i].querySelector('td:nth-of-type(2)').textContent;
	  	var first_name_ = rows[i].querySelector('td:nth-of-type(3)').textContent;
	  	var middle_name_ = rows[i].querySelector('td:nth-of-type(4)').textContent;
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var no_details_ = detailsPage.querySelector('#lblFormTitle');
		if (no_details_.textContent != 'Unexpected error occurred') {
			var full_name_ = detailsPage.querySelector('#_ctl7_lblName').textContent;
			var city_ = detailsPage.querySelector('#_ctl7_lblPublicCity').textContent;
			var values_ = detailsPage.querySelectorAll('#tbPublic>tbody>tr>td:not([width="135"]):not([width="125"])');
			var number_ = values_[0].textContent;
			var type_ = values_[1].textContent;
			var led_ = values_[2].textContent;
			var lid_ = values_[3].textContent;
			var status_ = values_[4].textContent;
			var disc_1 = values_[6].textContent;
			var disc_2 = values_[7].textContent;
			[first_name_,middle_name_,last_name_,full_name_,city_,number_,type_,lid_,led_,status_,disc_1,disc_2].forEach(x => lic_.insertCell(-1).textContent = x);
			new_table_.appendChild(lic_);
		} else {
			var full_name_ = '';
			var city_ = '';
			var number_ = rows[i].querySelector('td:nth-of-type(6)').textContent;
			var type_ = rows[i].querySelector('td:nth-of-type(5)').textContent;
			var led_ = '';
			var lid_ = '';
			var status_ = rows[i].querySelector('td:nth-of-type(7)').textContent;
			var disc_1 = '';
			var disc_2 = '';
			[first_name_,middle_name_,last_name_,full_name_,city_,number_,type_,lid_,led_,status_,disc_1,disc_2].forEach(x => lic_.insertCell(-1).textContent = x);
			new_table_.appendChild(lic_);
		}
		var cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<8;z++) {
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