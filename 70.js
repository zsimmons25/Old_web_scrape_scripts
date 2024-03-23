var header_ = document.querySelector('table[summary^="Compliance and"]>thead>tr');
["State","City"].forEach(x => header_.insertCell(2).textContent = x);
var rows = document.querySelectorAll('table[summary^="Compliance and"]>tbody>tr');
for (i of rows) {
  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
	var detailsLink = i.querySelector('td>a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('table>tbody>tr>td:nth-of-type(2)');
	var city_ = values_[2].textContent;
	var state_ = values_[3].textContent;
	[state_,city_].forEach(x => i.insertCell(2).textContent = x);
	var pdf_td_1 = i.querySelector('td:nth-of-type(9)');
	var pdf_td_2 = i.querySelector('td:nth-of-type(10)');
	var pdf_url_1 = pdf_td_1.querySelector('a');
	var pdf_url_2 = pdf_td_2.querySelector('a');
	if (pdf_url_1 != undefined) {
		pdf_td_1.textContent = pdf_url_1.getAttribute("href");
	};
	if (pdf_url_2 != undefined) {
		pdf_td_2.textContent = pdf_url_2.getAttribute("href");
	};
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Old

var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = function() {     if (this.readyState == 4 && this.status == 200) {      document.body.innerHTML = this.responseText; var allATag = document.querySelectorAll('a'); var totalATag = allATag.length; for(var i = 0; i < totalATag; i++) {   if(allATag[i].innerHTML == "Text") {      allATag[i].setAttribute("target", "_blank");   } }    } }; xhttp.open("GET", "url", true); xhttp.send();