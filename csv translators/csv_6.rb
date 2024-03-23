record = {
	name: row.fetch('Name', ''),
	license_no: row.fetch('License Number', '')
}

details_page = row.fetch('Details Page', {})

if details_page.present?
	details = {
		full_name: details_page.fetch('Name:', ''),
		csz: details_page.fetch('Location:', ''),
		lic_type: details_page.fetch('License Type:', ''),
		lic_status: details_page.fetch('License Status:', ''),
		issue_date: details_page.fetch('Initially Licensed:', ''),
		expire_date: details_page.fetch('License Expires:', ''),
		expired_date: details_page.fetch('License Expired:', ''),
		discipline: details_page.fetch('Disciplined or restricted?', '')
	}

record.merge!(details)

full_name = record[:full_name]

if full_name.split(",")[1].include?("(")
	  no_aka = full_name.gsub(full_name.split("(")[1].split(")")[0], "").gsub(" ()","")
	  yes_aka = full_name.split("(")[1].gsub(")","")
	  record[:aka] = full_name.split(",")[0] + ", " + yes_aka
    record[:full_name] = no_aka.strip
    elsif full_name.split(",")[0].include?("(")
	  no_aka = full_name.split("(")[0].strip + full_name.split(")")[1]
	  yes_aka = full_name.split("(")[1].split(")")[0]
	  record[:aka] = yes_aka + "," + full_name.split(",")[1]
    record[:full_name] = no_aka.strip
	end

# if record[:expire_date].present?
# 	record[:expire_date] = record[:expire_date]
	if record[:expired_date].present?
		record[:expire_date] = record[:expired_date]

	end
end

if record[:lic_type].strip() == 'Euth Agency'
	record[:entity_name] = record[:full_name]
	record[:full_name] = ''
end

record
