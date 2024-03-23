var input_ = document.querySelector('#pageForm');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','Address','County','License Type','License Number','Specialties','License Status','Limitations','License Issue Date','License Expiration Date','Employer','Employer License Number','Employer Address','Employer County','License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('.bg2');
if (rows[0] != undefined) {
	for (var i = 0; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_ = detailsPage.querySelectorAll('.bg2>td:nth-of-type(2)');
		var name_ = values_[0].textContent;
		var add_ = values_[1].textContent;
		var county_ = values_[2].textContent;
		var type_ = values_[3].textContent;
		var number_ = values_[4].textContent;
		var spec_ = values_[5].textContent;
		var status_ = values_[6].textContent;
		var limits_ = values_[7].textContent;
		var lid_ = values_[8].textContent;
		var led_ = values_[9].textContent;
		var employer_ = values_[11].textContent;
		var emp_num_ = values_[12].textContent;
		var emp_add_ = values_[13].textContent;
		var emp_county_ = values_[14].textContent;
	  	var disc_ = rows[i].querySelector('td:nth-of-type(7)').textContent;
		[name_,add_,county_,type_,number_,spec_,status_,limits_,lid_,led_,employer_,emp_num_,emp_add_,emp_county_,disc_].forEach(x => lic_.insertCell(-1).textContent = x);
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