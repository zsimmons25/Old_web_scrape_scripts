//  https://www.azbbhe.us//node/3

// Good example search is Last Name 'BR'


var no_match = document.querySelector('html>body>h2>font');
var line_ = document.querySelector('html>body>hr');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name', 'Middle Name', 'Address', 'City', 'State', 'Phone', 'License Type', 'License Number', 'License Status', 'Issued Date', 'Expiration Date', 'License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
if (no_match == undefined) {
  var rows = document.querySelectorAll('html>body>table>tbody>tr');
  for (var i = 1; i < rows.length; i++) {
		var detailsLink = rows[i].querySelector('a');
		var name_ = detailsLink.textContent;
		var mid_name = rows[i].querySelector('td:nth-of-type(2)').textContent;
		var city_ = rows[i].querySelector('td:nth-of-type(3)').textContent;
		var state_ = rows[i].querySelector('td:nth-of-type(4)').textContent;
		var action_ = rows[i].querySelector('td:nth-of-type(7)').textContent;
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_1 = detailsPage.querySelectorAll('html>body>div>table>tbody>tr>td>font');
		var values_2 = detailsPage.querySelectorAll('html>body>table>tbody>tr>td:not([width])');
		var address_ = values_1[1].textContent;
		var phone_ = values_1[2].textContent;
  		var lic_1 = document.createElement('tr'); lic_1.setAttribute('class','redacted');
		license_type_1 = values_2[7].textContent;license_no_1 = values_2[8].textContent;license_status_1 = values_2[9].textContent;issued_1 = values_2[10].textContent;expired_1 = values_2[11].textContent;
		[name_, mid_name, address_, city_, state_, phone_, license_type_1, license_no_1, license_status_1, issued_1, expired_1, action_].forEach(x => lic_1.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_1);
		if (values_2.length > 12) {
			var lic_2 = document.createElement('tr'); lic_2.setAttribute('class','redacted');
			license_type_2 = values_2[13].textContent;license_no_2 = values_2[14].textContent;license_status_2 = values_2[15].textContent;issued_2 = values_2[16].textContent;expired_2 = values_2[17].textContent;
			[name_, mid_name, address_, city_, state_, phone_, license_type_2, license_no_2, license_status_2, issued_2, expired_2, action_].forEach(x => lic_2.insertCell(-1).textContent = x);
			new_table_.appendChild(lic_2);
		}
		if (values_2.length > 18) {
			var lic_3 = document.createElement('tr'); lic_3.setAttribute('class','redacted');
			license_type_3 = values_2[19].textContent;license_no_3 = values_2[20].textContent;license_status_3 = values_2[21].textContent;issued_3 = values_2[22].textContent;expired_3 = values_2[23].textContent;
			[name_, mid_name, address_, city_, state_, phone_, license_type_3, license_no_3, license_status_3, issued_3, expired_3, action_].forEach(x => lic_3.insertCell(-1).textContent = x);
			new_table_.appendChild(lic_3);
		}
		if (values_2.length > 24) {
			var lic_4 = document.createElement('tr'); lic_4.setAttribute('class','redacted');
			license_type_4 = values_2[25].textContent;license_no_4 = values_2[26].textContent;license_status_4 = values_2[27].textContent;issued_4 = values_2[28].textContent;expired_4 = values_2[29].textContent;
			[name_, mid_name, address_, city_, state_, phone_, license_type_4, license_no_4, license_status_4, issued_4, expired_4, action_].forEach(x => lic_4.insertCell(-1).textContent = x);
			new_table_.appendChild(lic_4);
		}
		var cells_ = rows[i].querySelectorAll('td');
  		for (y=0;y<8;y++) {
  			cells_[y].remove();
  		}
	}
}else {
  console.log('No Match');
  var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
  for (z=0;z<header_a.length;z++) {
  	blank_row.insertCell(-1).textContent = 'redacted';
  }
  new_table_.appendChild(blank_row);
}
line_.appendChild(new_table_);