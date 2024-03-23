// https://ocp.dc.gov/page/excluded-parties-list

var exlist = document.querySelector('.field-item.even>p:nth-of-type(7)');
var table = document.createElement('table'); table.setAttribute('class','redacted');
var headerc = document.createElement('thead');
var header = headerc.insertRow(0);
var records_table = document.createElement('tbody');
var tables = document.querySelectorAll('.normal-tables');
var records = document.querySelectorAll('tbody>tr');
var individuals1 = document.querySelectorAll('.normal-tables:nth-of-type(1)>tbody>tr>td:nth-of-type(1)');
var individuals2 = document.querySelectorAll('.normal-tables:nth-of-type(3)>tbody>tr>td:nth-of-type(1)');
var companies1 = document.querySelectorAll('.normal-tables:nth-of-type(2)>tbody>tr>td:nth-of-type(1)');
var companies2 = document.querySelectorAll('.normal-tables:nth-of-type(4)>tbody>tr>td:nth-of-type(1)');
var principals = []; var principalsn = document.querySelectorAll('.normal-tables:nth-of-type(4)>tbody>tr>td:nth-of-type(3)'); for (r=0;r<principalsn.length;r++) {principals.push(principalsn[r].textContent)};
var princ1 = document.querySelector('.normal-tables:nth-of-type(4)>thead>tr>td:nth-of-type(3)'); var princ2 = document.querySelectorAll('.normal-tables:nth-of-type(4)>tbody>tr>td:nth-of-type(3)'); princ1.remove(); for (s=0; s<princ2.length; s++) {princ2[s].remove()};
var princ_adds = document.querySelectorAll('.normal-tables>tbody>tr>td:nth-of-type(2)');
var action_dates = document.querySelectorAll('.normal-tables>tbody>tr>td:nth-of-type(3)');
var expire_dates = document.querySelectorAll('.normal-tables:nth-of-type(-n+2)>tbody>tr>td:nth-of-type(4)');
var termed_dates = document.querySelectorAll('.normal-tables:nth-of-type(n+3)>tbody>tr>td:nth-of-type(4)');
var agencies = document.querySelectorAll('.normal-tables:nth-of-type(-n+2)>tbody>tr>td:nth-of-type(5)');
var reasons = document.querySelectorAll('.normal-tables:nth-of-type(-n+2)>tbody>tr>td:nth-of-type(6)');
var t = 0; var u = 0; var w = 0; var x = 0; var y = 0; var z = 0;

var nameofindh =header.insertCell(0); nameofindh.textContent = 'Name of Individual';
var nameofcomph =header.insertCell(1); nameofcomph.textContent = 'Name of Company';
var principalsh = header.insertCell(2); principalsh.textContent = 'Principals';
var princaddh =header.insertCell(3); princaddh.textContent = 'Principal Addresss';
var actdteh =header.insertCell(4); actdteh.textContent = 'Action Date';
var expdteh =header.insertCell(5); expdteh.textContent = 'Expiration Date';
var termdteh =header.insertCell(6); termdteh.textContent = 'Termination Date';
var agencyh = header.insertCell(7); agencyh.textContent = 'Agency Instituting the Action';
var reasonh = header.insertCell(8); reasonh.textContent = 'Reason for the Action';
table.appendChild(headerc); table.appendChild(records_table);

for (v=0; v<records.length;v++) {
	var row = records_table.insertRow(0); var reason = row.insertCell(0); var agency = row.insertCell(0); var termed_date= row.insertCell(0); var expire_date = row.insertCell(0); var action_date = row.insertCell(0); var princ_add = row.insertCell(0); var principal_ = row.insertCell(0); var company_name = row.insertCell(0); var ind_name = row.insertCell(0);
	if (records[v].parentNode.parentNode == tables[0]) {	ind_name.textContent = individuals1[w].textContent; princ_add.textContent = princ_adds[v].textContent; action_date.textContent=action_dates[v].textContent; expire_date.textContent=expire_dates[t].textContent; agency.textContent=agencies[v].textContent; reason.textContent=reasons[v].textContent; w++; t++};
	if (records[v].parentNode.parentNode == tables[1]) {	company_name.textContent = companies1[x].textContent; princ_add.textContent = princ_adds[v].textContent; action_date.textContent=action_dates[v].textContent; expire_date.textContent=expire_dates[t].textContent; agency.textContent=agencies[v].textContent; reason.textContent=reasons[v].textContent; x++; t++};
	if (records[v].parentNode.parentNode == tables[2]) {	ind_name.textContent = individuals2[y].textContent; princ_add.textContent = princ_adds[v].textContent; action_date.textContent=action_dates[v].textContent; termed_date.textContent=termed_dates[u].textContent; y++; u++};
	if (records[v].parentNode.parentNode == tables[3]) {	company_name.textContent = companies2[z].textContent; principal_.textContent=principals[z]; princ_add.textContent = princ_adds[v].textContent; action_date.textContent=action_dates[v].textContent; termed_date.textContent=termed_dates[u].textContent; z++; u++};
}
var row = records_table.insertRow(0); var reason = row.insertCell(0); reason.textContent = 'redacted'; var agency = row.insertCell(0); agency.textContent = 'redacted'; var termed_date= row.insertCell(0); termed_date.textContent = 'redacted'; var expire_date = row.insertCell(0); expire_date.textContent = 'redacted'; var action_date = row.insertCell(0); action_date.textContent = 'redacted'; var princ_add = row.insertCell(0); princ_add.textContent = 'redacted'; var principal_ = row.insertCell(0); principal_.textContent = 'redacted'; var company_name = row.insertCell(0); company_name.textContent = 'redacted'; var ind_name = row.insertCell(0); ind_name.textContent = 'redacted';
exlist.appendChild(table);


//--------------------------------------------------------------------------------------------

var tbremoved = document.querySelectorAll('.normal-tables:nth-of-type(1)>tbody>tr');
for (x=0;x<3;x++) {tbremoved[x].remove()};
var header = document.querySelector('.normal-tables:nth-of-type(1)>thead>tr');
var nameofcomph =header.insertCell(1);
nameofcomph.textContent = 'Name of Company';
var principalsh = header.insertCell(2);
principalsh.textContent = 'Principals';
var term_dateh = header.insertCell(6);
term_dateh.textContent = 'Termination Date';