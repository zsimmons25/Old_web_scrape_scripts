var insert_node_ = document.querySelector('#main-content > div > main > article > h2');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Provider_Org_Full_Name','License Number','License Action','Action Date','Action Summary'];
for (w=0;w<header_a.length;w++) {
	header_.insertCell(-1).textContent = header_a[w];
}
var links_ = document.querySelectorAll('.list-understated > li > a');
for (x=0;x<links_.length;x++) {
	request = new XMLHttpRequest();
	request.open('GET', links_[x].href, false);
	request.send(null);
	var disc_page_ = new DOMParser().parseFromString(request.responseText, 'text/html');
	var records_ = disc_page_.querySelectorAll('#main-content > div > main > article > table > tbody > tr');
	for (y=0;y<records_.length;y++) {
		new_table_.appendChild(records_[y]);
	}
}
insert_node_.appendChild(new_table_);