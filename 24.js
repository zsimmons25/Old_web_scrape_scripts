var noresults_ = document.querySelectorAll('.no_results');
var input_ = document.querySelector('#verify_license_search_results');
if (noresults_[0] != undefined) {
	var table_ = document.createElement('table');
	var header_ = document.createElement('tr');
	var row_ = document.createElement('tr');
	var header_a = ['Name','License Number','Initial License Date','License Expires','Status Disciplines']
	for (x=0;x<header_a.length;x++) {
	header_.insertCell(-1).textContent = header_a[x];
	}
	for (y=0;y<header_a.length;y++) {
		row_.insertCell(-1).textContent = 'redacted';
	}
	table_.appendChild(header_);
	table_.appendChild(row_);
	input_.appendChild(table_);
}





var atag = document.getElementsByTagName("a"); var totala = atag.length; for(var i = 0; i < totala; i++){   var anchor = document.createElement('span');   atag[i].parentNode.insertBefore(anchor, atag[i]);   anchor.appendChild(atag[i]); }