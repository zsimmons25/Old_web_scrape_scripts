var insert_node_ = document.querySelector('#main_content');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['provider_org_full_name','address1','CSZ','phone','Beds'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var brs = document.querySelectorAll('#main_content > ul > li > br');
for (i of brs) {
	i.textContent = "|";
}

var lis = document.querySelectorAll('#main_content > ul > li');
for (i of lis) {
	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
	var nm_ = i.textContent.split('|')[0];
	var add_ = i.textContent.split('|')[1];
	var csz_ = i.textContent.split('|')[2];
	var phone_ = i.textContent.split('|')[3];
	var beds_ = i.textContent.split('|')[4];
	[nm_,add_,csz_,phone_,beds_].forEach(x => record_.insertCell(-1).textContent = x.trim());
	new_table_.appendChild(record_);
}
insert_node_.appendChild(new_table_);