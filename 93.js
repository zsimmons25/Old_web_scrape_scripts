var insert_node_ = document.querySelector('table[class="deptGridView"]');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','DBA','License Number','Program','License Type','License Status','License Issue Date','License Effective Date','License Expiration Date','License Action','CSC','Entity Number'];
for (h of header_a) {
	header_.insertCell(-1).textContent = h;
}
var rows = document.querySelectorAll('table>tbody>tr');
if (rows[0] != undefined) {
	for (i of rows) {
	  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
		var detailsLink = i.querySelector('td:nth-of-type(2)>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var keys_ = detailsPage.querySelectorAll('dl>dt>label');
		var values_ = detailsPage.querySelectorAll('dl>dd');
		if (keys_[4].textContent == 'DBA') {
			var lic_no = values_[0].textContent;
			var program_ = values_[1].textContent;
			var lic_type = values_[2].textContent;
			var status_ = values_[3].textContent;
			var dba_ = values_[4].textContent;
			var lid_ = values_[5].textContent;
			var effective_ = values_[6].textContent;
			var led_ = values_[7].textContent;
			var csc_ = values_[8].textContent;
		}else {
			var lic_no = values_[0].textContent;
			var program_ = values_[1].textContent;
			var lic_type = values_[2].textContent;
			var status_ = values_[3].textContent;
			var dba_ = i.querySelector('td:nth-of-type(3)').textContent;
			var lid_ = values_[4].textContent;
			var effective_ = values_[5].textContent;
			var led_ = values_[6].textContent;
			var csc_ = values_[7].textContent;
		}
		var owners_ = detailsPage.querySelectorAll('h2:nth-of-type(1)+table>tbody>tr>td');
		var name_ = owners_[0].textContent;
		var ent_no = owners_[1].textContent;
		var action_node = detailsPage.querySelector('h2:nth-of-type(4)+*');
		if (action_node.nodeName == "P") {
			var action_ = 'None';
		}else{
			var action_na = action_node.querySelectorAll('tbody>tr>td');
			var action_a = [];
			for (j of action_na) {
				if (j.textContent.includes('Image')){
					var urls_ = j.querySelectorAll('a');
					for (k of urls_){
						action_a.push(k.getAttribute('href').split('?')[1]);
					}
				}else{
					action_a.push(j.textContent);
				}
			};
			var action_ = action_a.join('|');
		}
		[name_,dba_,lic_no,program_,lic_type,status_,lid_,effective_,led_,action_,csc_,ent_no].forEach(x => record_.insertCell(-1).textContent = x);
		new_table_.appendChild(record_);
		var cells_ = i.querySelectorAll('td');
	  	for (l of cells_) {
	  		l.remove();
	  	}
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (m of header_a) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
var thead_ = document.querySelector('thead');
thead_.remove();
insert_node_.appendChild(new_table_);