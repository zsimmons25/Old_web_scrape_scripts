// http://search.statesolutions.us/?A=ABEC&AID=RS

var rows = document.querySelectorAll('#table>tbody>tr');
var header = document.querySelectorAll('#table>thead>tr'); header[0].insertCell(-1).textContent = 'Effective Date'; header[0].insertCell(-1).textContent = 'Expiartion Date'; header[0].insertCell(-1).textContent = 'Standing';

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
		lid_ = data_.split("Date of Issue:")[1].split("Date of Expiration:")[0];
		expire_ = data_.split("Date of Expiration:")[1].split("Standing:")[0];
		disc_ = data_.split("Standing:")[1];
	};
	rows[i].insertCell(-1).textContent = lid_;   rows[i].insertCell(-1).textContent = expire_; rows[i].insertCell(-1).textContent = disc_;
}