var input = document.querySelector('#mainContent > section:nth-child(2) > div > div.small-12.medium-8.columns > div > h3');
var table_ = document.querySelector('table[name^="minutes"]');
var links_ = table_.querySelectorAll('tbody>tr>td>a');
var months_ = ['December','November','October','September','August','July','June','May','April','March','February','January'];
for (i of months_) {
	for (j of links_) {
		if (j.textContent.includes(i)) {
			input.appendChild(j);
		}
	}
	if (input.querySelector('a') != null) {
		break
	}
}