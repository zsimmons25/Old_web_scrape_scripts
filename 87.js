var input_ = document.querySelector('font[size="+1"]');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['First Name', 'Middle Name', 'Last Name', 'License Number', 'License Type', 'Details'];
for (w=0;w<header_a.length;w++) {
	header_.insertCell(-1).textContent = header_a[w];
}
var no_match_n = document.querySelector('#DataTable>tbody>tr>td>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)');
var no_match = no_match_n.textContent;
if (no_match != "Criteria entered does not match anyone in system or the individual's certification is not active.") {
	var rows = document.querySelectorAll('#DataTable>tbody>tr>td>table>tbody>tr');
	for (var i = 1; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i].querySelector('a');
		var first_name = rows[i].querySelector('td:nth-of-type(2)').textContent;
		var mid_name = rows[i].querySelector('td:nth-of-type(3)').textContent;
		var last_name = rows[i].querySelector('td:nth-of-type(4)').textContent;
		var lic_no = rows[i].querySelector('td:nth-of-type(5)').textContent;
		var lic_type = rows[i].querySelector('td:nth-of-type(6)').textContent;
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_br = detailsPage.querySelectorAll('#DataTable>tbody>tr>td>table>tbody>tr>td:nth-of-type(2)>br');
		if (values_br[0] == undefined) {
			var deatils_ = '';
		} else {
			for (x=0; x<values_br.length;x++) {
	  			values_br[x].textContent = '|';
			}
			var values_ = detailsPage.querySelector('#DataTable>tbody>tr>td>table>tbody>tr>td:nth-of-type(2)');
			var deatils_ = values_.textContent;
		}
		[first_name, mid_name, last_name, lic_no, lic_type, deatils_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
	  	for (y=0;y<6;y++) {
	  		cells_[y].remove();
	  	}
	}
}else {
	console.log('No Match');
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
  	blank_row.insertCell(-1).textContent = 'redacted';
  	new_table_.appendChild(blank_row);
  }
}
input_.appendChild(new_table_);