var rows = document.querySelectorAll('.simpleborder>tbody>tr');
rows[0].insertCell(-1).textContent = 'License Date'; rows[0].insertCell(-1).textContent = 'Expires'; rows[0].insertCell(-1).textContent = 'Disciplinary Actions';

for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('.tabular-right');
	lid_ = values_[12].textContent;
	expire_ = values_[13].textContent;
	disc_ = values_[14].textContent;
	rows[i].insertCell(-1).textContent = lid_;   rows[i].insertCell(-1).textContent = expire_; rows[i].insertCell(-1).textContent = disc_;
}