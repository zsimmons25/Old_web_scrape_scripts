function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('html>body>table>tbody>tr>td>font>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  load(links[i].href, div);
};

//------------------------------------------------------------------------------------------------------------------------------

var mis = document.querySelectorAll('html>body>table>tbody>tr>td:nth-of-type(2)>font');
var flags = document.querySelectorAll('html>body>table>tbody>tr>td:nth-of-type(7)>font');
var divs = document.querySelectorAll('html>body>div:not(.redacted)');
var x = 1;
var z = 0;
var v = (divs.length + 1);

while (x < v) {
  var div = document.querySelector('html>body>div:nth-of-type('+x+')');
  var mi = document.createElement('mi');
  var flag = document.createElement('flag');
  mi.textContent = mis[z].textContent;
  flag.textContent = flags[z].textContent;
  div.appendChild(mi);
  div.appendChild(flag);
  z++;
  x++;
};

//------------------------------------------------------------------------------------------------------------------------------

var div = document.body.appendChild(document.createElement('div'));
div.setAttribute('class','redacted');
var redacted = div.appendChild(document.createElement('redacted'));
redacted.textContent = 'redacted'