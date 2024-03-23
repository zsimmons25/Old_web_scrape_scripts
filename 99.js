var insert_node_ = document.querySelector('div.header');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','Number','Original Issue Date ','Expiration Date '];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('table.mGrid > tbody > tr:not([class=pgr]):not(:first-child)');
if (rows[0] != undefined) {
	for (i of rows) {
	  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
		var detailsLink = i.querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var keys_ = detailsPage.querySelectorAll('table > tbody > tr > td:nth-of-type(1)');
		var values_ = detailsPage.querySelectorAll('table > tbody > tr > td:nth-of-type(2)');
		var name_ = i.querySelector('td:nth-of-type(1)').textContent;
		var lic_ = values_[1].textContent;
		if (keys_[2].textContent == 'Expiration Date: '){
			var lid_ = '';
			var led_ = values_[2].textContent;
		}else {
			var lid_ = values_[2].textContent;
			var led_ = values_[3].textContent;
		}
		[name_,lic_,lid_,led_].forEach(x => record_.insertCell(-1).textContent = x);
		new_table_.appendChild(record_);
		var cells_ = i.querySelectorAll('td');
	  	for (i of cells_) {
	  		i.remove();
	  	}
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (i of header_a) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
insert_node_.appendChild(new_table_);