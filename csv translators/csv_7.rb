record = {
    name: row.fetch('Name',''),
    level_of_license: row.fetch('Level of Licensure',''),
    license_no: row.fetch('License Number',''),
    action_finding: row.fetch('Alleged Violation*',''),
    action_summary: row.fetch('Disciplinary Action',''),
    action_start_date: row.fetch('Date of Action','')
}


city_state = row.fetch("City of Residence",'')
if city_state.present?
  record[:city] = city_state.split(', ')[0]
  record[:state] = city_state.split(', ')[1]
end

full_name = record[:name]

if full_name.include?("(")
  record[:name] = full_name.split("(")[0].strip
  record[:aka] = full_name.split(",")[0] + ", " + full_name.split("(")[1].gsub(")","")
else
  record[:name] = record[:name]
end

record
