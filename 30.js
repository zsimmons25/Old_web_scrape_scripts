var page = document.querySelector('.pagination').innerHTML;
if (page.match(/Page \n(\d+)/) [1] % 6 == 0) {
  var p = document.createElement('p');
  p.setAttribute('id', 'vClock');
  p.setAttribute('align', 'center');
  document.body.appendChild(p);
  var timer100 = new Date(new Date().getTime() + 62000).getTime();
  var x = setInterval(function () {
    var timer0 = new Date().getTime();
    var distance = timer100 - timer0;
    console.log(distance);
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('vClock').innerHTML = seconds + 's ';
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('vClock').innerHTML = 'EXPIRED';
    }
  }, 1000);
};
