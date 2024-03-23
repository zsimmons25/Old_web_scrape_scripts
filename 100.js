// https://search.statesolutions.us/?A=ASPB&AID=RS

if (jsc == 1) {

}else {
	var rows = document.querySelectorAll('#table>tbody>tr');
	var header = document.querySelectorAll('#table>thead>tr'); header[0].insertCell(-1).textContent = 'Effective Date'; header[0].insertCell(-1).textContent = 'Expiartion Date'; header[0].insertCell(-1).textContent = 'Disciplinary Action'; header[0].insertCell(5).textContent = 'Zip Code';
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
			lid_ = data_.split("Effective Date:")[1].split("Expiration Date:")[0];
			expire_ = data_.split("Expiration Date:")[1].split("Disciplinary Actions:")[0];
			disc_ = data_.split("Disciplinary Actions:")[1].split("Zip Code:")[0];
			zip_ = data_.split("Zip Code:")[1];
		};
		rows[i].insertCell(-1).textContent = lid_;   rows[i].insertCell(-1).textContent = expire_; rows[i].insertCell(-1).textContent = disc_; rows[i].insertCell(5).textContent = zip_;
		jsc = 1;
	}
}