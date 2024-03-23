var input_ = document.querySelector('#ctl00_ContentPlaceHolderMiddleColumn_pnlGridViewComments > table > tbody > tr > td');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','License Number','Title','License Issue Date','License Expiration Date','License Status','License Action'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('#ctl00_ContentPlaceHolderMiddleColumn_GridView1>tbody>tr:not(:first-child):not(:last-child)');
if (rows[0] != undefined) {
	for (i of rows) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = i.querySelector('td:nth-of-type(1)>a');
		var lic_type_ind = i.querySelector('td:nth-of-type(2)');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_1 = detailsPage.querySelectorAll('#ctl00_ContentPlaceHolderMiddleColumn_dlDetails1 > tbody > tr:nth-of-type(2) > td > table > tbody > tr > td:nth-of-type(2)');
		var values_2 = detailsPage.querySelectorAll('#ctl00_ContentPlaceHolderMiddleColumn_dlDetails1 > tbody > tr:nth-of-type(4) > td > table > tbody > tr > td:nth-of-type(2)');
		if (values_2[0] == undefined) {
			var name_ = detailsLink.textContent;
			var lic_no = values_1[1].textContent;
			var title_ = values_1[2].textContent;
			var lid_ = values_1[3].textContent;
			var led_ = values_1[4].textContent;
			var status_ = values_1[5].textContent;
			var disc_ = values_1[6].textContent;
		} else if (lic_type_ind.textContent == values_1[1].querySelector('span:nth-of-type(1)').textContent) {
			var name_ = detailsLink.textContent;
			var lic_no = values_1[1].textContent;
			var title_ = values_1[2].textContent;
			var lid_ = values_1[3].textContent;
			var led_ = values_1[4].textContent;
			var status_ = values_1[5].textContent;
			var disc_ = values_1[6].textContent;
		} else if (lic_type_ind.textContent == values_2[1].querySelector('span:nth-of-type(1)').textContent) {
			var name_ = detailsLink.textContent;
			var lic_no = values_2[1].textContent;
			var title_ = values_2[2].textContent;
			var lid_ = values_2[3].textContent;
			var led_ = values_2[4].textContent;
			var status_ = values_2[5].textContent;
			var disc_ = values_2[6].textContent;
		} else {
			var name_ = detailsLink.textContent;
			var lic_no = lic_type_ind.textContent+i.querySelector('td:nth-of-type(3)').textContent;
			var title_ = '';
			var lid_ = '';
			var led_ = '';
			var status_ = i.querySelector('td:nth-of-type(4)').textContent;;
			var disc_ = '';
		}
		[name_,lic_no,title_,lid_,led_,status_,disc_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = i.querySelectorAll('td');
	  	for (i of cells_) {
	  		i.remove();
	  	}
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (i of header_a) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
input_.appendChild(new_table_);
