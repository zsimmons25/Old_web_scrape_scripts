record = {
	name: row.fetch('Licensee', '')
}

details_page = row.fetch('Details Page', {})

if details_page.present?
	details = {
		full_name: details_page.fetch('Name:', '').split(', ')[0],
		address: details_page.fetch('Address:', ''),
		address_2: details_page.fetch('Address 2:', ''),
		csz: details_page.fetch('City, State, Zip:', ''),
		phone: details_page.fetch('Phone:', ''),
		license_no: details_page.fetch('License:', ''),
		status: details_page.fetch('Status:', ''),
		issue_date: details_page.fetch('Issue Date:', ''),
		exp_date: details_page.fetch('Expiration Date:', ''),
		discipline: details_page.fetch('Disciplinary:', ''),
		facility_name: details_page.fetch('Facility:', ''),
		college: details_page.fetch('College:', ''),
		grad_date: details_page.fetch('Graduation Date:', ''),
		county: details_page.fetch('County:', ''),
		total_ce: details_page.fetch('Total CE:', ''),
		in_state_ce: details_page.fetch('In-state CE:', ''),
		specialty: details_page.fetch('Specialty:', '')
	}
end

record[:title] = details_page.fetch('Name:', '').split(', ')[1]

record.merge!(details)

full_name = record[:full_name]

if full_name.include?("(")
    no_aka = full_name.split("(")[0].strip + full_name.split(")")[1]
    yes_aka = full_name.split("(")[1].gsub(")","")
    record[:full_name] = no_aka
    record[:aka] = yes_aka
  else
    record[:full_name] = record[:full_name]
	end

record
