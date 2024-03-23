//  https://www.azbbhe.us//node/3

var no_match = document.querySelectorAll('html>body>h2>font');
if (no_match.length > 0) { 'No match'
} else {
	var rows = document.querySelectorAll('html>body>table>tbody>tr');
	rows[0].insertCell(2).textContent = 'Address'; rows[0].insertCell(4).textContent = 'Phone'; 
	rows[0].insertCell(5).textContent = 'License Number'; rows[0].insertCell(10 ).textContent = 'Issued';
	var type_h = rows[0].querySelector('th:nth-of-type(5)'); type_h.textContent = 'License Type';
	var city_h = rows[0].querySelector('th:nth-of-type(3)'); city_h.remove();
	var state_h = rows[0].querySelector('th:nth-of-type(3)'); state_h.remove();

	for (var i = 1; i < rows.length; i++) {
		var detailsLink = rows[i].querySelector('a');
		var _type = rows[i].querySelector('td:nth-of-type(5)');
		var type_ = _type.textContent;
		var city_ = rows[i].querySelector('td:nth-of-type(3)');
		var state_ = rows[i].querySelector('td:nth-of-type(4)');
		city_.remove();
		state_.remove();
		request     = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);   
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var values_1 = detailsPage.querySelectorAll('html>body>div>table>tbody>tr>td>font');
		var values_2 = detailsPage.querySelectorAll('html>body>table>tbody>tr>td:not([width])');
		address_ = values_1[1].textContent;
		phone_ = values_1[2].textContent;
		rows[i].insertCell(2).textContent = address_;   rows[i].insertCell(3).textContent = phone_; 
		if (values_2.length == 12) {
			license_no_ = values_2[8].textContent;
			issued_ = values_2[10].textContent;
			rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
		} else if (values_2.length == 18) {
			if (values_2[7].textContent == type_ ) {
				license_no_ = values_2[8].textContent;
				issued_ = values_2[10].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			} else if (values_2[13].textContent == type_ ) {
				license_no_ = values_2[14].textContent;
				issued_ = values_2[16].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			}
		} else if (values_2.length == 24) {
			if (values_2[7].textContent == type_ ) {
				license_no_ = values_2[8].textContent;
				issued_ = values_2[10].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			} else if (values_2[13].textContent == type_ ) {
				license_no_ = values_2[14].textContent;
				issued_ = values_2[16].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			} else if (values_2[19].textContent == type_ ) {
				license_no_ = values_2[20].textContent;
				issued_ = values_2[22].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			}
		} else if (values_2.length == 30) {
			if (values_2[7].textContent == type_ ) {
				license_no_ = values_2[8].textContent;
				issued_ = values_2[10].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			} else if (values_2[13].textContent == type_ ) {
				license_no_ = values_2[14].textContent;
				issued_ = values_2[16].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			} else if (values_2[19].textContent == type_ ) {
				license_no_ = values_2[20].textContent;
				issued_ = values_2[22].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			} else if (values_2[25].textContent == type_ ) {
				license_no_ = values_2[26].textContent;
				issued_ = values_2[28].textContent;
				rows[i].insertCell(4).textContent = license_no_; rows[i].insertCell(8).textContent = issued_;
			}
		}
	}
}