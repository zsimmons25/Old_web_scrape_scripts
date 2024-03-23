var insert_node_ = document.querySelector('div[style="text-align: center;"]');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['License Number','First Name','Middle Name','Last Name','Title','Clinic Name','Address1','Address2','City','State','Zip','County','Phone','License Status','License Issue Date','License Renewal Date','License Action'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('div[class="table-responsive"]>table>tbody>tr:not(:first-child)');
if (rows[0] != undefined) {
	for (i of rows) {
	  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
		var detailsLink = i.querySelector('td:nth-of-type(3)>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_ = detailsPage.querySelectorAll('table>tbody>tr>td:nth-of-type(2)');
		var lic_no = values_[0].textContent;
		var first_ = values_[1].textContent;
		var middle_ = values_[2].textContent;
		var last_ = values_[3].textContent;
		var title_ = values_[4].textContent;
		var clinic_ = values_[5].textContent;
		var add1_ = values_[6].textContent;
		var add2_ = values_[7].textContent;
		var city_ = values_[8].textContent;
		var state_ = values_[9].textContent;
		var zip_ = values_[10].textContent;
		var county_ = values_[11].textContent;
		var phone_ = values_[12].textContent;
		var status_ = values_[13].textContent;
		var lid_ = values_[14].textContent;
		var renew_ = values_[15].textContent;
		var action_ = values_[16].textContent;
		[lic_no,first_,middle_,last_,title_,clinic_,add1_,add2_,city_,state_,zip_,county_,phone_,status_,lid_,renew_,action_].forEach(x => record_.insertCell(-1).textContent = x);
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