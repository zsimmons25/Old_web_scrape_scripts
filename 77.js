//body/div[position()> 3] - Result Rows

//form/table/tbody/tr/td/table[3]/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[3] - Automap Custom 1

//form/table/tbody/tr/td/table[3]/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[4] - Automap Custom 2

function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('tbody>tr>td:nth-of-type(11)>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  load(links[i].href, div);
};

//------------------------------------------------------------------------------------------------------------------------------

var results = document.querySelectorAll('table[id="10359406580947810"]>tbody>tr>td');
var divs = document.querySelectorAll('html>body>div:nth-of-type(3) ~ div');
var start = 0;
var end = 12;
var x = 4;
var w = 0;
var v = (divs.length + 4);

while (x < v) {
  var table = document.querySelector('html>body>div:nth-of-type('+x+')>form>table>tbody>tr>td>table:nth-of-type(3)>tbody>tr>td>table>tbody>tr>td:nth-of-type(2)>table[summary="layout"]>tbody');
  var header = document.createElement('tr');
  var row = document.createElement('tr');
  var cell1 = header.insertCell(0);
  cell1.textContent = 'Phone';
  var cell2 = header.insertCell(0);
  cell2.textContent = 'Inspection Results';
  var cell3 = header.insertCell(0);
  cell3.textContent = 'Zipcode';
  var cell4 = header.insertCell(0);
  cell4.textContent = 'State';
  var cell5 = header.insertCell(0);
  cell5.textContent = 'Country';
  var cell6 = header.insertCell(0);
  cell6.textContent = 'City';
  var cell7 = header.insertCell(0);
  cell7.textContent = 'Address';
  var cell8 = header.insertCell(0);
  cell8.textContent = 'Facility Type';
  var cell9 = header.insertCell(0);
  cell9.textContent = 'State ID';
  var cell10 = header.insertCell(0);
  cell10.textContent = 'DBA';
  var cell11 = header.insertCell(0);
  cell11.textContent = 'Facility Name';
  for (y=start; y < end; y++) {
    var cell0 = row.insertCell(w);
    cell0.textContent = results[y].textContent;
    w++;
  };
  table.appendChild(header);
  table.appendChild(row);
  start += 12;
  end += 12;
  w = 0;
  x++;
};

//------------------------------------------------------------------------------------------------------------------------------

var divs = document.querySelectorAll('html>body>div:nth-of-type(3) ~ div');
var u = divs.length;
for (z=0;z<u;z++) {
  divs[z].remove();
};