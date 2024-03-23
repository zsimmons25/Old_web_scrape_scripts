var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not([style="color:White;background-color:#83A0C8;"])');
rows[0].insertCell(-1).textContent = 'Obtained By'; rows[0].insertCell(-1).textContent = 'Issue Date'; rows[0].insertCell(-1).textContent = 'Expiration Date'; rows[0].insertCell(-1).textContent = 'Specialty Information'; rows[0].insertCell(-1).textContent = 'Discipline Information';

for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	if (detailsLink != null) {
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('table[width="90%"]>tbody>tr>td:not([class="Labelheader"])>span[id*="_"]');
	var additonal_tables = detailsPage.querySelectorAll('.layout>tbody>tr>td>table>tbody>tr>td>span>table>tbody');
	obtained_by_ = values_[16].textContent;
	issue_date_ = values_[18].textContent;
	expiration_date = values_[19].textContent;
	specialty_info_ = additonal_tables[0].textContent;
	discipline_info_ = additonal_tables[1].textContent;
	rows[i].insertCell(-1).textContent = obtained_by_; rows[i].insertCell(-1).textContent = issue_date_; rows[i].insertCell(-1).textContent = expiration_date; rows[i].insertCell(-1).textContent = specialty_info_; rows[i].insertCell(-1).textContent = discipline_info_;	
	} else {
	rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = '';
	};
}