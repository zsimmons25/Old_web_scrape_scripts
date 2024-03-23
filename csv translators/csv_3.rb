record = {
	full_name: row.fetch('NAME', ''),
	license: row.fetch('LICENSE #', ''),
	profession: row.fetch('PROFESSION', ''),
	location: row.fetch('LOCATION', ''),
	effective_date: row.fetch('EFFECTIVE DATE', ''),
	expiration_date: row.fetch('EXPIRATION DATE', ''),
	status: row.fetch('LICENSE STATUS', '')
}

full_name = record[:full_name]

if full_name.include? '"'
  no_aka = full_name.split('"')[0].strip + full_name.split('"')[2]
  yes_aka = full_name.split('"')[1]
  record[:aka] = yes_aka + full_name.split('"')[2]
  record[:full_name] = no_aka
else
  record[:full_name] = record[:full_name]
end

record
