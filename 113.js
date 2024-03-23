var header = document.querySelector('thead > tr'); (header.insertCell(-1).textContent = 'License Action'); (header.insertCell(-1).textContent = 'Action Summary');

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

var rows = document.querySelectorAll('tbody[role="alert"]>tr');
function sleep(time) {   return new Promise((resolve) => setTimeout(resolve, time)); };
async function doTheThing() {
	for (i of rows) {
		i.click();
		await sleep(5000);
		var tables = document.querySelectorAll('table[class="public-emt-regulatory-actions"]');
		if (tables[1] != undefined) {
			var action_a = tables[1].querySelectorAll('td');
			var action = (action_a[0].textContent+'|'+action_a[1].textContent+'|'+action_a[2].textContent+'|'+action_a[3].textContent).trim();
			(i.insertCell(-1).textContent = 'Y');
			(i.insertCell(-1).textContent = action);
		}else{
			(i.insertCell(-1).textContent = 'N');
			(i.insertCell(-1).textContent = 'None');
		}
		var buttons = document.querySelectorAll('button');
		buttons[1].click();
		await sleep(1000);
	}
}
doTheThing();