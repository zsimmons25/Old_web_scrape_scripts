window.name = 1;

//-------------------------------------

var page_ = (window.name + 1);
window.name = page_;

//-------------------------------------

var page_c = window.name;
var page_dd = document.querySelector('#field');
page_dd.childNodes[1].removeAttribute('selected');
page_dd.childNodes[2].setAttribute('selected', 'selected');
page_dd.childNodes[2].setAttribute('value', page_c);