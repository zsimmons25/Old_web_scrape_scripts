var values_br = document.querySelectorAll('#labSearch>tbody>tr>td>br');
for (y = 0; y < values_br.length; y++) {
  values_br[y].textContent = '|';
}
var rows = document.querySelectorAll('#labSearch>tbody>tr');
for (x=0;x<rows.length;x++) {
	var values_ = rows[x].querySelector('td:nth-of-type(4)').textContent.split('|');
	rows[x].insertCell().textContent = values_[0];
	rows[x].insertCell().textContent = values_[1];
	rows[x].insertCell().textContent = values_[2];
	rows[x].insertCell().textContent = values_[3];
}
var header_ = document.querySelector('#labSearch>thead>tr');
header_.insertCell().textContent = "Lab Name";
header_.insertCell().textContent = "Lab Address";
header_.insertCell().textContent = "Lab CSZ";
header_.insertCell().textContent = "Lab Phone";