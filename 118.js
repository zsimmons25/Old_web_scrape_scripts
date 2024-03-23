var dropdowns_ = document.querySelectorAll('div[class="panel-collapse collapse"]');

for(i of dropdowns_) {
	i.className = i.className.replace(/\bpanel-collapse collapse\b/g, "panel-collapse collapse show");
}