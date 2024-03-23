var results_ = document.querySelector('.section');
var rows_ = document.querySelectorAll('#gvResults tr');
var new_table_ = document.createElement('tbody');
var header_ = new_table_.insertRow(0);
var headers_ = ['Name','DBA','License Number','City','State','License Type','License Status','Original Issue Date','Expiration Date','On Probation','Discipline on File'];
var license_types_ = ['Pharmacy Permit','Medical Equipment Supplier Permit','Drug Facility Permit','Home Health Hospice Permit','Non-Resident Facility Permit','Medical Gas Wholesaler','Outsourcer','Pharmacy Services Permit','Unused/Unneeded Medication Donation Permit']
header_.setAttribute('class', 'redacted');
for (i = 0; i<headers_.length;i++) {
  header_.insertCell(i).textContent = headers_[i]
};
for (var i = 1; i < rows_.length; i++) {
  var detailsLink = rows_[i].querySelector('a'),
  request = new XMLHttpRequest();
  request.overrideMimeType('application/sml');
  request.open('GET', detailsLink.href, false);
  request.send(null);
  var name_ = rows_[i].querySelector('td:nth-of-type(1)').textContent;
  var dba_ = rows_[i].querySelector('td:nth-of-type(2)').textContent;
  var license_number_ = rows_[i].querySelector('td:nth-of-type(3)').textContent;
  var city_ = rows_[i].querySelector('td:nth-of-type(4)').textContent;
  var state_ = rows_[i].querySelector('td:nth-of-type(5)').textContent;
  var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
  var table = detailsPage.querySelectorAll('#gvLicenses>tbody>tr>td');
  table_text = [...table].map(x => x.textContent);
  for (z = 0; z < table_text.length; z++) {
    if (table_text.includes('Controlled Substance Registration')) {
      if (table_text[z] == 'Controlled Substance Registration') {
        if (table_text[(z - 1)] == license_number_) {
          csr_ = table_text[(z - 1)] + '-CSR';
        } else {
          csr_ = table_text[(z - 1)];
        }
        csr_issue = table_text[(z + 3)];
        csr_expire = table_text[(z + 2)];
        csr_status = table_text[(z + 4)];
      }
    }
    if (license_types_.some(x => x == table_text[z])) {
      var expire_ = table_text[(z + 2)];
      var class_ = table_text[z];
    } else {
      var expire_ = expire_ || '';
      var class_ = class_ || 'Pharmacy/Facility';
    }
  }
  var row_pharm = document.createElement('tr');
  row_pharm.setAttribute('class', 'redacted');
  status_ = detailsPage.querySelector('#lblDetailStatus').textContent;
  issue_ = detailsPage.querySelector('#lblDetailOriginal').textContent;
  probation_ = detailsPage.querySelector('#lblDetailProbation').textContent;
  discipline_ = detailsPage.querySelector('#lblDetailDiscipline').textContent;
  var row_pharm_a = [name_,dba_,license_number_,city_,state_,class_,status_,issue_,expire_,probation_,discipline_]
  for (w = 0; w<headers_.length; w++) {
    row_pharm.insertCell(w).textContent = row_pharm_a[w];
  }
  if (table_text.includes('Controlled Substance Registration')) {
    var row_csr = document.createElement('tr');
    row_csr.setAttribute('class', 'redacted');
    var class_ = 'Controlled Substance Registration';
    row_csr_a = [name_,dba_,csr_,city_,state_,class_,csr_status,csr_issue,csr_expire,probation_,discipline_]
    for (v = 0; v<headers_.length; v++) {
      row_csr.insertCell(v).textContent = row_csr_a[v];
  }
    new_table_.appendChild(row_csr);
  }
  new_table_.appendChild(row_pharm);
  var cells = rows_[i].querySelectorAll('td');
  for (y = 0; y < 6; y++) {
    cells[y].remove();
  }
}
results_.appendChild(new_table_);