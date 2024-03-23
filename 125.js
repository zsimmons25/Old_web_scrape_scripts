//#datagrid_results>tbody>tr>td>table>tbody>tr>td>a

function load(url, element) {   req = new XMLHttpRequest();   req.open('GET', url, false);   req.send(null);   element.innerHTML = req.responseText; }; var links = document.querySelectorAll('#datagrid_results>tbody>tr>td>table>tbody>tr>td>a'); for (i = 0; i < links.length; i++) {   var div = document.body.appendChild(document.createElement('div'));   load(links[i].href, div); };


function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('#datagrid_results>tbody>tr>td>table>tbody>tr>td>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  load(links[i].href, div);
};
