var table = document.querySelector('#form > table:nth-child(2)');
var vTable = document.createElement('table');
vTable.setAttribute('id', 'vTable');
document.body.appendChild(vTable);
var headers = [
  'License Number',
  'Name',
  'License Type',
  'License Status',
  'Initial Licensure Date',
  'Expiration Date',
  'Work Address',
  'Work City',
  'Work State'
];
var header_row = document.createElement('TR');
header_row.setAttribute('id', 'vHeader');
document.getElementById('vTable').appendChild(header_row);
var vValues = table.querySelectorAll('tr > td:nth-child(3) > b');
for (var i = 0; i < headers.length; i++) {
  var header_cell = document.createElement('TD');
  var header_cell_text = document.createTextNode(headers[i]);
  header_cell.appendChild(header_cell_text);
  document.getElementById('vHeader').appendChild(header_cell);
};
for (var i = 0; i < vValues.length; i++) {
  if (i % 9 == 0) {
    var vRowID = 'vRowID${i}';
    var body_row = document.createElement('TR');
    body_row.setAttribute('id', 'vRowID' + i);
    document.getElementById('vTable').appendChild(body_row);
  }
  var body_cell = document.createElement('TD');
  var body_cell_text = document.createTextNode(vValues[i].textContent);
  body_cell.appendChild(body_cell_text);
  document.getElementById(vRowID).appendChild(body_cell);
};
