var links = document.querySelectorAll('tr[role="row"]>td:nth-of-type(6)>a');
for (a=0;a<links.length;a++) {
	var guid = links[a].getAttribute("href").split('=')[1];
	links[a].setAttribute('href','/Student/eCards?cid='+guid);
};

var rows = document.querySelectorAll('#tblECards>tbody>tr');
var header = document.querySelector('#tblECards>thead>tr');
var claimstatus = document.querySelector('#tblECards>thead>tr>th:nth-of-type(3)'); claimstatus.textContent = 'Claim Status';
header.insertCell(-1).textContent = 'Provider Type'; header.insertCell(-1).textContent = 'Status'; header.insertCell(-1).textContent = 'Email'; header.insertCell(-1).textContent = 'Phone'; header.insertCell(-1).textContent = 'Training Center'; header.insertCell(-1).textContent = 'Instructor'; header.insertCell(3).textContent = 'Course Date';

for (var i = 0; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');
	if (detailsLink != null) {
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var values_ = detailsPage.querySelectorAll('.h5.margin-top-5');
	provider_type = detailsPage.querySelector('.coursetitle.h3.margin-top-5').textContent;
	status_ = detailsPage.querySelector('span[class~="label"]').textContent;
	email_ = values_[2].textContent;
	phone_ = values_[3].textContent;
	training_center_ = values_[5].textContent;
	instructor_ = values_[6].textContent;
	course_date_ = values_[7].textContent;
	rows[i].insertCell(-1).textContent = provider_type; rows[i].insertCell(-1).textContent = status_; rows[i].insertCell(-1).textContent = email_; rows[i].insertCell(-1).textContent = phone_; rows[i].insertCell(-1).textContent = training_center_; rows[i].insertCell(-1).textContent = instructor_; rows[i].insertCell(3).textContent = course_date_;
	} else {
	rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(3).textContent = '';
	};
}


//https://ecards.heart.org/student/myecards
