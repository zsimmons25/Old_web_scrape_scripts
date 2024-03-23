var insert_node_ = document.querySelector('#content > div.gridNew');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','License Number','Action', 'Action URL'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('tr[role="row"]:not([class="jqgfirstrow"])');
if (rows[0] != undefined) {
	for (i of rows) {
		var detailsLink = i.querySelector('td>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var name_ = detailsPage.querySelector('#focusname').textContent;
		var values_ = detailsPage.querySelectorAll('div[class="dataval"]');
		var lic_ = values_[1].textContent;
		var actions_ = detailsPage.querySelectorAll('a[target="_blank"]');
		if (actions_[0] != undefined) {
			for (i of actions_) {
				var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
				var action_= i.textContent;
				var action_url = "https://www.pharmacy.texas.gov" + i.getAttribute("href");
				[name_,lic_,action_, action_url].forEach(x => record_.insertCell(-1).textContent = x);
				new_table_.appendChild(record_);
			}
		}else{
			var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
			var action_= "None";
			var action_url = "None";
			[name_,lic_,action_, action_url].forEach(x => record_.insertCell(-1).textContent = x);
			new_table_.appendChild(record_);
		}
	}
} else {
	var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
	for (i of header_a) {
		blank_row.insertCell(-1).textContent = 'redacted';
	}
	new_table_.appendChild(blank_row);
}
insert_node_.appendChild(new_table_);


//----------------------------------------------------------------------------------------------------------



var redacted = document.querySelector('tbody[class="redacted"]');
redacted.remove();
var a = document.querySelector('#pager_center > table > tbody > tr > td:nth-child(4) > input');
var b = document.querySelector('#sp_1_pager').textContent;
var c = document.querySelector('#next_pager');
if (a.value == b) {
	c.remove();
}