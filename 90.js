var insert_node_ = document.querySelector('#page-title');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['provider_org_full_name','Status_License_Number','Address_CSZ','Licensure_Dates'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
};
var values_ = document.querySelectorAll('td[bgcolor]');
var y = values_.length/7;
var z = 1;
for (x = 0; x < y; x++) {
	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
	var name_ = values_[z].textContent;
	var status_lic_num = values_[(z+1)].textContent;
	var address_csz = values_[(z+2)].textContent;
	var lic_dates = values_[(z+3)].textContent;
	z+=7;
	[name_,status_lic_num,address_csz,lic_dates].forEach(x => record_.insertCell(-1).textContent = x);
	new_table_.appendChild(record_);
}
insert_node_.appendChild(new_table_);