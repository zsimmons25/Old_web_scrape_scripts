dimension_array = ["ABA","AT","DEM","DT","HAS","LC","LD","MT","NHA","RT","STB"];
window.name = 0;
dimension_ = dimension_array[window.name];
board_ = document.querySelector('select[id="CPH1_drpsrcBoard"]');
board_.value = dimension_;

---------------------------------------------------------------------------------

window.name++;

---------------------------------------------------------------------------------

dimension_array = ["ABA","AT","DEM","DT","HAS","LC","LD","MT","NHA","RT","STB"];
dimension_ = dimension_array[window.name];
board_ = document.querySelector('select[id="CPH1_drpsrcBoard"]');
board_.value = dimension_;