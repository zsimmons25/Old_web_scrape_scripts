var insert_node_ = document.querySelector('#reportTitleDiv > h3 > span.zc-view-name');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Profession','File Name','Link'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('table[class="htCore"]>tbody>tr');
if (rows[0] != undefined) {
	for (i of rows) {
	  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
		var values_ = i.querySelectorAll('td');
		var profession_ = values_[2].textContent;
		var file_name_ = values_[3].textContent;
		var link_ = values_[4].textContent;
		[profession_,file_name_,link_].forEach(x => record_.insertCell(-1).textContent = x);
		new_table_.appendChild(record_);
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (i of header_a) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
insert_node_.appendChild(new_table_);
