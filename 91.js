// https://appsmqa.doh.state.fl.us/MQASearchServices/HealthCareProviders

// Searching on `BOARD OF PHARMACY` and `Pharmacist`

var rows_ = document.querySelectorAll('.table.table-striped.table-condensed.table-hover>tbody>tr:not([class])');
var header_ = document.querySelector('.table.table-striped.table-condensed.table-hover>thead>tr');
var header_a = ['License Expiration Date','License Orginal Issue Date','Discipline','Public Complaints'];

for (h=0;h<header_a.length;h++) {
	header_.insertCell(-1).textContent = header_a[h];
}

for (var i = 0; i < rows_.length; i++) {
	var detailsLink = rows_[i].querySelector('a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var keys_ = detailsPage.querySelectorAll('.dl-horizontal>dt');
	var values_ = detailsPage.querySelectorAll('.dl-horizontal>dd');
	var keys_a = ['License Expiration Date','License Original Issue Date','Discipline on File','Public Complaint'];
	var values_h = {"expire_": "", "lid_": "", "disc_": "", "public_complaint": ""};
	var values_a = ["expire_", "lid_", "disc_", "public_complaint"];
	for (k=0;k<keys_.length;k++) {
		if (keys_a.some(x => x == (keys_[k].textContent.trim()))) {
			var l = keys_a.indexOf((keys_[k].textContent.trim()));
			if (l != (-1)) {
				values_h[values_a[l]] = (values_[k].textContent.trim());
			}
		}
	}
	for (j in values_h) {
		rows_[i].insertCell(-1).textContent = values_h[j];
	}
}