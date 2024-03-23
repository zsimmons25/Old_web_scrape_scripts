// https://search.statesolutions.us/?A=ARVET&AID=RS

var rows = document.querySelectorAll('#table>tbody>tr');
var header = document.querySelectorAll('#table>thead>tr'); header[0].insertCell(-1).textContent = 'Original Issue Date'; header[0].insertCell(-1).textContent = 'Expiration Date'; header[0].insertCell(-1).textContent = 'Disciplinary Action';

for (var i = 0; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var error_ = detailsPage.querySelector('.content-container>fieldset>h2');
	if (error_ != undefined) {
		data_ = '';
		lid_ = '';
		expire_ = '';
		disc_ = '';
		zip_ = '';
	} else {
		data_ = detailsPage.querySelector('.col-xs-12.col-sm-12.col-md-12.col-lg-12.text-center>h4:nth-of-type(3)').textContent;
		lid_ = data_.split("Original Issue Date:")[1].split("Expiration Date:")[0];
		expire_ = data_.split("Expiration Date:")[1].split("Disciplinary Action:")[0];
		disc_ = data_.split("Disciplinary Action:")[1];
	};
	rows[i].insertCell(-1).textContent = lid_;   rows[i].insertCell(-1).textContent = expire_; rows[i].insertCell(-1).textContent = disc_;
}