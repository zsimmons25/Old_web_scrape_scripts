var input_ = document.querySelector('#data>tbody');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name', 'City and State', 'License Type', 'License Number', 'License Issue Date', 'License Expiration Date', 'License Status', 'License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#data>tbody>tr');
if (rows[0] != undefined) {
	for (var i = 0; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var name_ = detailsPage.querySelector('.data-container>h3').textContent;
		var city_state = detailsPage.querySelector('.data-container>p[style="margin: 0 0 20px 0"]').textContent;
		var values_ = detailsPage.querySelectorAll('.data-container>dl>dd');
		var type_ = values_[0].textContent;
		var number_ = values_[1].textContent;
		var lid_ = values_[2].textContent;
		var led_ = values_[3].textContent;
		var status_ = values_[4].textContent;
		var disc_ = values_[5].textContent;
		[name_,city_state,type_,number_,lid_,led_,status_,disc_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<5;z++) {
	  		cells_[z].remove();
	  	}
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
input_.appendChild(new_table_);

//----------------------------------------------------------------------------------------------------

var ifrm = document.querySelector('html>body>div#wrapper-content>div#content>iframe');
window.location.href = ifrm.getAttribute('src');