var insert_node_ = document.querySelector('#isc_18');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['First Name','Middle Name','Last Name','License Number','License Status','License Type','License Expiration Date'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
var div_ = document.querySelector('div[onscroll="return isc_ListGrid_0_body.$lh()"]');
var container_ = document.querySelector('div[class="tabSetContainer"]');
var close_ = document.querySelector('img[eventpart="icon"]');
function sleep(time) {   return new Promise((resolve) => setTimeout(resolve, time)); };
async function doTheThing() {
	while (true) {
		var rows = document.querySelectorAll('table[class="listTable"] > tbody > tr');
		for (x=0;x<rows.length;x++) {
		  	var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
			var values_ = rows[x].querySelectorAll('td');
			var first_name = values_[0].textContent;
			var middle_name = values_[1].textContent;
			var last_name = values_[2].textContent;
			var lic_no = values_[3].textContent;
			var status_ = values_[4].textContent;
			var type_ = values_[5].textContent;
			var led_ = values_[6].textContent;
			[first_name,middle_name,last_name,lic_no,status_,type_,led_].forEach(x => record_.insertCell(-1).textContent = x);
			new_table_.appendChild(record_);
		}
		console.log(rows.length+" Rows Added");
		var scroll_check = div_.scrollTop;
		div_.scrollTop += 725;
		console.log("Scrolled to "+div_.scrollTop);
		console.log("Height is "+div_.scrollHeight);
		await sleep(3000);
		console.log("Slept");
		if (scroll_check == div_.scrollTop) {
			insert_node_.appendChild(new_table_);
			console.log("Table inserted");
			close_.click();
			container_.remove();
			break;
		}
	}
}
doTheThing();