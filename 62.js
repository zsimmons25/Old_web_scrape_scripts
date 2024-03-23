var names = document.querySelectorAll('div[class^="view-content"]>font>table>tbody>tr>td>font>strong>a');
var rows = document.querySelectorAll('div[class^="view-content"]>font>table>tbody>tr:nth-of-type(2) ~ tr');
header = document.querySelector('div[class^="view-content"]>font>table>tbody>tr:nth-of-type(2)');
nm_ = header.insertCell(0);nm_.textContent = "provider_org_full_name";
cn_ = header.insertCell(-1);cn_.textContent = "Case Number";
oo_ = header.insertCell(-1);oo_.textContent = "Offical Order";
pd_ = header.insertCell(-1);pd_.textContent = "Post Date";
as_ = header.insertCell(-1);as_.textContent = "Action Summary";
z = -1;

for (x = 0; x < rows.length; x++) {
  	if (rows[x].childNodes[1].hasAttribute('colspan')) {
  	}
  	else {
  		if (z == -1){
  			rows[x].remove();
  		}else{
  			var detailsLink = names[z];
			request = new XMLHttpRequest();
			request.open('GET', detailsLink.href, false);
			request.send(null);
			var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
			var disca_ = detailsPage.querySelectorAll('div[class^="view-content"]>table>tbody>tr>td>span');
			if (disca_[0] == undefined) {
				case_ = '';
				order_ = '';
				date_ = '';
				discs_= '';
			} else {
				var case_ = disca_[0].textContent;
				var order_ = disca_[1].textContent;
				var date_ = disca_[2].textContent;
				var discs_ = detailsPage.querySelector('div[class^="view-content"]>table>tbody>tr>td[colspan="3"][valign="top"]>font').textContent;
			}
  			var name_ = rows[x].insertCell(0); name_.textContent = names[z].textContent;var case_c = rows[x].insertCell(-1); case_c.textContent = case_;var order_c = rows[x].insertCell(-1); order_c.textContent = order_;var date_c = rows[x].insertCell(-1); date_c.textContent = date_; var discs_c = rows[x].insertCell(-1); discs_c.textContent = discs_;
  		}
  	}
  	if (rows[x].childNodes[1].getAttribute('colspan') === '3') {
  		z++;
  	}
}

blanks = document.querySelectorAll('div[class^="view-content"]>font>table>tbody>tr');
for (x = 0; x < blanks.length; x++) {
	if (blanks[x].childNodes[1].hasAttribute('colspan')) {blanks[x].remove()};
}