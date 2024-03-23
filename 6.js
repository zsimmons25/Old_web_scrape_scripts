let input_ = document.querySelector('#form>div>table>tbody>tr>td>strong');
let new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
let header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
let header_a = ['Name','First Name','Last Name','License Number','License Status','License Issue Date','License Expiration Date','Background Check Date','Reinstatement Date','Reactivation Date','Reprimand Date','Revocation Date','Probation Date','Suspension Date'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
let rows = document.querySelectorAll('#bodyContentPlaceHolder_verificationNameGridView>tbody>tr');
if (rows[1] != undefined) {
	for (let i = 1; i < rows.length; i++) {
	  	let lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
	  	let last_name = rows[i].querySelector('td:nth-of-type(1)').textContent;
	  	let first_name = rows[i].querySelector('td:nth-of-type(2)').textContent;
		let detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		let detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		let values_ = detailsPage.querySelectorAll('#bodyContentPlaceHolder_DetailsView1>tbody>tr>td:nth-of-type(2)');
		let name_ = values_[0].textContent;
		let number_ = values_[1].textContent;
		let status_ = values_[2].textContent;
		let led_ = values_[3].textContent;
		let lid_ = values_[4].textContent;
		let bcd_ = values_[5].textContent;
		let reind_ = values_[6].textContent;
		let reactd_ = values_[7].textContent;
		let repd_ = values_[8].textContent;
		let revod_ = values_[9].textContent;
		let probd_ = values_[10].textContent;
		let suspd_ = values_[11].textContent;
		[name_,first_name,last_name,number_,status_,lid_,led_,bcd_,reind_,reactd_,repd_,revod_,probd_,suspd_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		let cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<4;z++) {
	  		cells_[z].remove();
	  	}
	}
} else {
	let blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (z=0;z<header_a.length;z++) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
input_.appendChild(new_table_);