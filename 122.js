var input_ = document.querySelector('.PageHeader');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','Designation','License Issue Date','License Expiration Date','License Number','License Action','Company','City','State','Zip Code','Phone','Civil'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('.formtext>tbody>tr');
if (rows[2] != undefined) {
	for (var i = 2; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var brs_ = detailsPage.querySelectorAll('.form>table>tbody>tr>td>br');
		for (j=0;j<brs_.length;j++) {
			brs_[j].textContent = '|';
		}
		var values_ = detailsPage.querySelector('.form>table>tbody>tr>td').textContent;
		var name_ = values_.split(':')[1].split('|')[0];
		var designation_ = values_.split(':')[2].split('|')[0];
		var lid_ = values_.split(':')[3].split('|')[0];
		var led_ = values_.split(':')[4].split('|')[0];
		var number_ = values_.split(':')[5].split('|')[0];
		var disc_ = values_.split(':')[6].split('|')[0];
		var company_ = values_.split(':')[7].split('|')[0];
		var city_ = values_.split(':')[8].split('|')[0];
		var state_ = values_.split(':')[9].split('|')[0];
		var zip_ = values_.split(':')[10].split('|')[0];
		var phone_ = values_.split(':')[11].split('|')[0];
		var civil_ = values_.split(':')[12].split('|')[0];
		[name_,designation_,lid_,led_,number_,disc_,company_,city_,state_,zip_,phone_,civil_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<7;z++) {
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