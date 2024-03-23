// Don't know if there is a possiblity of 3 license types for a single provider, will need to add additional elsif statements if so


//---------------------------------------------------------------------------------------------


var insert_node_ = document.querySelector('div[class="bodytext"]');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','City and State','License Type','License Number','License Status','Licnese Issue Date','License Expiration Date','License Action'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('table[class="bodytext"]:nth-of-type(2)>tbody>tr:not(:first-child)');
if (rows[0] != undefined) {
	for (i of rows) {
		var detailsLink = i.querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var name_ = i.querySelector('td>a').textContent;
		var values_ = detailsPage.querySelectorAll('table[class="bodytext"]>tbody>tr>td:nth-of-type(2)');
		if (values_.length == 8){
			var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
			var city_state = values_[1].textContent;
			var lic_type = values_[2].textContent;
			var lic_no = values_[3].textContent;
			var status_ = values_[4].textContent;
			var lid_ = values_[5].textContent;
			var led_ = values_[6].textContent;
			var action_ = values_[7].textContent;
			[name_,city_state,lic_type,lic_no,status_,lid_,led_,action_].forEach(x => record_.insertCell(-1).textContent = x);
			new_table_.appendChild(record_);
		}else{
			var action_ = values_[12].textContent;
			var city_state = values_[1].textContent;
			var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
			var lic_type = values_[2].textContent;
			var lic_no = values_[3].textContent;
			var status_ = values_[4].textContent;
			var lid_ = values_[5].textContent;
			var led_ = values_[6].textContent;
			[name_,city_state,lic_type,lic_no,status_,lid_,led_,action_].forEach(x => record_.insertCell(-1).textContent = x);
			new_table_.appendChild(record_);
			var record_2 = document.createElement('tr'); record_.setAttribute('class','redacted');
			var lic_type_2 = values_[7].textContent;
			var lic_no_2 = values_[8].textContent;
			var status_2 = values_[9].textContent;
			var lid_2 = values_[10].textContent;
			var led_2 = values_[11].textContent;
			[name_,city_state,lic_type_2,lic_no_2,status_2,lid_2,led_2,action_].forEach(x => record_2.insertCell(-1).textContent = x);
			new_table_.appendChild(record_2);
		}
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