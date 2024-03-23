var insert_node_ = document.querySelector('p');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Provider Org Full Name','First Name','Middle Name','Last Name','License Number','License Type','License Issue Date','License Expiration Date','License Status','License Effective Date','Basis','Endorsements','License Action','Malpractice Action','Address','CSZ','County','Phone'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('table[class="table-condensed"]>tbody>tr:not(:first-child)');
if (rows[0] != undefined) {
	for (i of rows) {
		var detailsLink = i.querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var name_ = detailsPage.querySelector('span[id*="Licensee"]').textContent;
		var first_ = i.querySelector('td:nth-of-type(2)').textContent;
		var middle_ = i.querySelector('td:nth-of-type(3)').textContent;
		var last_ = i.querySelector('td:nth-of-type(1)').textContent;
		var add_values_ = detailsPage.querySelectorAll('table[id*="Address"]>tbody:nth-of-type(2)>tr>td');
		if (add_values_[0] != undefined){
			var add_ = add_values_[1].textContent;
			var csz_ = add_values_[2].textContent;
			var county_ = add_values_[3].textContent;
			var phone_ = add_values_[4].textContent;
		}else{
			var add_ = '';
			var csz_ = '';
			var county_ = '';
			var phone_ = '';
		}
		var action_check = detailsPage.querySelector('div[id*="divBoardOrders"]').textContent;
		if (action_check.includes('no current or prior Board orders')){
			var action_ = 'No';
		}else {
			var action_ = 'Yes';
		}
		var mal_action_link = detailsPage.querySelector('div[id*="divMalpractice"]>p>a');
		mal_request = new XMLHttpRequest();
		mal_request.open('GET', mal_action_link.href, false);
		mal_request.send(null);
		var mal_page = new DOMParser().parseFromString(mal_request.responseText, 'text/html');
		var mal_action_check = mal_page.querySelector('div[id*="pnlMalpractice"]').textContent;
		if (mal_action_check.includes('no closed malpractice claims')){
			var action_mal = 'No';
		}else {
			var action_mal = 'Yes';
		}
		var multi_check = detailsPage.querySelector('span[id*="LicStatus3"]');
		if (multi_check == undefined) {
			var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
			var lic_no = i.querySelector('td:nth-of-type(4)').textContent;
			var keys_ = detailsPage.querySelectorAll('li>label');
			var values_ = detailsPage.querySelectorAll('li>span');
			var lid_ = values_[0].textContent;
			var status_ = values_[1].textContent;
			var effective_ = values_[2].textContent;
			if (keys_[3].textContent.includes('Expire')) {
				var led_ = values_[3].textContent;
				if (values_[4] != undefined) {
					var basis_ = values_[4].textContent;
					if (values_[5] != undefined) {
						var endorsement_ = values_[5].textContent;
					}else {
						var endorsement_ = '';
					};
				}else{
					var basis_ = '';
					var endorsement_ = '';
				};
			}else if (keys_[3].textContent.includes('Basis')) {
				var led_ = '';
				var basis_ = values_[3].textContent;
				if (values_[5] != undefined) {
					var endorsement_ = values_[5].textContent;
				}else {
					var endorsement_ = '';
				};
			};
			var lic_type = '';
			[name_,first_,middle_,last_,lic_no,lic_type,lid_,led_,status_,effective_,basis_,endorsement_,action_,action_mal,add_,csz_,county_,phone_].forEach(x => record_.insertCell(-1).textContent = x);
			new_table_.appendChild(record_);
		}else {
			var licenses_ = detailsPage.querySelectorAll('table[id*="OtherLic"]>tbody:nth-of-type(2)>tr:nth-child(odd)');
			for (j of licenses_) {
				var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
				var lic_no = j.querySelector('td:nth-of-type(1)').textContent;
				var lid_ = j.querySelector('td:nth-of-type(2)').textContent;
				var led_ = j.querySelector('td:nth-of-type(3)').textContent;
				var lic_type = j.querySelector('td:nth-of-type(4)').textContent;
				var status_ = '';
				var effective_ = '';
				var basis_ = '';
				var endorsement_ = '';
				[name_,first_,middle_,last_,lic_no,lic_type,lid_,led_,status_,effective_,basis_,endorsement_,action_,action_mal,add_,csz_,county_,phone_].forEach(x => record_.insertCell(-1).textContent = x);
				new_table_.appendChild(record_);
			};
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