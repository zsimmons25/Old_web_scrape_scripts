window.name = 1;

var pages = document.querySelectorAll('table:nth-of-type(2)>tr>td>div>a');

pages[window.name].click();

window.name = window.name++

//---------------------------------------------------------------------------

var pages = document.querySelectorAll('table:nth-of-type(2)>tr>td>div>a');
var next_ = document.querySelector('#srchTbl > table:nth-child(5) > tr > td > div > a');

if (window.name == (pages.length-1)) {
	next_.remove();
}

var pages = document.querySelectorAll('table:nth-of-type(2)>tr>td>div>a');
pages[window.name].click();