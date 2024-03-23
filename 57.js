var tds_ = document.querySelectorAll('div.view-content>div>table>tbody>tr>td:nth-of-type(5)');
for (x=0;x<tds_.length;x++) {
	var pipe_ = document.createTextNode('br');
	pipe_.textContent = "|";
	tds_[x].insertBefore(pipe_, tds_[x].childNodes[1]);
}