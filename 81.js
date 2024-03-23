var input_ = document.querySelector('#instructions_top>ol');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name','Owner','Adress','Address 2','CSZ','License Number','Profession','License Type','Secondary','Obtained By','License Status','License Issue Date','License Expiration Date'];
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
		var address_i = detailsPage.querySelector('td[align="center"]');
		if (address_i.textContent == 'Error retrieving address information') {
			var full_name_ = values_[0].textContent;
			var owner_ = values_[1].textContent;
			var number_ = values_[2].textContent;
			var profession_ = values_[3].textContent;
			var type_ = values_[4].textContent;
			var secondary_ = values_[5].textContent;
			var obtained_ = values_[6].textContent;
			var status_ = values_[7].textContent;
			var lid_ = values_[8].textContent;
			var led_ = values_[9].textContent;
		}else {
			var full_name_ = values_[0].textContent;
			var owner_ = values_[1].textContent;
			var address_ = values_[2].textContent;
			var address_2 = detailsPage.querySelector('#_ctl28__ctl1_addr_line_2').textContent;
			var csz_ = values_[4].textContent;
			var number_ = values_[5].textContent;
			var profession_ = values_[6].textContent;
			var type_ = values_[7].textContent;
			var secondary_ = values_[8].textContent;
			var obtained_ = values_[9].textContent;
			var status_ = values_[10].textContent;
			var lid_ = values_[11].textContent;
			var led_ = values_[12].textContent;
		}
		[full_name_,owner_,address_,address_2,csz_,number_,profession_,type_,secondary_,obtained_,status_,lid_,led_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
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