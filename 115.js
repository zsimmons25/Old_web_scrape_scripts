
var certIds = document.querySelectorAll('table[class="dataTable"]>tbody>tr>td>input');
for (i = 0; i < certIds.length; i++) {
	var certId = certIds[i].getAttribute("value")
	var div = document.body.appendChild(document.createElement('div'));
	$.get('/User/ShowPublicEmt', { certId: certId }, function (data) {
	$("#publicemt-certificate-details").html(data).appendTo(div);
};
};




var certIds = document.querySelectorAll('table[class="dataTable"]>tbody>tr>td>input');
for (i = 0; i < certIds.length; i++) {
	var div = document.body.appendChild(document.createElement('div'));
	var certId = certIds[i].getAttribute("value");
	$.get('/User/ShowPublicEmt', { certId: certId }, function (data) {$("#publicemt-certificate-details").html(data).appendTo(div);});
};


//------------------------------------------------------------------------------------------------------------------------------

var certIds = document.querySelectorAll('table[class="dataTable"]>tbody>tr>td>input');
var arr = [];
for (i = 0; i < certIds.length; i++) {
  var div = document.body.appendChild(document.createElement('div'));
  div.setAttribute('class', 'record');
  var certId = certIds[i].getAttribute('value');
  $.get('/User/ShowPublicEmt', {
    certId: certId
  }, function (data) {
    arr.push(data);
  });
};

for (var i = 0; i < arr.length; i++) {
  document.querySelector('div.record:nth-of-type(' + (i + 2) + ')').innerHTML = arr[i];
};
//------------------------------------------------------------------------------------------------------------------------------

for (var i = 0; i < arr.length; i++) {
  document.querySelector('div.record:nth-of-type(' + (i + 2) + ')').innerHTML = arr[i];
};

//------------------------------------------------------------------------------------------------------------------------------

var divs = document.querySelectorAll('div.record');
for (var i = 0; i < divs.length; i++) {
	divs[i].remove()
};

//------------------------------------------------------------------------------------------------------------------------------

$(function () {
            $("#btn-find-publicemt").click(function () {
                $.get('/User/PublicEmtSearch', $("#publicemt-search-form").serializeAnything(), function (data) {
                    $("#publicemt-search-results").html(data);
                });
            });
            /* Open the details as a pop-up window */
            $("#publicemt-search-results").on("click", "table tbody tr", function () {
                var certId = 131464;
                
                $.get('/User/ShowPublicEmt', { certId: certId }, function (data) {
                    $("#publicemt-certificate-details").html(data);
                    $('<br /><br /><img id="img-bemsts-logo" src="/Content/Branding/bems-logo-print-119x194.png" alt="BEMSTS logo" width="119" height="194" class="BDMSlogo" />').appendTo("#publicemt-certificate-details");
                    $("#publicemt-certificate-details").dialog({
                        closeOnEscape: true,
                        height: "auto",
                        width: "800px",
                        hide: "fold",
                        resizable: true,
                        title: "EMCT Details",
                        draggable: false,
                        show: {
                            effect: "blind",
                            duration: 500
                        },
                        buttons: {
                            "Close": function () {
                                $("#publicemt-certificate-details").html('');
                                $(this).dialog("close");
                            },
                            "Print": function () {
                                $(this).dialog("close");
                                $("#publicemt-certificate-details").printDiv();
                            }
                        }
                    });
                });

            });
        });
    