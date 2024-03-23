var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not([style="color:Black;background-color:#F2F2F5;"])');
rows[0].insertCell(-1).textContent = 'Address 1'; rows[0].insertCell(-1).textContent = 'Adress 2'; rows[0].insertCell(-1).textContent = 'City'; rows[0].insertCell(-1).textContent = 'County';
rows[0].insertCell(-1).textContent = 'Zip'; rows[0].insertCell(-1).textContent = 'State'; rows[0].insertCell(-1).textContent = 'Issue Date'; rows[0].insertCell(-1).textContent = 'Expiartion Date'; rows[0].insertCell(-1).textContent = 'Action';

for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('.layout>tbody>tr>td>table>tbody>tr>td>span>table>tbody>tr>td>table>tbody>tr>td:nth-of-type(3)');
	no_discipline = detailsPage.querySelector('.layout>tbody>tr>td>table>tbody>tr>td>span>table>tbody>tr>td[align="center"]');
	add_1 = values_[1].textContent;
	add_2 = values_[2].textContent;
	city_ = values_[3].textContent;
	county_ = values_[4].textContent;
	zip_ = values_[5].textContent;
	state_ = values_[6].textContent;
	issue_ = values_[11].textContent;
	expire_ = values_[12].textContent;
	if (no_discipline == undefined) {
		action_ = 'Y';
	} else {
		action_ = 'N';
	}
	rows[i].insertCell(-1).textContent = add_1;   rows[i].insertCell(-1).textContent = add_2; rows[i].insertCell(-1).textContent = city_; rows[i].insertCell(-1).textContent = county_;
	rows[i].insertCell(-1).textContent = zip_; rows[i].insertCell(-1).textContent = state_; rows[i].insertCell(-1).textContent = issue_; rows[i].insertCell(-1).textContent = expire_; rows[i].insertCell(-1).textContent = action_;
}