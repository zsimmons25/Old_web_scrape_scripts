var insert_node_ = document.querySelector('table[rules="rows"]>tbody');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','City_State','County','License Number','License Status','License Type','License Issue Date','License Expiration Date'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}

var brs_ = document.querySelectorAll('table[rules="rows"]>tbody>tr:not([align="center"])>td>b>br');
for (i of brs_) {
	i.textContent = '|';
}

var brs_2 = document.querySelectorAll('table[rules="rows"]>tbody>tr:not([align="center"])>td:nth-of-type(2)>br');
for (i of brs_2) {
	i.textContent = '|';
}

var rows_ = document.querySelectorAll('table[rules="rows"]>tbody>tr:not([align="center"])');
for (i of rows_) {
	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
	var trs_ = i.querySelectorAll('table[rules="rows"]>tbody>tr:not([align="center"])>td:nth-of-type(2)');
	var name_add = i.querySelector('td>b');
	var name_ = name_add.textContent.split('|')[0];
	var city_ = name_add.textContent.split('|')[1];
	var county_ = name_add.textContent.split('|')[2];
	var values_1_col = trs_[0].textContent.split('|');
	var values_1 = [];
	for (x=1;x<values_1_col.length;x++) {
		values_1.push(values_1_col[x].split(':')[1]);
	}
	[name_,city_,county_].forEach(x => record_.insertCell(-1).textContent = x);
	values_1.forEach(x => record_.insertCell(-1).textContent = x);
	new_table_.appendChild(record_);
	i.remove();
}
insert_node_.appendChild(new_table_);