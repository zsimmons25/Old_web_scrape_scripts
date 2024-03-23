var input_ = document.querySelector('.form-horizontal>legend');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Facility Name','Address 1','License Type','MQSA Number','License Number','MQSA Type','License Status','County'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#ExitTable>a');
if (rows[0] != undefined) {
	for (var i = 0; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		request = new XMLHttpRequest();
		request.open('GET', rows[i].href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_ = detailsPage.querySelectorAll('.col-lg-6.profile');
		var name_ = values_[0].textContent;
		var address_ = values_[1].textContent;
		var type_ = values_[2].textContent;
		var number_1 = values_[3].textContent;
		var number_2 = values_[4].textContent;
		var cert_type_ = values_[5].textContent;
		var status_ = values_[6].textContent;
		var county_ = values_[7].textContent;
		[name_,address_,type_,number_1,number_2,cert_type_,status_,county_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
input_.appendChild(new_table_);

//----------------------------------------------------------------------------------------------------------------------------------------------------------

var a = document.querySelector('tbody[class="redacted"]');
a.remove();