pagenumber = document.querySelector('strong[id="pagenumber"]');
nextpage = document.querySelector('a[onclick="showresultpages(actualpage+1);"]');
a = pagenumber.textContent;

if (a.includes("1/1")) {
	nextpage.remove();
};

pagenumber = document.querySelector('strong[id="pagenumber"]');
nextpage = document.querySelector('a[onclick="showresultpages(actualpage+1);"]');
a = pagenumber.textContent;

current = a.split('/')[0];
last = a.split('/')[1];

if (current == last) {
	nextpage.remove();
};
