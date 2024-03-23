// http://hfcis.cdph.ca.gov/search.aspx?st=h|8

var a = document.querySelector('#map'); a.remove();
var b = document.querySelector('#rightFloat'); b.remove();

var rows = document.querySelectorAll('#ctl00_cph_Center_gv_results>tbody>tr:not(:last-child)'); 
var details = rows[1].querySelector('th:nth-of-type(8)');
details.textContent = "Details";
rows[1].insertCell(4).textContent = 'Address'; rows[1].insertCell(-1).textContent = 'License Number'; rows[1].insertCell(-1).textContent = 'License Status'; rows[1].insertCell(-1).textContent = 'License Effective Date'; rows[1].insertCell(-1).textContent = 'License Expiration Date';

for (var i = 2; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('td:nth-of-type(8)>a');
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var name_cell_ = rows[i].querySelector('td:nth-of-type(3)');
	name_ = detailsPage.querySelector('#facinfowrapper>h1').textContent;
	address_ = name_cell_.querySelector('address').textContent;
	ln_ = detailsPage.querySelector('#licinfowrapper>p:nth-of-type(3)>span:nth-of-type(2)').textContent;
	status_ = detailsPage.querySelector('#licinfowrapper>p:nth-of-type(4)>span:nth-of-type(2)').textContent;
	lid_ = detailsPage.querySelector('#licinfowrapper>p:nth-of-type(6)>span:nth-of-type(2)').textContent;
	expire_ = detailsPage.querySelector('#licinfowrapper>p:nth-of-type(7)>span:nth-of-type(2)').textContent;
	name_cell_.textContent = name_;
	rows[i].insertCell(4).textContent = address_; rows[i].insertCell(-1).textContent = ln_; rows[i].insertCell(-1).textContent = status_; rows[i].insertCell(-1).textContent = lid_; rows[i].insertCell(-1).textContent = expire_;
}

// address #facinfowrapper>p:nth-of-type(2)
// phone #facinfowrapper>p:nth-of-type(4)
// ln #licinfowrapper>p:nth-of-type(3)>span:nth-of-type(2)
// status_ #licinfowrapper>p:nth-of-type(4)>span:nth-of-type(2)
// lid #licinfowrapper>p:nth-of-type(6)>span:nth-of-type(2)
// expire_ #licinfowrapper>p:nth-of-type(7)>span:nth-of-type(2)

// Map Key	Facility ID	Name	Type ADDRESS	City	County	Zipcode Phone LN STATUS LID EXPIRE