var rows = document.querySelectorAll('#ctl00_ContentPlaceHolder1_dtgResults>tbody>tr:not([align="center"])');
rows[0].insertCell(-1).textContent = 'Address'; rows[0].insertCell(-1).textContent = 'Original Issue Date'; rows[0].insertCell(-1).textContent = 'Expiartion Date'; rows[0].insertCell(-1).textContent = 'Disciplinary Actions';

for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('#Table4>tbody>tr>td:nth-of-type(2)');
	var address_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblAddress');
	var disc_ = detailsPage.querySelector('#ctl00_ContentPlaceHolder1_lblDisciplinaryAction');
	lid_ = values_[4].textContent;
	expire_ = values_[6].textContent;
	rows[i].insertCell(-1).textContent = address_; rows[i].insertCell(-1).textContent = lid_;   rows[i].insertCell(-1).textContent = expire_; rows[i].insertCell(-1).textContent = disc_;
}