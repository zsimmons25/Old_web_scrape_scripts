details = {}

record = {}

d = row.fetch('Details Page',{})
if d.present?
  details[:disciplinary_action] = d.fetch('Note/Disciplinary Actions/Restrictions','') if d.fetch('Note/Disciplinary Actions/Restrictions','').present?
  details[:expiration_date] = d.fetch('Expires','') if d.fetch('Expires','').present?
  details[:license_date] = d.fetch('License Date','') if d.fetch('License Date','').present?
  details[:status] = d.fetch('Status','') if d.fetch('Status','').present?
  details[:email] = d.fetch('Email','') if d.fetch('Email','').present?
  details[:home_phone] = d.fetch('Home Phone','') if d.fetch('Home Phone','').present?
  details[:home_country] = d.fetch('Home Country','') if d.fetch('Home Country','').present?
  details[:home_county] = d.fetch('Home County','') if d.fetch('Home County','').present?
  details[:home_address] = d.fetch('Home Address','') if d.fetch('Home Address','').present?
  details[:work_phone] = d.fetch('Work Phone','') if d.fetch('Work Phone','').present?
  details[:work_country] = d.fetch('Work Country','') if d.fetch('Work Country','').present?
  details[:work_county] = d.fetch('Work County','') if d.fetch('Work County','').present?
  details[:work_address] = d.fetch('Work Address','') if d.fetch('Work Address','').present?
  details[:name] = d.fetch('Name','') if d.fetch('Name','').present?
  details[:license] = d.fetch('License','') if d.fetch('License','').present?

record.merge!(details)

end

full_name = details[:name]

if full_name.include? '"'
  no_aka = full_name.split('"')[0].strip + full_name.split('"')[2]
  yes_aka = full_name.split('"')[1]
  record[:aka] = yes_aka + full_name.split('"')[2]
  record[:name] = no_aka
else
  record[:name] = record[:name]
end

if full_name.include?("(")
	no_aka = full_name.split("(")[0].strip + full_name.split(")")[1]
	yes_aka = full_name.split("(")[1].gsub(")","")
	record[:aka] = yes_aka
  record[:name] = no_aka
else
    record[:name] = record[:name]
end

record
