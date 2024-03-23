var cells = document.querySelectorAll('table>tbody>tr:nth-of-type(n+2)>td');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = document.createElement('tr');header_.setAttribute('class', 'redacted');header_.insertCell(-1).textContent = 'Name & Lic No';header_.insertCell(-1).textContent = 'City & State';header_.insertCell(-1).textContent = 'License Action';header_.insertCell(-1).textContent = 'Action Date';new_table_.appendChild(header_);
var input_ = document.querySelector('.content>div');
var rows = cells.length / 4;
var x = 0;

for (y=0;y<rows;y++) {
	var record_ = new_table_.insertRow(-1);record_.setAttribute('class', 'redacted');
	for (z=1;z<5;z++) {
		record_.insertCell(-1).textContent = cells[x].textContent;
		x++;
	}
}
input_.appendChild(new_table_);

//-----------------------------------------------------------------------------------------------

var tables_ = document.querySelectorAll('table');

for (w=0;w<tables_.length;w++) {
	tables_[w].remove();
}

var spans_ = document.querySelectorAll('span');

for (v=0;v<spans_.length;v++) {
	spans_[v].remove();
}