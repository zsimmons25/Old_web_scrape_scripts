record = {
	name: row.fetch('Licensee Name', ''),
	license_no: row.fetch('License No.', ''),
	status: row.fetch('Status', ''),
	expire_date: row.fetch('License Active through ', ''),
	csz: row.fetch('City, State, Zip', ''),
	profession: row.fetch('License Type', ''),
	board: row.fetch('Board', '')
}

details = row.fetch('Details Page', {})
if details.present?
	more = {
		issue_date: details.fetch('License Issue Date', ''),
		method: details.fetch('Method', ''),
		discip: details.fetch('Unresolved Disciplinary Action', ''),
		full_name: details.fetch('License Name', '')
	}

record.merge!(more)
end

full_name = record[:full_name]

if full_name.split(",")[1].include?(")")
	no_aka = full_name.gsub(full_name.split("(")[1].split(")")[0], "").gsub(" ()","")
	yes_aka = full_name.split("(")[1].gsub(")","")
	record[:aka] = full_name.split(",")[0] + ", " + yes_aka
  record[:full_name] = no_aka.strip
  elsif
  full_name.split(",")[1].include?("(")
  record[:full_name] = full_name.gsub("(","").strip
  else
  record[:full_name] = record[:full_name]
end

record
