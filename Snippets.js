Snippets

function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  div.setAttribute('class','record');
  load(links[i].href, div);
};

(function (url, s) {   s = document.createElement('script');   s.src = url;   (document.getElementsByTagName('head') [0] || document.getElementsByTagName('body') [0]).appendChild(s); }) ('https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');

var matchingElement = document.evaluate("//*[@id='grdlkp_tbl']/tfoot/tr/td/select[1]/option[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
matchingElement.setAttribute("value","100");

var a = document.querySelector('tfoot > tr > td > span:nth-of-type(5)').textContent; var b = a.match(/(\d+) of (\d+)/); if (b[1]==b[2]){   document.querySelector('.fa.fa-angle-right').remove(); }

var a = document.getElementById("btnLogin"); a.setAttribute("aria-expanded","true");

var a = document.getElementById("menuLogin"); a.setAttribute("class","dropdown pull-right open");

var a = document.getElementsByClassName("panel panel-default"); a.setAttribute("class","panel panel-default panel-open is-open");

var a = document.getElementByClassName("yesbtn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"); a.click

var a = document.getElementsByTagName('option'),t=0,n= a.length; while(n>t){     a[t].setAttribute(‘value’,’30563’);     t++; }

var a = document.getElementById("loading-div"); a.setAttribute("style","blank"); var b = a.getAttribute("style"); Object.freeze(b);

var a = document.getElementsByTagName('a'),t=0,n= a.length; while(n>t){     a[t].setAttribute('target','_self');     t++; }

var a = document.getElementsByClassName("glyphicon tiny glyphicon-triangle-right"); var x = 0; var len = a.length; for (; x < len; x++) {a[x].click()};

var arr = []; for (r=0;r<a.length;r++) {arr.push(a[r].textContent)};