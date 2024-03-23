var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not([style="color:White;background-color:#4A5375;"])');
rows[0].insertCell(-1).textContent = 'Owner'; rows[0].insertCell(-1).textContent = 'Address 1'; rows[0].insertCell(-1).textContent = 'Address 2'; rows[0].insertCell(-1).textContent = 'Issue Date'; rows[0].insertCell(-1).textContent = 'Expiartion Date';
rows[0].insertCell(-1).textContent = 'Disciplinary Action'; rows[0].querySelector('th:nth-of-type(6)').textContent = 'CSZ';

for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('.rdata');
	var no_disc_ = detailsPage.querySelectorAll('.repeater>span>table>tbody>tr>td[align="center"]');
	owner_ = values_[1].textContent;
	address_1 = values_[2].textContent;
	address_2 = detailsPage.querySelector('#_ctl23__ctl1_addr_line_2').textContent;
	lid_ = values_[10].textContent;
	expire_ = values_[11].textContent;
	if (no_disc_[0] == undefined) {
		disc_ = 'Y'
	} else {
		disc_ = 'N'
	}
	rows[i].insertCell(-1).textContent = owner_;   rows[i].insertCell(-1).textContent = address_1; rows[i].insertCell(-1).textContent = address_2; rows[i].insertCell(-1).textContent = lid_; rows[i].insertCell(-1).textContent = expire_;
	rows[i].insertCell(-1).textContent = disc_;
}