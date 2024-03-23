function sleep(time) {   return new Promise((resolve) => setTimeout(resolve, time)); };
async function clicky() {
	while (true) {
		var rows = document.querySelectorAll('div[id^="I-"]');
		for (x=0;x<rows.length;x++) {
			rows[x].click();
		}
		console.log("Clicked Link");
		await sleep(10000);
		console.log("Slept");
		if (x == rows.length) {
			console.log("All Links clicked");
			break;
		}
	}
}
clicky();

//parent::div//following-sibling::div[starts-with(@class, 'tabs')]//div[starts-with(@class, 'search-row main-one')]/div[starts-with(@class, 'col')][1]

//parent::div//following-sibling::div[starts-with(@class, 'tabs')]//div[starts-with(@class, 'search-row main-one')]/div[starts-with(@class, 'col')][2]

//div[starts-with(@id, 'I-')]/div

//div[@class='firm-results-head']

//div[class^="tabs 1002027"]



//------------------------------------------------------------------------------------------------------------------------------------------------------------


var insert_node_ = document.querySelector('div[class^="footer-rights"]>p');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Reference Number','Name','Type','Date Withdrawn','DFSA Number','Effective Date','Firm Name','Functions','Comments','Legal Status','DFSA Reference','Address','Phone','Fax','License Date','Conditions','Restrictions','Action Title','Action Category','Action Date','Action URL'];
for (i of header_a) {
	header_.insertCell(-1).textContent = i;
}
function sleep(time) {   return new Promise((resolve) => setTimeout(resolve, time)); };
async function scrape() {
	while (true) {
		var rows = document.querySelectorAll('div[id^="I-"]');
		for (x=0;x<rows.length;x++) {
			row_id = rows[x].getAttribute('id').split('I-')[1];
			var details_div = document.querySelector('div[class^="tabs '+row_id+'"]');
			rows[x].click();
			console.log("Sleeping");
			await sleep(3000);
		  	var values_ = rows[x].querySelectorAll('div>div[class^="fh"]');
			var indv_values = details_div.querySelectorAll('div:nth-of-type(1)>div>div:nth-of-type(2)');
			var firm_values = details_div.querySelectorAll('div:nth-of-type(2)>div>div[class^="col-md-9"]');
			var action_rows = details_div.querySelectorAll('div:nth-of-type(3)>div[class="regulatoryresult"]>div');
			var dfsa_ = indv_values[0].textContent;
			var eff_dte = indv_values[2].textContent;
			var frm_nm = indv_values[3].textContent;
			var fnc_ = indv_values[4].textContent;
			var com_ = indv_values[5].textContent;
			if (firm_values[0] != undefined){
				var lgl_sts = firm_values[0].textContent;
				var dfsa_ref = firm_values[1].textContent;
				var add_ = firm_values[2].textContent;
				var phone_ = firm_values[3].textContent;
				var fax_ = firm_values[4].textContent;
				var lic_dte = firm_values[5].textContent;
				var cond_ = firm_values[6].textContent;
				var rstr_ = firm_values[7].textContent;
			}else{
				var lgl_sts = '';
				var dfsa_ref = '';
				var add_ = '';
				var phone_ = '';
				var fax_ = '';
				var lic_dte = '';
				var cond_ = '';
				var rstr_ = '';
			}
			if (action_rows[0] != undefined){
				for (i of action_rows) {
					var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
					for (j of values_) {
			  		record_.insertCell(-1).textContent = j.textContent;
			  		}
			  		var action_values = i.querySelectorAll('div');
					var action_title = action_values[0].textContent;
					var action_cat = action_values[1].textContent;
					var action_dte = action_values[2].textContent;
					var action_url = action_values[0].querySelector('p>a').getAttribute('href');
					[dfsa_,eff_dte,frm_nm,fnc_,com_,lgl_sts,dfsa_ref,add_,phone_,fax_,lic_dte,cond_,rstr_,action_title,action_cat,action_dte,action_url].forEach(x => record_.insertCell(-1).textContent = x);
					new_table_.appendChild(record_);
				}
			}else{
				var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
				for (i of values_) {
		  		record_.insertCell(-1).textContent = i.textContent;
		  		}
				var action_title = '';
				var action_cat = '';
				var action_dte = '';
				var action_url = '';
				[dfsa_,eff_dte,frm_nm,fnc_,com_,lgl_sts,dfsa_ref,add_,phone_,fax_,lic_dte,cond_,rstr_,action_title,action_cat,action_dte,action_url].forEach(x => record_.insertCell(-1).textContent = x);
				new_table_.appendChild(record_);
			}
			details_div.remove();
		}
		if (x == rows.length) {
			insert_node_.appendChild(new_table_);
			console.log("Table inserted");
			break;
		}
	}
}
scrape();