var input_ = document.querySelector('#divBGrid');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','Owner','Profession','License Type','License Number','License Status','License Issue Date','License Expiration Date','License Action','Orders','Address 1','CSZ','Country','Phone'];
for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
}
var rows = document.querySelectorAll('#ctl00_CPH1_myDataGrid>tbody>tr');
if (rows[1] != undefined) {
	for (i = 1; i < rows.length; i++) {
	  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
		var detailsLink = rows[i].querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_ = detailsPage.querySelectorAll('.noBorder>tbody>tr>td>input');
		var owner_obj = detailsPage.querySelectorAll('#ctl00_CPH1_txtOwnerName');
		if (owner_obj[0] == undefined) {
			var name_ = values_[0].getAttribute("value");
			var profession_ = values_[1].getAttribute("value");
			var type_ = values_[2].getAttribute("value");
			var number_ = values_[3].getAttribute("value");
			var address_1 = values_[4].getAttribute("value");
			var csz_ = values_[5].getAttribute("value");
			var country_ = values_[6].getAttribute("value");
			var phone_ = values_[7].getAttribute("value");
			var lid_ = values_[8].getAttribute("value");
			var obtained_ = values_[9].getAttribute("value");
			var status_ = values_[10].getAttribute("value");
			var disc_ = values_[11].getAttribute("value");
			var led_ = values_[12].getAttribute("value");
			var owner_ = '';
		}else {
			var name_ = values_[0].getAttribute("value");
			var owner_ = values_[1].getAttribute("value");
			var profession_ = values_[2].getAttribute("value");
			var type_ = values_[3].getAttribute("value");
			var number_ = values_[4].getAttribute("value");
			var address_1 = values_[5].getAttribute("value");
			var csz_ = values_[6].getAttribute("value");
			var country_ = values_[7].getAttribute("value");
			var phone_ = values_[8].getAttribute("value");
			var lid_ = values_[9].getAttribute("value");
			var obtained_ = values_[10].getAttribute("value");
			var status_ = values_[11].getAttribute("value");
			var disc_ = values_[12].getAttribute("value");
			var led_ = values_[13].getAttribute("value");
		}
		var disc_obj = detailsPage.querySelectorAll('#ctl00_CPH1_MyDataGrid>tbody');
		if (disc_obj[0] == undefined){
			var disc_2 = 'None';
		}else {
			var disc_2 = disc_obj[0].textContent;
		}
		[name_,owner_,profession_,type_,number_,status_,lid_,led_,disc_,disc_2,address_1,csz_,country_,phone_].forEach(x => lic_.insertCell(-1).textContent = x);
		new_table_.appendChild(lic_);
		var cells_ = rows[i].querySelectorAll('td');
	  	for (z=0;z<12;z++) {
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
rows[0].remove();
input_.appendChild(new_table_);

//---------------------------------------------------------------------------------

var next_ = document.querySelector('#ctl00_CPH1_btnNext');
var page_count = document.querySelector('#ctl00_CPH1_lblPage>strong').textContent;
var current_ = page_count.split('Page ')[1].split(' of')[0];
var last_ = page_count.split('of ')[1];
if (current_ == last_) {
	next_.remove();
}