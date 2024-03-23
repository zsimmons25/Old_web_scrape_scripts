var rows = document.querySelectorAll('article>footer');
if (rows[0] != undefined) {
	for (var i = 0; i < rows.length; i++) {
		var detailsLink = rows[i].querySelector('ul:nth-of-type(2)>li:nth-of-type(2)>a');
		request = new XMLHttpRequest();
		request.open('GET', detailsLink.href, false);
		request.send(null);
		var detailsPage = new DOMParser().parseFromString(request.responseText, 'text/html');
		var public_actions = detailsPage.querySelectorAll('div[id="PublicRecordActions"]>nav>.prabox>div>ul');
		var public_documents = detailsPage.querySelectorAll('div[id="PublicDocuments"]>nav>.prabox>div>ul');
		var public_documents_ = detailsPage.querySelectorAll('div[id="PublicRecordDocuments"]>nav>.prabox>div>ul');
		var public_documents__ = detailsPage.querySelectorAll('div[id="casPubDocuments"]>nav>.prabox>div>ul');
		var public_records = detailsPage.querySelectorAll('div[id="casPubRecords"]>nav>.prabox>div');
		var disciplinary_actions = detailsPage.querySelectorAll('div[id="DisciplinaryActions"]>div');
		if (public_actions[0] != undefined) {
			for (x=0;x<public_actions.length;x++) {
				var detailHeaders = public_actions[x].querySelectorAll('li>span[class="detailHeader"]');
				var detailValues = public_actions[x].querySelectorAll('li>span[class="detailValue"]');
				if (detailValues[1] == undefined) {
				var detailValues = public_actions[x].querySelectorAll('span[style="margin-left: .5em;"]:not([class="detailHeader"])');
				}
				var action_box = document.createElement('table');
				action_box.setAttribute('class', 'action');
				var action_header = action_box.insertRow(-1);
				action_header.setAttribute('class','ah');
				for(y=0;y<detailHeaders.length;y++) {
					action_header.insertCell(-1).textContent = detailHeaders[y].textContent;
				}
				var action_row = action_box.insertRow(-1);
				action_row.setAttribute('class','ar');
				for(z=0;z<detailValues.length;z++) {
					action_row.insertCell(-1).textContent = detailValues[z].textContent;
				}
			rows[i].appendChild(action_box);
			}
		}
		if (public_documents[0] != undefined) {
			var action_box = document.createElement('table');
			action_box.setAttribute('class', 'action');
			var action_header = action_box.insertRow(-1);
			action_header.setAttribute('class','ah');
			action_header.insertCell(-1).textContent = 'Doc Type';
			action_header.insertCell(-1).textContent = 'Action URL';
			action_header.insertCell(-1).textContent = 'Action Date';
			action_header.insertCell(-1).textContent = 'Pages';
			for(z=0;z<public_documents.length;z++){
				var links_ = public_documents[z].querySelectorAll('li>span:nth-of-type(2)>a');
				for(x=0;x<links_.length;x++) {
					var url_t = links_[x].getAttribute('href');
					links_[x].textContent = links_[x].textContent + 'URL: ' + url_t;
				}
				var brs_ = public_documents[z].querySelectorAll('br');
				for(y=0;y<brs_.length;y++) {
					brs_[y].textContent = '|';
				}
				var documents_ = public_documents[z].textContent.split('|');
				for(w=0;w<(documents_.length-1);w++){
					var action_row = action_box.insertRow(-1);
					action_row.setAttribute('class','ar');
					var type_ = String(documents_[w].split('Document: ')[1]).split('URL:')[0];
					var url_ = String(documents_[w].split('URL: ')[1]).split('Date:')[0];
					var date_ = String(documents_[w].split('Date: ')[1]).split('Pages:')[0];
					var pages_ = documents_[w].split('Pages: ')[1];
					[type_,url_,date_,pages_].forEach(x => action_row.insertCell(-1).textContent = x);
				}
			}
			rows[i].appendChild(action_box);
		}
		if (public_documents_[0] != undefined) {
			var detailHeaders = detailsPage.querySelectorAll('div[class="prabox-content"]>ul>li>span[class="detailHeader"]');
			var detailValues = detailsPage.querySelectorAll('div[class="prabox-content"]>ul>li>span:not([class="detailHeader"])');
			var action_box = document.createElement('table');
			action_box.setAttribute('class', 'action');
			var action_header = action_box.insertRow(-1);
			action_header.setAttribute('class','ah');
			for(y=0;y<detailHeaders.length;y++) {
				action_header.insertCell(-1).textContent = detailHeaders[y].textContent;
			}
			var action_row = action_box.insertRow(-1);
			action_row.setAttribute('class','ar');
			for(z=0;z<detailValues.length;z++) {
				action_row.insertCell(-1).textContent = detailValues[z].textContent;
			}
			rows[i].appendChild(action_box);
		}
		if (public_documents__[0] != undefined) {
			var detailHeaders = detailsPage.querySelectorAll('div[class="prabox-content"]>p>span[class="detailHeader"]');
			var detailValues = detailsPage.querySelectorAll('div[class="prabox-content"]>p>span:not([class="detailHeader"])');
			var action_box = document.createElement('table');
			action_box.setAttribute('class', 'action');
			var action_header = action_box.insertRow(-1);
			action_header.setAttribute('class','ah');
			for(y=0;y<detailHeaders.length;y++) {
				action_header.insertCell(-1).textContent = detailHeaders[y].textContent;
			}
			var action_row = action_box.insertRow(-1);
			action_row.setAttribute('class','ar');
			for(z=0;z<detailValues.length;z++) {
				action_row.insertCell(-1).textContent = detailValues[z].textContent;
			}
			rows[i].appendChild(action_box);
		}
		if (public_records[0] != undefined) {
			var action_descriptions = detailsPage.querySelectorAll('.prabox-content>p>span>span[style="margin-right: 2em;"]');
			var action_dates = detailsPage.querySelectorAll('.prabox-content>p>span>span[style="margin-right: 2em; "]');
			var action_box = document.createElement('table');
			action_box.setAttribute('class', 'action');
			var action_header = action_box.insertRow(-1);
			action_header.setAttribute('class','ah');
			if (action_descriptions[0] == undefined) {
				for (x=0;x<public_records.length;x++) {
					detailHeaders = public_records[x].querySelectorAll('div[class="prabox-content"]>ul>li>span>span:nth-of-type(2)');
					detailValues = public_records[x].querySelectorAll('div[class="prabox-content"]>ul>li>span>span:nth-of-type(3)');
					var action_header = action_box.insertRow(-1);
					action_header.setAttribute('class','ah');
					for(y=0;y<detailHeaders.length;y++) {
						action_header.insertCell(-1).textContent = detailHeaders[y].textContent;
					}
					var action_row = action_box.insertRow(-1);
					action_row.setAttribute('class','ar');
					for(z=0;z<detailValues.length;z++) {
						action_row.insertCell(-1).textContent = detailValues[z].textContent;
					}
					rows[i].appendChild(action_box);
				}
			}else{
				action_header.insertCell(-1).textContent = 'Action Description';
				action_header.insertCell(-1).textContent = 'Action Date';
				if (action_dates[0] == undefined) {
					var action_descriptions_t = [];
					for(x=0;x<action_descriptions.length;x++){
						action_descriptions_t.push((action_descriptions[x].textContent));
					}
					var action_row = action_box.insertRow(-1);
					action_row.insertCell(-1).textContent = action_descriptions_t.join(' ');
					action_row.insertCell(-1).textContent = detailsPage.querySelector('.prabox-content>p>span[style="margin-right: 2em;').textContent;
				}else{
					for (x=0;x<action_descriptions.length;x++) {
						var action_row = action_box.insertRow(-1);
						action_row.insertCell(-1).textContent = action_descriptions[x].textContent;
						action_row.insertCell(-1).textContent = action_dates[x].textContent;
					}
				}
				rows[i].appendChild(action_box);
			}
		}
		if (disciplinary_actions[0] != undefined) {
			var detailHeaders = detailsPage.querySelectorAll('div[id="DisciplinaryActions"]>div>p>span[class="detailHeader"]');
			var detailValues = detailsPage.querySelectorAll('div[id="DisciplinaryActions"]>div>p>span[style="margin-right: 2em;"');
			var action_box = document.createElement('table');
			action_box.setAttribute('class', 'action');
			var action_header = action_box.insertRow(-1);
			action_header.setAttribute('class','ah');
			for(y=0;y<detailHeaders.length;y++) {
				action_header.insertCell(-1).textContent = detailHeaders[y].textContent;
			}
			var action_row = action_box.insertRow(-1);
			action_row.setAttribute('class','ar');
			for(z=0;z<detailValues.length;z++) {
				action_row.insertCell(-1).textContent = detailValues[z].textContent;
			}
			rows[i].appendChild(action_box);
		}
	}
}