var insert_node_ = document.querySelector('div[class="bodytext"]');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','License Type','License Number','Licnese Issue Date','License Status','License Expiration Date','Business/Address','City/State','Permits/Endorsments','Expanded Practice','License Action','Malpractice Action'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('table[class="bodytext"]:nth-of-type(2)>tbody>tr:not(:first-child)');
if (rows[0] != undefined) {
	for (i of rows) {
	  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
		var detailsLink = i.querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var name_ = i.querySelector('td>a').textContent;
		var values_ = detailsPage.querySelectorAll('table[class="bodytext"]>tbody>tr>td:nth-of-type(2)');
		if (values_.length == 10){
			var lic_type = values_[1].textContent;
			var lic_no = values_[2].textContent;
			var lid_ = values_[3].textContent;
			var status_ = values_[4].textContent;
			var led_ = values_[5].textContent;
			var add_ = values_[6].textContent;
			var permit_ = values_[7].textContent;
			var action_ = values_[8].textContent;
			var action_mal = values_[9].textContent;
			var expanded_ = '';
			var city_state_ = '';
		}else if (values_.length == 11) {
			var lic_type = values_[1].textContent;
			var lic_no = values_[2].textContent;
			var lid_ = values_[3].textContent;
			var status_ = values_[4].textContent;
			var led_ = values_[5].textContent;
			var add_ = values_[6].textContent;
			var city_state_ = values_[7].textContent;
			var permit_ = values_[8].textContent;
			var action_ = values_[9].textContent;
			var action_mal = values_[10].textContent;
			var expanded_ = '';
		}else {
			var lic_type = values_[1].textContent;
			var lic_no = values_[2].textContent;
			var lid_ = values_[3].textContent;
			var status_ = values_[4].textContent;
			var led_ = values_[5].textContent;
			var add_ = values_[6].textContent;
			var city_state_ = values_[7].textContent;
			var permit_ = values_[8].textContent;
			var expanded_ = values_[9].textContent;
			var action_ = values_[10].textContent;
			var action_mal = values_[11].textContent;
		}
			[name_,lic_type,lic_no,lid_,status_,led_,add_,city_state_,permit_,expanded_,action_,action_mal].forEach(x => record_.insertCell(-1).textContent = x);
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