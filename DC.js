function back() {
    var a = document.querySelector('#srchTbl'); a.style.display = "block"; var b = document.querySelector('#srchTbldta'); b.style.display = "none";
}
var back_btn = document.createElement("BUTTON"); back_btn.innerHTML = "Back"; back_btn.setAttribute("onclick", back());
var details_ = document.querySelector("#detailSec");
details_.appendChild(back_btn);

function sleep(time) {   return new Promise((resolve) => setTimeout(resolve, time)); };