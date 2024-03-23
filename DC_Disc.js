var rows = document.querySelectorAll('#datagrid_results>tbody>tr:not([style="color:White;background-color:#83A0C8;"])');
if (rows[0].querySelectorAll('td').length > 0){
}else{
	['Obtained By','Issue Date','Expiration Date','Specialty Information','Discipline Information'].forEach(x => rows[0].insertCell(-1).textContent = x);
	for (var i = 1; i < rows.length; i++) {
	    var detailsLink = rows[i].querySelector('a');
        request = new XMLHttpRequest();
        request.open('GET', detailsLink.href, false);
        request.send(null);
        var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
        var values_ = detailsPage.querySelectorAll('table[width="90%"]>tbody>tr>td:not([class="Labelheader"])>span[id*="_"]');
        var additonal_tables = detailsPage.querySelectorAll('.layout>tbody>tr>td>table>tbody>tr>td>span>table>tbody');
        if (values_.length > 3) {
	        obtained_by_ = values_[16].textContent;
	        issue_date_ = values_[18].textContent;
	        expiration_date = values_[19].textContent;
	        specialty_info_ = additonal_tables[0].textContent;
	        discipline_info_ = additonal_tables[1].textContent;
	        [obtained_by_,issue_date_,expiration_date,specialty_info_,discipline_info_].forEach(x => rows[i].insertCell(-1).textContent = x);
	    } else {
	    	for (x=0;x<5;x++){
	    		rows[i].insertCell(-1).textContent = '';
	    	}
	    }
	}
}