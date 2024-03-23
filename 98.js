var insert_node_ = document.querySelector('#ctl00_ContentPlaceHolder1_PipCertDiv > p > i');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','City_State','County','License Number','License Status','License Issue Date','License Expiration Date','Phone'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}

var brs_ = document.querySelectorAll('table[rules="rows"]>tbody>tr:not([align="center"])>td>b>br');
for (i of brs_) {
	i.textContent = '|';
}

var brs_2 = document.querySelectorAll('table[rules="rows"]>tbody>tr>td>table>tbody>tr>td>br');
for (i of brs_2) {
	i.textContent = '|';
}

var rows_ = document.querySelectorAll('table[rules="rows"]>tbody>tr:not([align="center"])');
for (i of rows_) {
	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
	var trs_ = i.querySelectorAll('table[rules="rows"]>tbody>tr:not([align="center"])>td>table>tbody>tr');
	var name_add = i.querySelector('td>b');
	var name_ = name_add.textContent.split('|')[0];
	var city_ = name_add.textContent.split('|')[1];
	var county_ = name_add.textContent.split('|')[2];
	var values_1_col = trs_[0].textContent.split('|');
	var values_1 = [];
	for (i of values_1_col) {
		values_1.push(i.split(':')[1]);
	}
	[name_,city_,county_].forEach(x => record_.insertCell(-1).textContent = x);
	values_1.forEach(x => record_.insertCell(-1).textContent = x);
	new_table_.appendChild(record_);
}
insert_node_.appendChild(new_table_);