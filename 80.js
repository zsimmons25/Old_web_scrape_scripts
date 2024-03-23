//after search
window.name = 0;

//before next page
var a = window.name;
a++;
window.name = a;

//before next page
var nextPage = document.querySelector('.crumb_trail>p>a:nth-of-type(2)');
if (window.name >= 26) {
  nextPage.remove();
};

//after next page
click './/*[@id='scRegulator']/option[1]'

//after next page
var professions = ['4350','4391','4180','6719','4450','4646','384','4240','4230','4073','4078','376','4290','4440','385','383','4390','4400','4410','4430','4260','4420','4170','4120','1310','4380','1040'];
var c = window.name;
var b = document.querySelector('#scRegulator>option[value="'+professions[c]+'"');
b.setAttribute("selected", "selected");

//after next page
click './/*[@id='btnSearch']'