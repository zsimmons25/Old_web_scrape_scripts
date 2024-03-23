//div[@class='record']

//div[@class='left col-45'][1]

//p[1]/strong/text() - provider_org_full_name

//p[1]/text()[2] - address_1

//p[1]/text()[3] - csz

//p[3]/a/@href - website

//div[@class='left col-45'][2]





function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('.rowText>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  div.setAttribute('class', 'record');
  load(links[i].href, div);
};

function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('.rowText>a');
var divs = document.querySelectorAll('html>body>div[class="record"]');
for (i = 0; i < links.length; i++) {
  load(links[i].href, divs[i]);
};

var divs = document.querySelectorAll('html>body>div[class="record"]');
for (x=0;x<divs.length;x++) {
  divs[x].remove();
}