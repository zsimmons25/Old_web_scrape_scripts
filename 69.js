var tds_ = document.querySelectorAll('#ctl00_top_LicSearchcontrol_gvSearch > tbody > tr > td:nth-child(3)');
for (x=0;x<tds_.length;x++) {
	var pipe_ = document.createTextNode('br');
	pipe_.textContent = "|";
	tds_[x].insertBefore(pipe_, tds_[x].childNodes[1]);
}


//a[text()='Next' and not(@disabled='disabled')]