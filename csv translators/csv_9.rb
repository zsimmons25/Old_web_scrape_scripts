record = {
  full_name: row.fetch('Name','').strip(),
  license_number: row.fetch('License Number',''),
  city: row.fetch('City',''),
  state: row.fetch('State',''),
  board_number: row.fetch('Website Number','')
}
if row.fetch('Details Page', {}).present?
	d = row.fetch('Details Page', {})
	details = {
		expanded_duties: d.fetch('Expanded Duties',''),
		expiration_date: d.fetch('Expiration Date',''),
		first_issue_date: d.fetch('Original Issue date','')
	}
	record.merge!(details)
end

if record[:full_name].include? '"'
  no_aka = record[:full_name].split('"')[0].strip + record[:full_name].split('"')[2]
  yes_aka = record[:full_name].split('"')[1]
  record[:aka] = yes_aka + record[:full_name].split('"')[2]
  record[:full_name] = no_aka
else
  record[:full_name] = record[:full_name]
end
record
