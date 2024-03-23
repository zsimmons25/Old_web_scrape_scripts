function load(url, element) {   req = new XMLHttpRequest();   req.open('GET', url, false);   req.send(null);   element.innerHTML = req.responseText; }; var links = document.querySelectorAll('#cBody_GridView1>tbody>tr>td>a'); for (i = 0; i < links.length; i++) {   var div = document.body.appendChild(document.createElement('div'));   div.setAttribute('class','record');   load(links[i].href, div); };

var rows = document.querySelectorAll('#cBody_GridView1>tbody>tr:not(:last-of-type)'); rows[0].insertCell(-1).textContent = 'Hospital'; rows[0].insertCell(-1).textContent = 'Address'; rows[0].insertCell(-1).textContent = 'CSZ'; rows[0].insertCell(-1).textContent = 'Status'; rows[0].insertCell(-1).textContent = 'License Issued'; rows[0].insertCell(-1).textContent = 'License Expires'; rows[0].insertCell(-1).textContent = 'School'; rows[0].insertCell(-1).textContent = 'Disciplinary Action';

for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	request     = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	hospital_ = detailsPage.querySelector('#cBody_lblAddressSiteName').textContent;
	address_ = detailsPage.querySelector('#cBody_lblLicenseeAddress2').textContent;
	csz_ = detailsPage.querySelector('#cBody_lblLicenseeAddress3').textContent;
	status_ = detailsPage.querySelector('#cBody_lblDisplayStatus').textContent;
	lid_ = detailsPage.querySelector('#cBody_lblDisplayIssueDate').textContent;
	eid_ = detailsPage.querySelector('#cBody_lblDisplayExpirationDate').textContent;
	school_ = detailsPage.querySelector('#cBody_lblSchoolAttended').textContent;
	discipline_ = detailsPage.querySelector('#form1>div>center:nth-of-type(3)').textContent.replace('New Search','');
	rows[i].insertCell(-1).textContent = hospital_;   rows[i].insertCell(-1).textContent = address_; rows[i].insertCell(-1).textContent = csz_; rows[i].insertCell(-1).textContent = status_; rows[i].insertCell(-1).textContent = lid_; rows[i].insertCell(-1).textContent = eid_; rows[i].insertCell(-1).textContent = school_; rows[i].insertCell(-1).textContent = discipline_;
}