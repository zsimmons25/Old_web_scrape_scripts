np_ = document.querySelector('.ng-scope>a[ng-click="setCurrent(pagination.current + 1)"]');
last_cell_ = document.querySelector('.table.table-bordered>tbody>tr>th:nth-of-type(6)>span');
table_ = document.querySelector('.table.table-bordered>tbody');
if (np_ != undefined) {
	last_cell_.appendChild(np_);
}  else {
	var nr_row = table_.insertRow(-1); nr_row.setAttribute('class', 'ng-scope');
	for (x=0;x<6;x++) {
		nr_row.insertCell(-1).textContent = 'redacted';
	}
}

//-----------------------------------------------

np_ = document.querySelector('a[ng-click="setCurrent(pagination.current + 1)"]');
lp_ = document.querySelector('li[ng-class*="last"]');
table_ = document.querySelector('.table.table-bordered>tbody');
if (lp_.className == "ng-scope disabled") {
	np_.remove();
}