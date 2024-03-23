var vTable = document.createElement('table');
vTable.setAttribute('id', 'vTable');
document.body.appendChild(vTable);
var headers = ['Name', 'Address1', 'CSZ', 'Administrator', 'Phone', 'Fax', 'License Number', 'License Expire Date', 'Bed Capacity', 'Bed Types', 'Entity Type'];
var header_row = document.createElement('TR');
header_row.setAttribute('id', 'vHeader');
vTable.appendChild(header_row);
for (var i = 0; i < headers.length; i++) {
 var header_cell = document.createElement('TH');
 var header_cell_text = document.createTextNode(headers[i]);
 header_cell.appendChild(header_cell_text);
 header_row.appendChild(header_cell);
};
var records = document.querySelector('pre').innerHTML.split('\n');
var eType = records[0].replace('<b><u>', '').replace('</u></b>', '').replace('Directory', '').trim();
var j = 0; /*Check blanks Col4->*/
var bVar = 3;
for (var i = 4; i < records.length; i++) {
 if (records[i].trim() === '') {} else {
  /*Clean HTML ampersand*/
  records[i] = records[i].replace("&amp;", "&");
  var currentLine = records[i];
  if (j % headers.length == 0) {
   var currentRow = vTable.appendChild(document.createElement('TR'));
   currentRow.setAttribute('id', 'vRow' + i);
  }
  if (j % headers.length == bVar) {
   if (currentLine.toLowerCase().includes("administrator:")) {} else {
    currentRow.appendChild(document.createElement('TD'));
    j++;
   }
  } else if (j % headers.length == bVar + 1) {
   if (currentLine.toLowerCase().includes("tel:")) {} else {
    currentRow.appendChild(document.createElement('TD'));
    j++;
   }
  } else if (j % headers.length == bVar + 2) {
   if (currentLine.toLowerCase().includes("fax:")) {} else {
    currentRow.appendChild(document.createElement('TD'));
    j++;
   }
  } else if (j % headers.length == bVar + 3) {
   if (currentLine.toLowerCase().includes("license number :")) {} else {
    currentRow.appendChild(document.createElement('TD'));
    j++;
   }
  } else if (j % headers.length == bVar + 4) {
   if (currentLine.toLowerCase().includes("lic expire date:")) {} else {
    currentRow.appendChild(document.createElement('TD'));
    j++;
   }
  } else if (j % headers.length == bVar + 5) {
   if (currentLine.toLowerCase().includes("bed capacity:")) {} else {
    currentRow.appendChild(document.createElement('TD'));
    j++;
   }
  } else if (j % headers.length == bVar + 6) {
   if (currentLine.toLowerCase().includes("snf")) {} else {
    currentRow.appendChild(document.createElement('TD'));
    j++;
   }
  }
  currentRow.appendChild(document.createElement('TD')).appendChild(document.createTextNode(currentLine));
  j++;
  if (j % headers.length == bVar + 7) {
   currentRow.appendChild(document.createElement('TD')).appendChild(document.createTextNode(eType));
   j++;
  }
 }
};