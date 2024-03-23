function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('td[class="sorting_1"]>a');
for (i = 0; i < links.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  div.setAttribute('class','record');
  load(links[i].href, div);
};

//----------------------------------------------------------------------------

function load(url, element) {
  req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
};
var links = document.querySelectorAll('td[class="sorting_1"]>a');
var divs = document.querySelectorAll('html>body>div[class="record"]');
for (i = 0; i < links.length; i++) {
  load(links[i].href, divs[i]);
};

var page = document.querySelector('#example_info');
var current = page.textContent.split('to ')[1].split(' of')[0];
var final = page.textContent.split('of ')[1].split(' entries')[0];
var next = document.querySelector('#example_next>a');
if (current == final) {
	next.remove()
}


//----------------------------------------------------------------------------


var insert_node_ = document.querySelector('');
var new_table_ = document.createElement('tbody');new_table_.setAttribute('class', 'redacted');
var header_ = new_table_.insertRow(0); header_.setAttribute('class', 'redacted');
var header_a = ['Name'];
for (i of header_a) {
  header_.insertCell(-1).textContent = i;
}
var rows = document.querySelectorAll('td[class^="  column"]');
if (rows[0] != undefined) {
  for (i of rows) {
      var record_ = document.createElement('tr'); record_.setAttribute('class','redacted');
    var detailsLink = i.querySelector('a');
    request = new XMLHttpRequest();
    request.open('GET', detailsLink.href, false);
    request.send(null);
    var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
    var values_ = detailsPage.querySelectorAll('');
    var name_ = values_[].textContent;
    [name_].forEach(x => record_.insertCell(-1).textContent = x);
    new_table_.appendChild(record_);
    var cells_ = i.querySelectorAll('td');
      for (i of cells_) {
        i.remove();
      }
  }
} else {
  var blank_row = document.createElement('tr'); blank_row.setAttribute('class','redacted');
  for (i of header_a) {
    blank_row.insertCell(-1).textContent = 'redacted';
  }
  new_table_.appendChild(blank_row);
}
insert_node_.appendChild(new_table_);