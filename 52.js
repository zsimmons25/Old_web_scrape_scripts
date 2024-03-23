let no_match = document.querySelector('#ContentPlaceHolder1_CountLabel');
let line_ = document.querySelector('.fontBold');
let new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
let header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
let header_a = ['Name','License Type', 'License Number', 'License Status', 'Address and Phone','Orginal Issue Date', 'Expiration Date', 'Disciplinary Actions'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
if (no_match.textContent != 'Number of Licensees found: 0') {
  let rows = document.querySelectorAll('#ContentPlaceHolder1_dtgList>tbody>tr');
  for (let i = 1; i < rows.length; i++) {
		let detailsLink = rows[i].querySelector('td>a');
		let type_ = rows[i].querySelector('td:nth-of-type(3)').textContent;
		let number_ = rows[i].querySelector('td:nth-of-type(4)').textContent;
		let status_ = rows[i].querySelector('td:nth-of-type(5)').textContent;
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		let detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		let name_ = detailsPage.querySelector('#lblName1').textContent;
		let values_br = detailsPage.querySelectorAll('#lblAddress>br');
		for (x=0; x<values_br.length;x++) {values_br[x].textContent = '|';};
		let address_phone = detailsPage.querySelector('#lblAddress').textContent;
		let issued_ = detailsPage.querySelector('#lblOrigDate').textContent;
		let expired_ = detailsPage.querySelector('#lblExpDate').textContent;
		let disc_ = detailsPage.querySelector('#lblDiscActions').textContent;
  		let lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		[name_,type_,number_,status_,address_phone,issued_,expired_,disc_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		let cells_ = rows[i].querySelectorAll('td');
  		for (y=0;y<5;y++) {
  			cells_[y].remove();
  		}
	}
}else {
  console.log('No Match');
  let blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
  for (z=0;z<header_a.length;z++) {
  	blank_row.insertCell(-1).textContent = 'redacted';
  }
  new_table_.appendChild(blank_row);
}
line_.appendChild(new_table_);