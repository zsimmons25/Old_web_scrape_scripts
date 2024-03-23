var rows = document.querySelectorAll('#gvResults tr'); rows[0].insertCell(-1).textContent = 'Status'; rows[0].insertCell(-1).textContent = 'Original Issue Date'; rows[0].insertCell(-1).textContent = 'On Probation'; rows[0].insertCell(-1).textContent = 'Discipline on File';  

for (var i = 1; i < rows.length; i++) {   
var detailsLink = rows[i].querySelector('a'),       
licenseType = rows[i].querySelector('td:nth-of-type(5)').textContent,       
request     = new XMLHttpRequest();   
request.open('GET', detailsLink.href, false);   
request.send(null);   
var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html'),       

status      = detailsPage.querySelector('#lblDetailStatus').textContent,       
issue       = detailsPage.querySelector('#lblDetailOriginal').textContent,       
probation   = detailsPage.querySelector('#lblDetailProbation').textContent,       
discipline  = detailsPage.querySelector('#lblDetailDiscipline').textContent;   

rows[i].insertCell(-1).textContent = status;   rows[i].insertCell(-1).textContent = issue;   rows[i].insertCell(-1).textContent = probation;   rows[i].insertCell(-1).textContent = discipline; }