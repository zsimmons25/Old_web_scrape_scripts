var input_ = document.querySelector('#Back_to_Search');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','License Number','Profession','License Type','License Issue Date','License Expiration Date','License Status','City','State','Zip Code','Country','License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not([bgcolor="#993300"])');
if (rows[0] != undefined) {
	for (var i = 0; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
	  	var name_ = rows[i].querySelector('td:nth-of-type(1)').textContent;
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_ = detailsPage.querySelectorAll('td[class="dlabel"]:not([width])');
		if (values_[0] != undefined) {
			var number_ = values_[1].textContent;
			var profession_ = values_[2].textContent;
			var type_ = values_[3].textContent;
			var lid_ = values_[4].textContent;
			var led_ = values_[5].textContent;
			var status_ = values_[6].textContent;
			if (values_[8] != undefined) {
				var city_ = values_[8].textContent;
				var state_ = values_[9].textContent;
				var zip_ = values_[10].textContent;
				var country_ = values_[11].textContent;
			} else {
				var city_ = '';
				var state_ = '';
				var zip_ = '';
				var county_ = '';
			}
			var disc_i = detailsPage.querySelectorAll('td[class="bigred"]');
			if (disc_i[0] == undefined) {
				var disc_ = 'None';
			} else {
				var disc_a = [];
				for (x=0;x<disc_i.length;x++) {
				  disc_a.push(disc_i[x].textContent);
				}
				var disc_ = disc_a.join(' | ');
			}
		}else {
			var number_ = rows[i].querySelector('td:nth-of-type(2)').textContent;
			var profession_ = rows[i].querySelector('td:nth-of-type(3)').textContent;
			var type_ = rows[i].querySelector('td:nth-of-type(4)').textContent;
			var status_ = rows[i].querySelector('td:nth-of-type(5)').textContent;
			var lid_ = '';
			var led_ = '';
			var city_ = '';
			var state_ = '';
			var zip_ = '';
			var county_ = '';
		}
		[name_,number_,profession_,type_,lid_,led_,status_,city_,state_,zip_,country_,disc_].forEach(x => lic_.insertCell(-1).textContent = x);
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