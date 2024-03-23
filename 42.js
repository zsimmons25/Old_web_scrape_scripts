var input_ = document.querySelector('#Back_to_Search');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Full Name','License Number','Profession','License Type','License Status','License Issue Date','License Expiration Date','City','State','Zip','Country','License Action'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not([style])');
if (rows[0] != undefined) {
	for (var i = 0; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var full_name_ = detailsPage.querySelector('#_ctl16__ctl1_full_name').textContent;
		var lic_no = detailsPage.querySelector('#_ctl21__ctl1_license_no').textContent;
		var prof_ = detailsPage.querySelector('#_ctl21__ctl1_profession_id').textContent;
		var type_ = detailsPage.querySelector('#_ctl21__ctl1_license_type').textContent;
		var status_ = detailsPage.querySelector('#_ctl21__ctl1_sec_lic_status').textContent;
		var lid_ = detailsPage.querySelector('#_ctl21__ctl1_issue_date').textContent;
		var led_ = detailsPage.querySelector('#_ctl21__ctl1_expiration_date').textContent;
		var add_ind = detailsPage.querySelector('#TheForm>table>tbody>tr>td>table>tbody>tr:nth-of-type(6)>td>span>table>tbody').textContent;
		if (add_ind == 'No address Information') {
			var city_ = '';
			var state_ = '';
			var zip_ = '';
			var country_ = '';
		}else{
			var city_ = detailsPage.querySelector('#_ctl26__ctl1_addr_city').textContent;
			var state_ = detailsPage.querySelector('#_ctl26__ctl1_addr_state').textContent;
			var zip_ = detailsPage.querySelector('#_ctl26__ctl1_addr_zipcode').textContent;
			var country_ = detailsPage.querySelector('#_ctl26__ctl1_addr_country').textContent;
		}
		var disc_ = detailsPage.querySelector('#TheForm>table>tbody>tr>td>table>tbody>tr:nth-of-type(9)>td>span>table>tbody').textContent;
		[full_name_,lic_no,prof_,type_,status_,lid_,led_,city_,state_,zip_,country_,disc_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<5;z++) {
	  		cells_[z].remove();
	  	}
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
input_.appendChild(new_table_);