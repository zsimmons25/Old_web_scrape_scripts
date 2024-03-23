var input_ = document.querySelector('#title-page>h2');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name','Address','CSZ','License Number','License Expiration Date'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var error_io = document.querySelectorAll('.content-container>fieldset>h2');
if (error_io[0] == undefined) {
	var rows = document.querySelectorAll('.span12>p>font>a');
	if (rows[0] != undefined) {
		var brs_o = document.querySelectorAll('.span12>p>font>br');
		for (x=0;x<brs_o.length;x++) {
			brs_o[x].textContent = '|';
		}
		var old_table_ = document.querySelector('.span12>p>font');
		var names_ = old_table_.textContent.split('|');
		for (var i = 0; i < rows.length; i++) {
		  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
			var detailsLink = rows[i];
			request = new XMLHttpRequest();
			request.open('GET', detailsLink.href, false);
			request.send(null);
			var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
			var error_i = detailsPage.querySelectorAll('.content-container>fieldset>h2');
			if (error_i[0] == undefined) {
				var values_ = detailsPage.querySelector('#content>div>div');
				var brs_i = values_.querySelectorAll('br');
				for (y=0;y<brs_i.length;y++) {
					brs_i[y].textContent = '|';
				}
				var full_name_ = values_.textContent.split('|')[0];
				var address_ = values_.textContent.split('|')[1];
				var csz_ = values_.textContent.split('|')[2].split('License:')[0];
				var number_ = values_.textContent.split('License:')[1].split('|')[0];
				var led_ = values_.textContent.split('Expires:')[1].split('|')[0];
			}else {
				var number_ = rows[i].textContent;
				var full_name_ = names_[i].split(/\d+/)[1];
				var address_ = '';
				var csz_ = '';
				var led_ = '';
			}
			[full_name_,address_,csz_,number_,led_].forEach(x => lic_.insertCell(-1).textContent = x);
			rows[i].remove();
			new_table_.appendChild(lic_);
		}
	}else{
		var values_i = document.querySelectorAll('#content>div>div');
		if (values_i[0] == undefined) {
			var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
			for (z=0;z<header_a.length;z++) {
				blank_row.insertCell(-1).textContent = 'redacted';
			}
			new_table_.appendChild(blank_row);
		}else{
			if (values_i[0].textContent.trim() == '') {
				var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
				for (z=0;z<header_a.length;z++) {
					blank_row.insertCell(-1).textContent = 'redacted';
				}
				new_table_.appendChild(blank_row);
			}else{
				var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
				var values_ = document.querySelector('#content>div>div');
				var brs_i = values_.querySelectorAll('br');
				for (y=0;y<brs_i.length;y++) {
					brs_i[y].textContent = '|';
				}
				var full_name_ = values_.textContent.split('|')[0];
				var address_ = values_.textContent.split('|')[1];
				var csz_ = values_.textContent.split('|')[2].split('License:')[0];
				var number_ = values_.textContent.split('License:')[1].split('|')[0];
				var led_ = values_.textContent.split('Expires:')[1].split('|')[0];
				[full_name_,address_,csz_,number_,led_].forEach(x => lic_.insertCell(-1).textContent = x);
				new_table_.appendChild(lic_);
			}
		}
	}
	if (old_table_ != undefined) {
		old_table_.remove();
	}
	input_.appendChild(new_table_);
}else{
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
	var error_input = document.querySelector('#header>h1');
	error_input.appendChild(new_table_);
}