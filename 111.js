function sleep(time) {   return new Promise((resolve) => setTimeout(resolve, time)); };
async function scrape() {
	while (true) {
		var input_ = document.querySelector('#section-content > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(1) > td > p:nth-child(2) > span > b > i');
		var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
		var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
		var header_a = ['Name','License Number','License Status','License Type','Licese Issue Date','License Expiration Date','Complaint Numbers','URLs'];
		for (i of header_a) {
			header_.insertCell(-1).textContent = i;
		}
		var rows = document.querySelectorAll('table#ContentPlaceHolder1_dtgGeneral > tbody > tr:not(:first-child)');
		if (rows[0] != undefined) {
			for (i of rows) {
			  	var lic_ = document.createElement('tr'); lic_.setAttribute('class','redacted');
				var detailsLink = i.querySelector('td:nth-of-type(1)>a');
				request = new XMLHttpRequest();
				request.open('GET', detailsLink.href, false);
				request.send(null);
				await sleep(2000);
				var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
				var name_= i.querySelector('td:nth-of-type(1)>a>b').textContent;
				var values_ = detailsPage.querySelectorAll('table#ContentPlaceHolder1_dtgGeneral > tbody > tr > td:nth-of-type(2)');
				var lic_no = values_[0].textContent;
				var status_ = values_[1].textContent;
				var type_ = values_[2].textContent;
				var lid_ = values_[3].textContent;
				var led_ = values_[4].textContent;
				var disc_a = detailsPage.querySelectorAll('table#ContentPlaceHolder1_dtgDisciplinaryBoardActions > tbody > tr:not(:first-child) > td:nth-of-type(1)');
				var disc_urls_a = detailsPage.querySelectorAll('table#ContentPlaceHolder1_dtgDisciplinaryBoardActions > tbody > tr:not(:first-child) > td:nth-of-type(3)>a');
				if (disc_a[0] != undefined) {
					if (disc_a[1] !=undefined) {
						var disc_ta = [];
						var disc_turls = [];
						for (x=0;x<disc_a.length;x++) {
							var disc_t = disc_a[x].textContent;
							disc_ta.push(disc_t);
						}
						for (y=0;y<disc_urls_a.length;y++) {
							var disc_url = disc_urls_a[y].getAttribute("href");
							disc_turls.push(disc_url);
						}
						disc_ = disc_ta.join(' | ');
						disc_urls = disc_turls.join(' | ');
					}else {
						disc_ = disc_a[0].textContent;
						disc_urls = disc_urls[0].textContent;
					}
				} else {
					disc_ = 'None';
					disc_urls = 'None';
				}
				[name_,lic_no,status_,type_,lid_,led_,disc_,disc_urls].forEach(x => lic_.insertCell(-1).textContent = x);
				new_table_.appendChild(lic_);
				var cells_ = i.querySelectorAll('td');
			  	for (i of cells_) {
			  		i.remove();
			  	}
			}
		} else {
			var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
			for (i of header_a) {
				blank_row.insertCell(-1).textContent = 'redacted';
			}
			new_table_.appendChild(blank_row);
		}
		input_.appendChild(new_table_);
		break;
	}
}
scrape();