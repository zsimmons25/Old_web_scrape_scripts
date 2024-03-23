var current = document.querySelector('option:checked');
var search_ = document.querySelector('#facilitySearchButton');

if (current.nextSibling == undefined) {
	search_.remove();
}else{
	current.selected = false; current.nextSibling.selected = true;
}