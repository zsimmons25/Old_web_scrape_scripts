var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not([style="color:White;background-color:#4A5375;"])'); 
rows[0].insertCell(-1).textContent = 'Issued'; rows[0].insertCell(-1).textContent = 'Expiration'; rows[0].insertCell(-1).textContent = 'Action Flag'; rows[0].insertCell(-1).textContent = 'Action Type'; rows[0].insertCell(-1).textContent = 'Violation'; rows[0].insertCell(-1).textContent = 'Action Start Date'; rows[0].insertCell(-1).textContent = 'Action End Date';

for (var i = 1; i < rows.length; i++) {
	var detailsLink = rows[i].querySelector('a');    
	request = new XMLHttpRequest();
	request.open('GET', detailsLink.href, false);   
	request.send(null);
	var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
	var type_ = rows[i].querySelector('td:nth-of-type(2)').textContent;
	var error_ = detailsPage.querySelector('.content-container>fieldset>h2');
	var error_2 = detailsPage.querySelector('html>body>span>h1');
	if (error_ == undefined && error_2 == undefined) {
		if (type_ == 'Epinephrine Certification') { 
			issued_ = detailsPage.querySelector('#_ctl31__ctl1_issue_date').textContent;
			expiration_ = detailsPage.querySelector('#_ctl31__ctl1_expiry').textContent;
		} else {
			issued_ = detailsPage.querySelector('#_ctl32__ctl1_issue_date').textContent;
			expiration_ = detailsPage.querySelector('#_ctl32__ctl1_expiry').textContent;
		}
		action_para = detailsPage.querySelectorAll('#_ctl53__ctl1_Label_violation_code');
		action_emt = detailsPage.querySelectorAll('#CertActionUDO__ctl1_lblViolation');
		if (action_para.length > 0 || action_emt.length > 0) {
			action_flag_ = 'Y';
		} else {
			action_flag_ = 'N';
		}
		if (action_flag_ == 'Y') {
			if (action_para.length > 0) {
				action_type = detailsPage.querySelector('#_ctl53__ctl1_disciplinary_action').textContent;
				violation_ = detailsPage.querySelector('#_ctl53__ctl1_violation_code').textContent;
				action_start_date = detailsPage.querySelector('#_ctl53__ctl1_disp_start').textContent;
				action_end_date = detailsPage.querySelector('#_ctl53__ctl1_disp_end').textContent;
			} else {
				action_type = detailsPage.querySelector('#CertActionUDO__ctl1_valCertAction').textContent;
				violation_ = detailsPage.querySelector('#CertActionUDO__ctl1_valViolation').textContent;
				action_start_date = detailsPage.querySelector('#CertActionUDO__ctl1_valStartDate').textContent;
				action_end_date = detailsPage.querySelector('#CertActionUDO__ctl1_valEndDate').textContent;
			}
		} else {
			action_type = '';
			violation_ = '';
			action_start_date = '';
			action_end_date = '';
		}
		rows[i].insertCell(-1).textContent = issued_; rows[i].insertCell(-1).textContent = expiration_; rows[i].insertCell(-1).textContent = action_flag_; rows[i].insertCell(-1).textContent = action_type; rows[i].insertCell(-1).textContent = violation_; rows[i].insertCell(-1).textContent = action_start_date; rows[i].insertCell(-1).textContent = action_end_date;
	} else {
		rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = ''; rows[i].insertCell(-1).textContent = '';
	}
}