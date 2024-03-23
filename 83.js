function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};
var iframe_ = document.querySelector('#alacertwebportalv2');
var table_ = document.querySelector('#isc_2Otable');
var div_ = document.querySelector('#isc_2Otable');
for (x=0; x < 100; x++) {
  sleep(1000).then(() => {
      div_.contentWindow.scrollTo(0,100000)
	});
}

for (x=0; x<100; x++) {
  window.scroll(0,100000000);
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};
function bottom() {
  sleep(1000).then(window.scroll(0,1000000000))
};
for (x=0; x<100; x++) {
  bottom();
};


div_ = document.querySelector('#isc_0');


iframe_ = document.querySelector('#alacertwebportalv2');

