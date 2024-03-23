var input_ = document.querySelector('#Back_to_Search');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name', 'License Number', 'Profession', 'License Type', 'License Status', 'License Issue Date', 'License Expiration Date', 'License Action', 'City', 'State', 'Zip Code', 'County'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not([style])');
if (rows[0] != undefined) {
	for (var i = 0; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_ = detailsPage.querySelectorAll('td[class="dlabel"]');
		var obtained_ = detailsPage.querySelectorAll('#_ctl31__ctl1_obtained_by_label');
		var full_name_ = values_[0].textContent;
		var number_ = values_[1].textContent;
		var profession_ = values_[2].textContent;
		var type_ = values_[3].textContent;
		var lid_ = values_[4].textContent;
		var status_ = values_[6].textContent;
		var led_ = values_[7].textContent;
		if (obtained_[0] == undefined) {
			var city_ = values_[9].textContent;
			var state_ = values_[10].textContent;
			var zip_ = values_[11].textContent;
			var county_ = values_[12].textContent;
		} else {
			var city_ = values_[10].textContent;
			var state_ = values_[11].textContent;
			var zip_ = values_[12].textContent;
			var county_ = values_[13].textContent;
		}
		var disc_td = detailsPage.querySelectorAll('td[colspan="5"]');
		var disc_t = disc_td[2].textContent;
		if (disc_t.includes('Currently there is no disciplinary information regarding this license.')) {
			disc_ = disc_t.split('.')[0];
		} else {
			var disc_a = disc_td[2].querySelectorAll('td[width]');
			var disc_ta = [];
			for (x=0;x<disc_a.length;x++) {
			  disc_ta.push(disc_a[x].textContent);
			}
			var disc_ = disc_ta.join('|');
		}
		[full_name_,number_,profession_,type_,status_,lid_,led_,disc_,city_,state_,zip_,county_].forEach(x => lic_.insertCell(-1).textContent = x);
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