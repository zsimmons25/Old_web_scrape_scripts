var input_ = document.querySelector('.PageTitle');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','License Number','License Status','License Issue Date','License Expiration Date'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('.therapist_rows>tbody>tr');
var names_ = document.querySelectorAll('.therapist_rows>tbody>tr>td[class]');
var license_a = document.querySelectorAll('.therapist_rows>tbody>tr>td:not([class])');
var nav_ = -1;
for (i=0;i<rows.length;i++) {
	if (rows[i].querySelector('td').getAttribute("class") == "search_name BodyCopy") {
		nav_+=1;
		var name_n = names_[nav_];
		var name_ = name_n.textContent;
		var license_ = license_a[(nav_*2)].textContent;
		var number_ = license_.split('License: ')[1].split('Status: ')[0];
		var status_ = license_.split('Status: ')[1].split('Effective: ')[0];
		var lid_ = license_.split('Licensed Since: ')[1];
		var led_ = license_.split('- ')[1].split('Licensed Since: ')[0];
		var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		[name_,number_,status_,lid_,led_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
	}
	rows[i].remove();
}
input_.appendChild(new_table_);