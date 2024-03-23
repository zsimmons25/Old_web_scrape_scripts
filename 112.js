var checkboxes_ = document.querySelectorAll('td[class="data2Col "]>span>table>tbody>tr>td:nth-of-type(11)');
for (i of checkboxes_) {
	j = i.querySelector('input[type="checkbox"]');
    if (j.getAttribute("checked") == undefined) {
        i.textContent = 'N'
    }else {
        i.textContent = 'Y'
    }
}