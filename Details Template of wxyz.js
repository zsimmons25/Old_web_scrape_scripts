var insert_node_ = document.querySelector('');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name'];
for (w of header_a) {
	header_.insertCell(-1).textContent = w;
}
var rows = document.querySelectorAll('');
if (rows[0] != undefined) {
	for (x of rows) {
	  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
		var detailsLink = x.querySelector('');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		/* var values_ = detailsPage.querySelectorAll('');
		var name_ = values_[].textcontent; */
		var name_ = detailsPage.querySelector('').textContent;
		[name_].forEach(x => record_.insertCell(-1).textContent = x);
		new_table_.appendChild(record_);
		var cells_ = x.querySelectorAll('td');
	  	for (y of cells_) {
	  		y.remove();
	  	}
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z of header_a) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
insert_node_.appendChild(new_table_);