rows = document.querySelectorAll('tr[class^="table"]');

for (x=2;x<rows.length;x++) {
	if (rows[x].querySelector('td:nth-of-type(10)').textContent == 'No') {
		rows[x].remove();
	}
}

show = document.querySelector('#ctl00_ContentPlaceholder_ResultsGridView_ctl01_ShowAllLinkButton');
if (show != undefined) {
	if (show.textContent == "Show All") {
		show.click();
	}
}



rows = document.querySelectorAll('tr[class^="table"]');
for (x=3;x<rows.length;x++) {
	if (rows[x].querySelector('td:nth-of-type(10)').textContent == 'No') {
		rows[x].remove();
	}
}


rows_ = document.querySelectorAll('tr[class^="table"]');
if (rows_[2].querySelector('td:nth-of-type(10)').textContent == 'No') {
	cells_ = rows[2].querySelectorAll('td');
	for (y=1;y<cells_.length;y++) {
		cells_[0].querySelector('a').textContent = 'nil';
		cells_[y].textContent = '';
	}
}