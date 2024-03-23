document.querySelectorAll('table[class="datagrid"]>tbody>tr>td>a')

function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('table[class="datagrid"]>tbody>tr>td>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  div.setAttribute('class','record');
  load(links[i].href, div);
};