var certIds = document.querySelectorAll('table[class="dataTable"]>tbody>tr>td>input');
var arr = [];
for (i = 0; i < certIds.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  div.setAttribute('class', 'record');
  var certId = certIds[i].getAttribute('value');
  $.get('/User/ShowPublicEmt', {certId: certId}, function (data) {arr.push(data)});
};

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(10000).then(() => {
  for (var i = 0; i < arr.length; i++) {
  document.querySelector('div.record:nth-of-type(' + (i + 2) + ')').innerHTML = arr[i];
  };
});

//------------------------------------------------------------------------------------------------------------------------------

var certIds = document.querySelectorAll('table[class="dataTable"]>tbody>tr>td>input');
var arr = [];
for (i = 0; i < certIds.length; i++) {
  var certId = certIds[i].getAttribute('value');
  $.get('/User/ShowPublicEmt', {certId: certId}, function (data) {arr.push(data)});
};

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(10000).then(() => {
  for (var i = 0; i < arr.length; i++) {
  document.querySelector('div.record:nth-of-type(' + (i + 2) + ')').innerHTML = arr[i];
  };
});