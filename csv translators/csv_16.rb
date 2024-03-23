
record = {
	entity_name: row.fetch('Facility', ''),
	phone: row.fetch('Phone Number', ''),
	city: row.fetch('City', ''),
	zip_code: row.fetch('Zip Code', '')
}

detail_info = row.fetch('details page', {}).fetch('detail info', [])

	name_fax = {}
if detail_info.present?
	name_fax = {
	name: row.fetch('details page', {}).fetch('name', ''),
	fax: row.fetch('details page', {}).fetch('fax', '')
	}
	record.merge!(name_fax)

	if record[:fax] == record[:phone]
		record[:fax] = ''
	end

		record[:fax] = record[:fax].gsub("fax: ","")

		entity_info = {}
		address = []
		phone_match = Regexp.new(/\(\d{3}\)/)
		phone_number = ""
		address_line = ""
		name_add = ""
		doingb = []
		dba_splitter = Regexp.new(/DBA|AKA|T\/A|D\/B\/A|C\/O|D\.B\.A\.|D\.B\.A/i)
		detail_info.each do |ent|
			if ent['entity info'].present?
				if ent['entity info'].match(phone_match)
					phone_number = ent.fetch('entity info', '')
				elsif
					ent['entity info'].match(dba_splitter)
					name_add = ent.fetch('entity info', '')
					# doingb.push(name_add)
				else
					address_line = ent.fetch('entity info', '')
					address.push(address_line)
				end
			end
				record[:dba] = name_add.gsub("dba","").gsub("DBA","")
		end



	address = address.join(' ').gsub(/[\u0080-\u00ff]/, ' ')
	entity_info.merge!({full_address: address})
	entity_info.merge!({phone_number: phone_number})
 	record.merge!(entity_info)
end

	all_names = []
	sp = []
	name_test = record[:name]
	if name_test.present?
		if name_test.starts_with?("D/B/A ")
			name_test = name_test.gsub("D/B/A",'').strip
		end
		dba_splitter = Regexp.new(/DBA|AKA|T\/A|D\/B\/A|C\/O|D\.B\.A\.|D\.B\.A/i)
		if name_test.match(dba_splitter)
			if name_test.starts_with?("DBA ")
				name_test = name_test.gsub('DBA ','')
			end
			if name_test.include?(" / ")
		   		sp = name_test.split(" / ")
			else
		   		sp = name_test.split(dba_splitter)
		 	end
		end
		sp.each do |nam|  # This fuction corrected the issue.
			if nam.include?("/")
				nam = nam.gsub("/","").strip
				all_names.push(nam)
			elsif nam.include?(",")
	     nam = nam.chomp(",").reverse.chomp(",").reverse.strip
			 all_names.push(nam)
		 else
			 nam.strip
			 all_names.push(nam)
		 end
	 end
		record[:name] = name_test.gsub('DBA','')
	end

		records = []
		nu_record = []
		# records[:dba] = doingb[0]
	if all_names[1].present?
		all_names.each do |ent|
		 	dbas = all_names.reject{|name| name==ent}.join('~')
			nu_record = record.clone
		 	nu_record[:name] = ent.gsub('DBA','')
		 	nu_record[:dba] = dbas.chomp(' ').chomp(',').gsub('DBA','')
		 	records.push(nu_record)
		end
	else
		records.push(record)
	end
		# records[:name].gsub('DBA','').gsub('dba','')

records
