var input_ = document.querySelector('#lblSearch');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name','License Number','License Type','License Status','License Issue Date','License Expiration Date','License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#dtgResults>tbody>tr>td>a');
if (rows[0] != undefined) {
	for (var i = 0; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i];
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var full_name_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblFullName').textContent;
		var number_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblLicenseNumber').textContent;
		var type_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblLicenseType').textContent;
		var status_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblLicenseStatusID').textContent;
		var lid_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblDateIssued').textContent;
		var led_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblRegExpireDate').textContent;
		var disc_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblPublicAction').textContent;
		[full_name_,number_,type_,status_,lid_,led_,disc_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
input_.appendChild(new_table_);