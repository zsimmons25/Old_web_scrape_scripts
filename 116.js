var a = document.querySelector('#DaForm'); a.setAttribute('target','_self');

#DaForm

function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('tbody>tr>td>font>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  load(links[i].href, div);
};

//------------------------------------------------------------------------------------------------------------

var rows = document.querySelectorAll('html>body>font>div>table>tbody>tr'); rows[0].insertCell(-1).textContent = 'Adress'; rows[0].insertCell(-1).textContent = 'Phone'; rows[0].insertCell(2).textContent = 'License Number'; rows[0].insertCell(3).textContent = 'License Issue Date'; rows[0].querySelector('th:nth-of-type(3)').remove(); rows[0].querySelector('th:nth-of-type(2)').remove();

for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('td>font>a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('html>body>blockquote>font>font>div>table>tbody>tr>td>font');
	address_ = values_[1].textContent;
	phone_ = values_[3].textContent;
	var lnlid_ = rows[i].querySelector('td:nth-of-type(3)');
	ln_ = lnlid_.textContent.split('-')[0];
	lid_ = lnlid_.textContent.split('-')[1];
	lnlid_.remove();
	rows[i].insertCell(-1).textContent = address_; rows[i].insertCell(-1).textContent = phone_; rows[i].insertCell(2).textContent = ln_; rows[i].insertCell(3).textContent = lid_;
	var c_s = rows[i].querySelector('td:nth-of-type(2)');
	c_s.remove();
}