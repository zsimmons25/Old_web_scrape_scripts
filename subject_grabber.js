function PrintElem(elems) {
  var wind = window.open('', 'Subjects', 'height=600,width=400');
  wind.document.write('<html><head><title> Subjects </title>');
  wind.document.write('</head><body>');
  for (var i = 0; i < elems.length; i++) {
    wind.document.write(elems[i] + "<br />");
  }
  wind.document.write(elem.innerHTML);
  wind.document.write('</body></html>');
  return true;
}

var subjects = [...document.querySelectorAll('.bog')].map (s => s.textContent);
PrintElem(subjects);