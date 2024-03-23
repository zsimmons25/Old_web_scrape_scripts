var hrefs = document.querySelectorAll('table[id="dtgList"]>tbody>tr[style="color:Black;"]>td>a');

for (i = 0; i < hrefs.length; i++) {
  var newhref = hrefs[i].href.replace('http://','//');
  hrefs[i].setAttribute("href",newhref);
};

//------------------------------------------------------------------------------------------------------------------------------

function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('table[id="dtgList"]>tbody>tr[style="color:Black;"]>td>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  load(links[i].href, div);
};

//Blocked loading mixed active content - Error that occurs