let input_ = document.querySelector('#global-content>h2');
let new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
let header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
let header_a = ['Name','City','License Number','License Type','License Expiration Date','License Issue Date','License Term','License Status','License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
let rows = document.querySelectorAll('.table.table-bordered.table-striped.results>tbody>tr');
if (rows[0] != undefined) {
	for (let i = 0; i < rows.length; i++) {
	  	let lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		let detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		let detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		let values_ = detailsPage.querySelectorAll('.resultList>strong');
		let name_ = values_[0].textContent;
		let city_ = values_[1].textContent;
		let number_ = values_[2].textContent;
		let type_ = values_[3].textContent;
		let led_ = values_[4].textContent;
		let lid_ = values_[5].textContent;
		let term_ = values_[6].textContent;
		let status_ = values_[7].textContent;
		let disc_ = values_[8].textContent;
		[name_,city_,number_,type_,led_,lid_,term_,status_,disc_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		let cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<3;z++) {
	  		cells_[z].remove();
	  	}
	}
} else {
	let blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
input_.appendChild(new_table_);