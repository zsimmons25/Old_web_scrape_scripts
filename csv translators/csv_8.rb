record = {
	full_name: row.fetch('Name', ''),
	license_no: row.fetch('License #', ''),
	issue_date: row.fetch('Issue Date', ''),
	expire_date: row.fetch('Expiration Date', ''),
	status: row.fetch('Status', ''),
	discipline: row.fetch('Discipline' ,''),
	city_state: row.fetch('Location', '')
}

details = row.fetch('Details Page', {})
if details.present?

	sup_phys = details.fetch('Supervising Physician(s)', [])
	if sup_phys.present?
		supervisors = {}
		sup_phys.each do |sup|
		supervisors = {
			supervisor_name: sup.fetch('Name(s):', '')
		}
		end
		record.merge!(supervisors)
	end

	discip = details.fetch('Discipline History', [])
	if discip.present?
		discip_action = {}
		discip.each do |dis|
		discip_action = {
			action_taken: dis.fetch('Action Taken', ''),
			date_act_taken: dis.fetch('Date Action Taken', ''),
			pub_discip_documents: dis.fetch('Public Disciplinary Documents', '')
		}
		end
		record.merge!(discip_action)
	end

	lic_verify = details.fetch('Licensee Verification', [])
	if lic_verify.present?
		verification = {}
		lic_verify.each do |lic|
		verification = {
			lic_issue_date: lic.fetch('License Date', ''),
			lic_expire_date: lic.fetch('Expiration Date', ''),
			other_state: lic.fetch('Other State Licenses', '')
		}
		end
		record.merge!(verification)
	end

	lic_history = details.fetch('Licensee History', [])
	if lic_history.present?
		history = {}
		lic_history.each do |his|
		history = {
			name: his.fetch('Name', ''),
			title: his.fetch('Title', ''),
			number: his.fetch('License Number', ''),
			lic_status: his.fetch('Status', '')
		}
		end
		record.merge!(history)
	end

full_name = record[:full_name]

if full_name.include?("(")
	  no_aka = full_name.split("(")[0]
	  yes_aka = full_name.split("(")[1].chomp(")")
	  record[:aka] = yes_aka + " " + no_aka.split(" ")[1] + " " + no_aka.split(" ")[2]
    record[:full_name] = no_aka.strip
	end

end

record
