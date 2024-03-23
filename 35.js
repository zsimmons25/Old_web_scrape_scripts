var insert_node_ = document.querySelector('td[class="bodyText"]');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['First Name','Last Name','Title','License Number','License Status','License Issue Date','License Expiration Date','License Action','Supervision','Address','City','State','Country','Phone'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('td[class="bodyText"]>table>tbody>tr:not(:first-child)');
if (rows[0] != undefined) {
	for (i of rows) {
	  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
		var detailsLink = i.querySelector('td:nth-of-type(2)>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_ = detailsPage.querySelectorAll('td[class="bodyText"]>table>tbody>tr>td:nth-of-type(2)');
		var lic_no = values_[0].textContent;
		var first_ = values_[1].textContent;
		var last_ = values_[2].textContent;
		var title_ = values_[3].textContent;
		var add_ = values_[4].textContent;
		var city_ = values_[5].textContent;
		var state_ = values_[6].textContent;
		var country_ = values_[7].textContent;
		var phone_ = values_[8].textContent;
		var status_ = values_[9].textContent;
		var lid_ = values_[10].textContent;
		var led_ = values_[11].textContent;
		var action_ = values_[12].textContent;
		var supe_ = values_[13].textContent;
		[first_,last_,title_,lic_no,status_,lid_,led_,action_,supe_,add_,city_,state_,country_,phone_].forEach(x => record_.insertCell(-1).textContent = x);
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
var old_header = document.querySelector('td[class="bodyText"]>table>tbody>tr:first-child');
old_header.remove();
insert_node_.appendChild(new_table_);