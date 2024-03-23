const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

window.name = {
	"navigation": {
		"provider_": "0",
		"enforcement": "0"
	}
    "providers_": {
        "provider_1": [
            {},
            {},
            {},
            {}
        ]
        "provider_2": [

        ]
        "provider_3": [

        ]
        "provider_4": [

        ]
        "provider_5": [

        ]
    }
}

var links_ = document.querySelectorAll('#ctl00_ContentPlaceHolder1_DgFacils>tbody>tr>td>a');
for (b=0;b<links_.length;b++) {
	links_[b].click();
	sleep(500).then(() => {
		var enfs_ = document.querySelectorAll('li[class="enforcementlist"]>a');
		for (c=0;c<enfs_.length;c++) {
			enfs_[c].click();
			sleep(500).then(() => {
				var values_ = document.querySelectorAll('.rTableCellNoBorder[style="width:66%"]');
				var name_ = values_[0].textContent;
				var address_1 = values_[1].textContent;
				var csz_ = values_[2].textContent;
				var type_ = values_[3].textContent;
				var number_ = values_[4].textContent;
				var status_ = values_[5].textContent;
				var date_ = values_[6].textContent;
				var fee_ = values_ [7].textContent;
				var action_ = values_[8].textContent;
				enf_ = ()
				[name_,address_1,csz_,type_,number_,status_,date_,fee_,action_].forEach(x => enf_.push(x));
				window.name.providers_.provider_+b.push(enf_);
				window.name.navigation.enforcement = window.name.navigation.enforcement + 1
			})
		}
	})
	window.name.navigation.provider_ = window.name.navigation.provider_ + 1
}

var input_ = document.querySelector('#ctl00_ContentPlaceHolder1_lblEnfDates');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name','Adress 1','City State Zip','License Type','License Number','License Status','Action Date','Fee','License Action'];
for (a=0;a<header_a.length;a++) {
	header_.insertCell(-1).textContent = header_a[a];
}
for (x=0;x<5;x++) {
	new_table_.createElement('tr');
	name_td.textContent = window.name.providers_.(provider_+x).enf_.name_;
}
input_.appendChild(new_table_);