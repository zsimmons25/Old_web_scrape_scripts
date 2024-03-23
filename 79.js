var per_page = document.querySelector('#edit-items-per-page');
var apply = document.querySelector('input[value="Apply"]');
per_page.value = 100;
apply.click();

//---------------------------------------------------------------------------------------------------------

var current_page = document.querySelector('nav[class="pager"]>ul>li>a[title="Current page"]').textContent;
var page_id = current_page.charAt(current_page.length-1);
if (page_id != window.name) {
	var page_to = document.querySelector('nav[class="pager"]>ul>li>a[title="Go to page '+window.name+'"]');
	page_to.click();
}