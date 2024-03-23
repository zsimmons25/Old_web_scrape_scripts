function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('.RepeaterNormalRow>td>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  div.setAttribute('class','record');
  load(links[i].href, div);
};


var searchresults = document.querySelector('.DataLabelBig');
var records = document.querySelectorAll('tr');
var recordcount = document.createElement('td');
recordcount.setAttribute('class','count');
recordcount.textContent = records.length;
searchresults.appendChild(recordcount);