function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('tbody>tr>td>div>a[href^="ViewDetails"]');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  load(links[i].href, div);
};

//--------------------------------------------------------------------------------------

var a = document.querySelector('div[style="margin-left:20px;"]>b');
a.innerHtml = 'Name:'




//div[@style="margin-left:20px;"]//b[normalize-space(.)]/text()[normalize-space(.)]

var a = document.querySelectorAll('div[style="margin-left:20px;"]>b:nth-of-type(1)');
var y = a.length + 1;
for (x=0; x < y; x++) {
	var b = document.createTextNode("Name:");
    a[x].appendChild(b);
};