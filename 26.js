let header = 'Firm Name\tIndividual Name\tVendor Id\tFirm Street\tFirm City\tFirm State\tFirm Zip\tFirm Plus4\tNPI Number\tIndividual Street\tIndividual City\tIndividual State\tIndividual Zip\tIndividual Plus4\tCategory\tAction\tReason\tDebarring Department\tDebarring Agency\tEffective Date\tExpiration Date\tPermanent Debarment\n';

let rows=document.querySelector('body > pre:nth-child(1)').textContent;
let csvContent = header + rows;
let link = document.createElement('a');
link.id = 'download-csv';
link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
link.setAttribute('download','debarments.csv');
document.body.appendChild(link);

document.querySelector('#download-csv').click();