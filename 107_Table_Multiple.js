//  https://www.azbbhe.us//node/3

var rows = document.querySelectorAll('html>body>table>tbody>tr');
var type_h = rows[0].querySelector('th:nth-of-type(5)');
var status_h = rows[0].querySelector('th:nth-of-type(6)');
var expiration_h = rows[0].querySelector('th:nth-of-type(8)');
type_h.remove();
status_h.remove();
expiration_h.remove();
rows[0].insertCell(2).textContent = 'Address'; rows[0].insertCell(5).textContent = 'Phone'; 
rows[0].insertCell(6).textContent = 'License Type'; rows[0].insertCell(7).textContent = 'License Number'; rows[0].insertCell(8).textContent = 'License Status'; rows[0].insertCell(9).textContent = 'Issued Date'; rows[0].insertCell(10).textContent = 'Expiration Date';
rows[0].insertCell(11).textContent = 'License Type'; rows[0].insertCell(12).textContent = 'License Number'; rows[0].insertCell(13).textContent = 'License Status'; rows[0].insertCell(14).textContent = 'Issued Date'; rows[0].insertCell(15).textContent = 'Expiration Date';
rows[0].insertCell(16).textContent = 'License Type'; rows[0].insertCell(17).textContent = 'License Number'; rows[0].insertCell(18).textContent = 'License Status'; rows[0].insertCell(19).textContent = 'Issued Date'; rows[0].insertCell(20).textContent = 'Expiration Date';
rows[0].insertCell(21).textContent = 'License Type'; rows[0].insertCell(22).textContent = 'License Number'; rows[0].insertCell(23).textContent = 'License Status'; rows[0].insertCell(24).textContent = 'Issued Date'; rows[0].insertCell(25).textContent = 'Expiration Date';


for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	var type_ = rows[i].querySelector('td:nth-of-type(5)');
	var status_ = rows[i].querySelector('td:nth-of-type(6)');
	var expiration_ = rows[i].querySelector('td:nth-of-type(8)'); 
	type_.remove();
	status_.remove();
	expiration_.remove();
	request     = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);   
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_1 = detailsPage.querySelectorAll('html>body>div>table>tbody>tr>td>font');
	var values_2 = detailsPage.querySelectorAll('html>body>table>tbody>tr>td:not([width])');
	address_ = values_1[1].textContent;
	phone_ = values_1[2].textContent;
	license_type_1 = values_2[7].textContent;
	license_no_1 = values_2[8].textContent;
	license_status_1 = values_2[9].textContent;
	issued_1 = values_2[10].textContent;
	expired_1 = values_2[11].textContent;
	rows[i].insertCell(2).textContent = address_;   rows[i].insertCell(5).textContent = phone_; 
	rows[i].insertCell(6).textContent = license_type_1; rows[i].insertCell(7).textContent = license_no_1; rows[i].insertCell(8).textContent = license_status_1; rows[i].insertCell(9).textContent = issued_1; rows[i].insertCell(10).textContent = expired_1;
	if (values_2.length > 12) {
		license_type_2 = values_2[13].textContent;
		license_no_2 = values_2[14].textContent;
		license_status_2 = values_2[15].textContent;
		issued_2 = values_2[16].textContent;
		expired_2 = values_2[17].textContent;
		rows[i].insertCell(11).textContent = license_type_2; rows[i].insertCell(12).textContent = license_no_2; rows[i].insertCell(13).textContent = license_status_2; rows[i].insertCell(14).textContent = issued_2; rows[i].insertCell(15).textContent = expired_2;
	} else {
		rows[i].insertCell(11).textContent = ''; rows[i].insertCell(12).textContent = ''; rows[i].insertCell(13).textContent = ''; rows[i].insertCell(14).textContent = ''; rows[i].insertCell(15).textContent = '';
	}
	if (values_2.length > 18) {
		license_type_3 = values_2[19].textContent;
		license_no_3 = values_2[20].textContent;
		license_status_3 = values_2[21].textContent;
		issued_3 = values_2[22].textContent;
		expired_3 = values_2[23].textContent;
		rows[i].insertCell(16).textContent = license_type_2; rows[i].insertCell(17).textContent = license_no_2; rows[i].insertCell(18).textContent = license_status_2; rows[i].insertCell(19).textContent = issued_2; rows[i].insertCell(20).textContent = expired_2;
	} else {
		rows[i].insertCell(16).textContent = ''; rows[i].insertCell(17).textContent = ''; rows[i].insertCell(18).textContent = ''; rows[i].insertCell(19).textContent = ''; rows[i].insertCell(20).textContent = '';
	}
	if (values_2.length > 24) {
		license_type_4 = values_2[25].textContent;
		license_no_4 = values_2[26].textContent;
		license_status_4 = values_2[27].textContent;
		issued_4 = values_2[28].textContent;
		expired_4 = values_2[29].textContent;
		rows[i].insertCell(21).textContent = license_type_2; rows[i].insertCell(22).textContent = license_no_2; rows[i].insertCell(23).textContent = license_status_2; rows[i].insertCell(24).textContent = issued_2; rows[i].insertCell(25).textContent = expired_2;
	} else {
		rows[i].insertCell(21).textContent = ''; rows[i].insertCell(22).textContent = ''; rows[i].insertCell(23).textContent = ''; rows[i].insertCell(24).textContent = ''; rows[i].insertCell(25).textContent = '';
	}
}