var insert_node_ = document.querySelector('div[class="hd-search"]>div[class="row"]');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['First Name','Middle Name','Last Name','Alias Name','Licnese Number','License Type','License Status','License Issue Date','License Expiration Date','License Action'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('div[class="hd-search"]>table>tbody>tr');
if (rows[0] != undefined) {
	for (i of rows) {
	  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
		var detailsLink = i.querySelector('td:nth-of-type(6)>a');
		var prov_id = detailsLink.getAttribute('href').split('/')[4];
		detailsLink.setAttribute('href',('https://obpt.onlineservice.oregon.gov/rest/public/registrant/get/?id='+prov_id));
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var data_ = detailsPage.querySelector('body').textContent;
		var first_ = data_.split('firstName":')[1].split(',')[0].replace('"','').replace('"','');
		var middle_ = data_.split('middleName":')[1].split(',')[0].replace('"','').replace('"','');
		var last_ = data_.split('lastName":')[1].split(',')[0].replace('"','').replace('"','');
		var aka_ = data_.split('otherName":')[1].split(',')[0].replace('"','').replace('"','');
		var lic_no = data_.split('licenseNumber":')[1].split(',')[0].replace('"','').replace('"','');
		var lic_type = data_.split('licenseCategory":')[1].split(',')[0].replace('"','').replace('"','');
		var status_ = data_.split('licenseStatus":')[1].split(',')[0].replace('"','').replace('"','');
		var lid_ = data_.split('initialLicenseDate":')[1].split(',')[0].replace('"','').replace('"','');
		var led_ = data_.split('licenseExpirationDate":')[1].split(',')[0].replace('"','').replace('"','');
		var action_check = data_.split('publicNotices":[')[1].split(']')[0];
		if (action_check != ''){
			var action_ = 'Yes';
		}else{
			var action_ = 'No';
		}
		[first_,middle_,last_,aka_,lic_no,lic_type,status_,lid_,led_,action_].forEach(x => record_.insertCell(-1).textContent = x);
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