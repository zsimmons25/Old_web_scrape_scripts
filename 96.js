var insert_node_ = document.querySelector('table[rules="rows"]>tbody');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','City_State','County','License Number','License Status','License Issue Date','License Expiration Date','Phone','Social Case Work','Clinical Social Work','Social Work Administration','Community Organization','Social Work Research'];
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
	values_1_col.pop();
	var values_2_col = trs_[1].textContent.split('|');
	var values_1 = [];
	var values_2 = [];
	for (j of values_1_col) {
		values_1.push(j.split(':')[1]);
	}
	for (x=3;x<values_2_col.length;x++) {
		values_2.push(values_2_col[x].split(':')[1]);
	}
	[name_,city_,county_].forEach(x => record_.insertCell(-1).textContent = x);
	values_1.forEach(x => record_.insertCell(-1).textContent = x);
	values_2.forEach(x => record_.insertCell(-1).textContent = x);
	new_table_.appendChild(record_);
	i.remove();
}
insert_node_.appendChild(new_table_);