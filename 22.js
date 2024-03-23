
var pdfs = document.querySelectorAll('tr[role="row"]>td:nth-of-type(5)>a');
var ids = document.querySelectorAll('tr[role="row"]>td:nth-of-type(1)');
var names = document.querySelectorAll('tr[role="row"]>td:nth-of-type(2)');
for (a=0;a<pdfs.length;a++) {
	pdfs[a].setAttribute('download','ecard_'+(ids[a].textContent).replace(/(^\s+|\s+$)/g,'')+'_'+(names[a].textContent).replace(/(^\s+|\s+$)/g,''));
};


var b = document.querySelector('#tblECards>thead>tr>th:nth-of-type(3)');
b.textContent = 'eCard Status';

for (i = 0; i < hrefs.length; i++) {
  var newhref = hrefs[i].href.replace('http://','//');
  hrefs[i].setAttribute("href",newhref);
};





var links = document.querySelectorAll('tr[role="row"]>td:nth-of-type(5)>a');
for (a=0;a<links.length;a++) {
	var guid = links[a].getAttribute("href").split('=')[1];
	links[a].setAttribute('href','/Student/eCards?cid='+guid);
};


function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('tr[role="row"]>td:nth-of-type(5)>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  div.setAttribute('class','record');
  load(links[i].href, div);
};