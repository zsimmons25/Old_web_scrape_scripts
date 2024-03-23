var line_ = document.querySelector('#footer>table>tbody>tr>td>hr');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name', 'Profession', 'License Type', 'License Number', 'License Status', 'Address 1', 'Address 2', 'City', 'County', 'Zip Code', 'State', 'Phone', 'License Issue Date', 'License Expiration Date', 'License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not(:last-child)');
for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('td>a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var no_detail = detailsPage.querySelectorAll('#fac_search>ul>li>a');
	if (no_detail[0] == undefined) {
		var labels_a = detailsPage.querySelectorAll('.Labelheader');
		var values_ = detailsPage.querySelectorAll('.layout>tbody>tr>td>table>tbody>tr>td>span>table>tbody>tr>td>table[role="presentation"]>tbody>tr>td>span:not([class="Labelheader"]):not([class="labelheader"]');
		var disc_a = detailsPage.querySelectorAll('.layout>tbody>tr>td>table>tbody>tr>td>span>table');
		var home_state_ = detailsPage.querySelectorAll('#_ctl31__ctl1_Home_State');
		if (home_state_[0] == undefined) {
			var name_ = values_[0].textContent;
			var address_1 = '';
			var address_2 = '';
			var city_ = '';
			var county_ = '';
			var zip_ = '';
			var state_ = '';
			var phone_ = '';
			var number_ = values_[1].textContent;
			var profession_ = values_[2].textContent;
			var type_ = values_[3].textContent;
			var status_ = values_[4].textContent;
			var issued_ = values_[5].textContent;
			var expired_ = values_[6].textContent;
			var disc_ = disc_a[3].textContent;
		} else {
			var name_ = values_[0].textContent;
			var address_1 = '';
			var address_2 = '';
			var city_ = '';
			var county_ = '';
			var zip_ = '';
			var state_ = '';
			var phone_ = '';
			var number_ = values_[2].textContent;
			var profession_ = values_[3].textContent;
			var type_ = values_[4].textContent;
			var status_ = values_[5].textContent;
			var issued_ = values_[6].textContent;
			var expired_ = values_[7].textContent;
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
		[name_, profession_, type_, number_, status_, address_1, address_2, city_, county_, zip_, state_, phone_, issued_, expired_, disc_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
			for (y=0;y<5;y++) {
				cells_[y].remove();
			}
	}
if (rows.length == 1) {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
line_.appendChild(new_table_);