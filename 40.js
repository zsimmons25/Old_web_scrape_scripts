var input_ = document.querySelector('#instructions_top');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name','Credential','License Number','License Type','Secondary','License Status','License Issue Date','License Expiration Date','License Action','Address','Address 2','CSZ','County'];
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
		var values_ = detailsPage.querySelectorAll('.rdata');
		if (values_[0] == undefined) {
			var full_name_ = rows[i].querySelector('td:nth-of-type(1)').textContent.trim();
			var credential_ = '';
			var number_ = rows[i].querySelector('td:nth-of-type(4)').textContent.trim();
			var type_ = rows[i].querySelector('td:nth-of-type(2)').textContent.trim();
			var secondary_ = '';
			var status_ = rows[i].querySelector('td:nth-of-type(3)').textContent.trim();
			var lid_ = '';
			var led_ = '';
			var address_ = '';
			var address_2 = '';
			var csz_ = rows[i].querySelector('td:nth-of-type(5)').textContent.trim();
			var county_ = '';
			var disc_ = '';
		}else {
			var secondary_i = detailsPage.querySelectorAll('#_ctl39__ctl1_label_second');
			if (secondary_i[0] == undefined) {
				var full_name_ = values_[0].textContent;
				var credential_ = values_[1].textContent;
				var number_ = values_[2].textContent;
				var type_ = values_[3].textContent;
				var secondary_ = '';
				var status_ = values_[4].textContent;
				var lid_ = values_[5].textContent;
				var led_ = values_[6].textContent;
				var address_ = values_[7].textContent;
				var address_2 = values_[8].textContent;
				var csz_ = values_[9].textContent;
				var county_ = values_[10].textContent;
			}else{
				var full_name_ = values_[0].textContent;
				var credential_ = values_[1].textContent;
				var number_ = values_[2].textContent;
				var type_ = values_[3].textContent;
				var secondary_ = values_[4].textContent;
				var status_ = values_[5].textContent;
				var lid_ = values_[6].textContent;
				var led_ = values_[7].textContent;
				var address_ = values_[8].textContent;
				var address_2 = values_[9].textContent;
				var csz_ = values_[10].textContent;
				var county_ = values_[11].textContent;
			}
			var disc_i = detailsPage.querySelector('#more_details>table>tbody>tr:nth-of-type(32)');
			if (disc_i.textContent.trim().includes('Public Board Order')) {
				disc_ = 'Yes';
			}else {
				disc_ = 'No';
			}
		}
		[full_name_,credential_,number_,type_,secondary_,status_,lid_,led_,disc_,address_,address_2,csz_,county_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<10;z++) {
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