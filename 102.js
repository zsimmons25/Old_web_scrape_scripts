//html/body/div - Result Rows

//table/tbody/tr[2]/td/table[1]/tbody/tr[2]/td/div/table/tbody/tr/td[1] - Auto Map Custom 1

//table/tbody/tr[2]/td/table[1]/tbody/tr[2]/td/div/table/tbody/tr/td[2] - Auto Map Custom 2


function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('tbody>tr>td>font>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  load(links[i].href, div);
};

//------------------------------------------------------------------------------------------------------------------------------

var disciplineh = document.querySelector('table[border="1"]>tbody>tr:nth-of-type(1)>th:nth-of-type(6)');
var disciplinei = document.querySelectorAll('table[border="1"]>tbody>tr>td:nth-of-type(6)');
var divs = document.querySelectorAll('html>body>div');
var v = (divs.length + 1);
var x = 1;
var y = 0;

while (x < v) {
  var table = document.querySelector('div:nth-of-type('+x+')>table>tbody>tr:nth-of-type(2)>td>table:nth-of-type(1)>tbody>tr:nth-of-type(2)>td>div>table>tbody');
  var line = table.insertRow(6);
  var cell1 = line.insertCell(0);
  var cell2 = line.insertCell(1);
  cell1.textContent = disciplineh.textContent;
  cell2.textContent = disciplinei[y].textContent;
  y++;
  x++;
};