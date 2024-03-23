// https://elicense.mbp.state.ms.us/portal.aspx

// Good test searches 'SM, ' and 'AN, '

var rows = document.querySelectorAll('#gvResults tr');
rows[0].insertCell( - 1).textContent = 'Status'; rows[0].insertCell( - 1).textContent = 'Original Issue Date'; rows[0].insertCell( - 1).textContent = 'Expiration Date'; rows[0].insertCell( - 1).textContent = 'On Probation'; rows[0].insertCell( - 1).textContent = 'Discipline on File'; rows[0].insertCell( - 1).textContent = 'CSR'; rows[0].insertCell( - 1).textContent = 'CSR Issue Date'; rows[0].insertCell( - 1).textContent = 'CSR Expiartion Date'; rows[0].insertCell( - 1).textContent = 'CSR Status';

for (var i = 1; i < rows.length; i++) {
  var detailsLink = rows[i].querySelector('a'),
  licenseType = rows[i].querySelector('td:nth-of-type(5)').textContent,
  request = new XMLHttpRequest();
  request.overrideMimeType('application/sml');
  request.open('GET', detailsLink.href, false);
  request.send(null);
  var license_number_ = rows[i].querySelector('td:nth-of-type(2)').textContent;
  var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
  var table = detailsPage.querySelectorAll('#gvLicenses>tbody>tr>td');
  table_text = [...table].map(x => x.textContent);
  for (z=0; z < table_text.length; z++) {
  	if (table_text.includes('Controlled Substance Registration')) {
    	if (table_text[z] == 'Controlled Substance Registration') {
    		if (table_text[(z-1)] == license_number_) {
    			csr_ = table_text[(z-1)]+'-CSR';
    		} else {
    			csr_ = table_text[(z-1)];
    		}
    		csr_issue = table_text[(z+3)];
    		csr_expire = table_text[(z+2)];
    		csr_status = table_text[(z+4)];
    	}
    } else {
    	csr_ = '';
    	csr_issue = '';
    	csr_expire = '';
    	csr_status = '';
    }
    if (table_text[z] == 'Pharmacist License') {
      expire_ = table_text[(z+2)];
    }
  }
  status_ = detailsPage.querySelector('#lblDetailStatus').textContent;
  issue_ = detailsPage.querySelector('#lblDetailOriginal').textContent;
  probation_ = detailsPage.querySelector('#lblDetailProbation').textContent;
  discipline_ = detailsPage.querySelector('#lblDetailDiscipline').textContent;
  rows[i].insertCell( - 1).textContent = status_; rows[i].insertCell( - 1).textContent = issue_; rows[i].insertCell( - 1).textContent = expire_; rows[i].insertCell( - 1).textContent = probation_; rows[i].insertCell( - 1).textContent = discipline_; rows[i].insertCell( - 1).textContent = csr_; rows[i].insertCell( - 1).textContent = csr_issue;rows[i].insertCell( - 1).textContent = csr_expire; rows[i].insertCell( - 1).textContent = csr_status;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

var results_ = document.querySelector('.section');
var rows = document.querySelectorAll('#gvResults tr');
var new_table_ = document.createElement('tbody');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
header_.insertCell(0).textContent = 'Name'; header_.insertCell(-1).textContent = 'License Number'; header_.insertCell(-1).textContent = 'City'; header_.insertCell(-1).textContent = 'State'; header_.insertCell(-1).textContent = 'License Type'; header_.insertCell(-1).textContent = 'License Status'; header_.insertCell(-1).textContent = 'Original Issue Date'; header_.insertCell(-1).textContent = 'Expiration Date'; header_.insertCell(-1).textContent = 'On Probation'; header_.insertCell(-1).textContent = 'Discipline on File';

for (var i = 1; i < rows.length; i++) {
  var detailsLink = rows[i].querySelector('a'),
  licenseType = rows[i].querySelector('td:nth-of-type(5)').textContent,
  request = new XMLHttpRequest();
  request.overrideMimeType('application/sml');
  request.open('GET', detailsLink.href, false);
  request.send(null);
  var license_number_ = rows[i].querySelector('td:nth-of-type(2)').textContent;
  var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
  var table = detailsPage.querySelectorAll('#gvLicenses>tbody>tr>td');
  table_text = [...table].map(x => x.textContent);
  for (z=0; z < table_text.length; z++) {
  	if (table_text.includes('Controlled Substance Registration')) {
    	if (table_text[z] == 'Controlled Substance Registration') {
    		if (table_text[(z-1)] == license_number_) {
    			csr_ = table_text[(z-1)]+'-CSR';
    		} else {
    			csr_ = table_text[(z-1)];
    		}
    		csr_issue = table_text[(z+3)];
    		csr_expire = table_text[(z+2)];
    		csr_status = table_text[(z+4)];
    	}
    }
    if (table_text[z] == 'Pharmacist License') {
      expire_ = table_text[(z+2)];
    }
  }
  var row_pharm = document.createElement('tr'); row_pharm.setAttribute('class','redacted');
  var name_ = rows[i].querySelector('td:nth-of-type(1)').textContent;
  var city_ = rows[i].querySelector('td:nth-of-type(3)').textContent;
  var state_ = rows[i].querySelector('td:nth-of-type(4)').textContent;
  var class_ = rows[i].querySelector('td:nth-of-type(5)').textContent;
  var cells= rows[i].querySelectorAll('td');
  status_ = detailsPage.querySelector('#lblDetailStatus').textContent;
  issue_ = detailsPage.querySelector('#lblDetailOriginal').textContent;
  probation_ = detailsPage.querySelector('#lblDetailProbation').textContent;
  discipline_ = detailsPage.querySelector('#lblDetailDiscipline').textContent;
  row_pharm.insertCell(0).textContent = name_; row_pharm.insertCell(-1).textContent = license_number_; row_pharm.insertCell(-1).textContent = city_; row_pharm.insertCell(-1).textContent = state_; row_pharm.insertCell(-1).textContent = class_;
  row_pharm.insertCell(-1).textContent = status_; row_pharm.insertCell(-1).textContent = issue_; row_pharm.insertCell(-1).textContent = expire_; row_pharm.insertCell(-1).textContent = probation_; row_pharm.insertCell(-1).textContent = discipline_; 
  if (table_text.includes('Controlled Substance Registration')) {
  	var row_csr = document.createElement('tr'); row_csr.setAttribute('class','redacted');
  	var class_ = 'Controlled Substance Registration';
  	row_csr.insertCell(0).textContent = name_; row_csr.insertCell(-1).textContent = csr_; row_csr.insertCell(-1).textContent = city_; row_csr.insertCell(-1).textContent = state_; row_csr.insertCell(-1).textContent = class_;
  	row_csr.insertCell(-1).textContent = csr_status; row_csr.insertCell(-1).textContent = csr_issue; row_csr.insertCell(-1).textContent = csr_expire; row_csr.insertCell(-1).textContent = probation_; row_csr.insertCell(-1).textContent = discipline_;
  	new_table_.appendChild(row_csr);
  }
  new_table_.appendChild(row_pharm);
  var cells = rows[i].querySelectorAll('td');
  for (y=0; y < 5; y++) {
  	cells[y].remove();
  }
}
results_.appendChild(new_table_);