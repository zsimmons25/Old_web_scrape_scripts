var input_ = document.querySelector('#form>div>table>tbody>tr>td>div>div>h3');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name','First Name','Last Name','License Number','License Status','License Issue Date','License Expiration Date'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#bodyContentPlaceHolder_verificationNameGridView>tbody>tr');
if (rows[1] != undefined) {
	for (var i = 1; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
	  	var last_name_ = rows[i].querySelector('td:nth-of-type(1)').textContent;
	  	var first_name_ = rows[i].querySelector('td:nth-of-type(2)').textContent;
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_ = detailsPage.querySelectorAll('#bodyContentPlaceHolder_DetailsView1>tbody>tr>td:nth-of-type(2)');
		var full_name_ = values_[0].textContent;
		var number_ = values_[1].textContent;
		var status_ = values_[2].textContent;
		var led_ = values_[3].textContent;
		var lid_ = values_[4].textContent;
		[full_name_,first_name_,last_name_,number_,status_,lid_,led_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<4;z++) {
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