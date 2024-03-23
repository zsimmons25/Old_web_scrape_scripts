function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var pagenav = document.querySelectorAll('table[id="datagrid_results"]>tbody>tr');
var pagenavl = pagenav.length;
var links = document.querySelectorAll('table[id="datagrid_results"]>tbody>tr:not(:nth-of-type('+pagenavl+'))>td>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  load(links[i].href, div);
};