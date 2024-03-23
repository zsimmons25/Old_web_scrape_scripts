var line_ = document.querySelector('#footer>table>tbody>tr>td>hr');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name', 'Profession', 'License Type', 'License Number', 'License Status', 'Address 1', 'Address 2', 'City', 'County', 'Zip Code', 'State', 'License Issue Date', 'License Expiration Date', 'License Action'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not(:last-child):not(:first-child)');
for (i of rows) {
	var detailsLink = i.querySelector('td>a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var no_detail = detailsPage.querySelectorAll('#fac_search>ul>li>a');
	if (no_detail[0] == undefined) {
		var labels_a = detailsPage.querySelectorAll('.Labelheader');
		var values_ = detailsPage.querySelectorAll('.layout>tbody>tr>td>table>tbody>tr>td>span>table>tbody>tr>td>table[role="presentation"]>tbody>tr>td>span:not([class="Labelheader"]):not([class="labelheader"]');
		var disc_a = detailsPage.querySelectorAll('.layout>tbody>tr>td>table>tbody>tr>td>span>table');
		if (labels_a[2].textContent == 'Line 1:') {
			var name_ = values_[0].textContent;
			var address_1 = values_[1].textContent;
			var address_2 = values_[2].textContent;
			var city_ = values_[3].textContent;
			var county_ = values_[4].textContent;
			var zip_ = values_[5].textContent;
			var state_ = values_[6].textContent;
			var profession_ = values_[7].textContent;
			var number_ = values_[8].textContent;
			var type_ = values_[9].textContent;
			var status_ = values_[10].textContent;
			var issued_ = values_[11].textContent;
			var expired_ = values_[12].textContent;
			var disc_ = disc_a[4].textContent;
		} else {
			var name_ = values_[0].textContent;
			var address_1 = '';
			var address_2 = '';
			var city_ = '';
			var county_ = '';
			var zip_ = '';
			var state_ = '';
			var profession_ = values_[1].textContent;
			var number_ = values_[2].textContent;
			var type_ = values_[3].textContent;
			var status_ = values_[4].textContent;
			var issued_ = values_[5].textContent;
			var expired_ = values_[6].textContent;
			var disc_ = disc_a[3].textContent;
		}
	} else {
		var values_ = rows[i].querySelectorAll('td');
		var name_ = values_[0].textContent;
		var profession_ = values_[1].textContent;
		var type_ = values_[2].textContent;
		var number_ = values_[3].textContent;
		var status_ = values_[4].textContent;
		var address_1 = '';
		var address_2 = '';
		var city_ = '';
		var county_ = '';
		var zip_ = '';
		var state_ = '';
		var issued_ = '';
		var expired_ = '';
		var disc_ = '';
	}
		var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		[name_, profession_, type_, number_, status_, address_1, address_2, city_, county_, zip_, state_, issued_, expired_, disc_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = i.querySelectorAll('td');
			for (i of cells_) {
				i.remove();
			}
	}
if (rows.length == 1) {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (i of header_a) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
line_.appendChild(new_table_);