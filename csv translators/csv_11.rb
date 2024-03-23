details = {}
record = {
  name_1: row.fetch('Name', ''),
  license_1: row.fetch('License Number', '')
  }

aka = Regexp.new(/\((.*?)\)/)
d = row.fetch('Details Page',{})
if d.present?
  details[:name] = d.fetch('Name','') if d.fetch('Name','').present?
  details[:license] = d.fetch('License','') if d.fetch('License','').present?
  details[:license_type] = d.fetch('License Type','') if d.fetch('License Type','').present?
  details[:license_status] = d.fetch('License Status','') if d.fetch('License Status','').present?
  details[:venue] = d.fetch('Venue','') if d.fetch('Venue','').present?
  details[:address] = d.fetch('Address','').gsub("\n", " ") if d.fetch('Address','').present?
  details[:street] = d.fetch('Street','') if d.fetch('Street','').present?
  details[:phone] = d.fetch('Phone','') if d.fetch('Phone','').present?
  details[:issue_date] = d.fetch('Initially Licensed','') if d.fetch('Initially Licensed','').present?
  details[:expiration_date] = d.fetch('License Expires','') if d.fetch('License Expires','').present?
  details[:childbirth_lic] = d.fetch('Natural ChildBirth License','') if d.fetch('Natural ChildBirth License','').present?
  details[:disciplined] = d.fetch('Disciplined','') if d.fetch('Disciplined','').present?
record.merge!(details)

end


if record[:street].present?
  if record[:street].include?("(")
    record[:street] = record[:street].gsub("(",'')
  end
end

if record[:street].present? and record[:venue].present?
  record[:full_address] = record[:venue] + " " + record[:street]
elsif details[:address].present? and record[:street].present?
  record[:full_address] = record[:address] + " " + record[:street]
elsif record[:street].present?
  record[:full_address] = record[:street]
else
  record[:full_address] = record[:venue]
end

if record[:name].include?("(")
  record[:name] = record[:name].gsub("(","(AKA: ")
else
  record[:name] = record[:name]
end

record
