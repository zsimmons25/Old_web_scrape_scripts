var rows = document.querySelectorAll('#cBody_GridView1>tbody>tr:not(:last-of-type)'); 

if (rows[0] != undefined) {
	rows[0].insertCell(-1).textContent = 'Address'; rows[0].insertCell(-1).textContent = 'CSZ'; rows[0].insertCell(-1).textContent = 'License Number'; rows[0].insertCell(-1).textContent = 'License Issued'; rows[0].insertCell(-1).textContent = 'License Expires'; rows[0].insertCell(-1).textContent = 'License Action';

	for (var i = 1; i < rows.length; i++) {
		var detailsLink = rows[i].querySelector('a');
		request     = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		address_ = detailsPage.querySelector('#cBody_lblLicenseeAddress2').textContent;
		csz_ = detailsPage.querySelector('#cBody_lblLicenseeAddress3').textContent;
		phone_ = detailsPage.querySelector('#cBody_lblPhone').textContent;
		ln_ = detailsPage.querySelector('#cBody_lblDisplayLicenseNumber').textContent;
		lid_ = detailsPage.querySelector('#cBody_lblDisplayIssueDate').textContent;
		eid_ = detailsPage.querySelector('#cBody_lblDisplayExpirationDate').textContent;
		discipline_ = detailsPage.querySelector('#form1>div>center:nth-of-type(3)').textContent.replace('New Search','');
		rows[i].insertCell(-1).textContent = address_; rows[i].insertCell(-1).textContent = csz_; rows[i].insertCell(-1).textContent = ln_; rows[i].insertCell(-1).textContent = lid_; rows[i].insertCell(-1).textContent = eid_; rows[i].insertCell(-1).textContent = discipline_;
	}
}