record = {
  license_number: row.fetch('LICENSE NO.',''),
  first_name: row.fetch('FIRST NAME',''),
  last_name: row.fetch('LAST NAME',''),
  address1: row.fetch('ADDRESS1',''),
  address2: row.fetch('ADDRESS2',''),
  city: row.fetch('CITY',''),
  state: row.fetch('STATE',''),
  zip: row.fetch('ZIP',''),
  county: row.fetch('COUNTY',''),
  status: row.fetch('STATUS',''),
  reason: row.fetch('REASON',''),
  issue_date: row.fetch('ISSUE DATE',''),
  expiration_date: row.fetch('EXPIRATION DATE','')
  }

name_test = record[:first_name]

if name_test.include? "("
  part_1 = name_test.split("(")[0]
  part_2 = name_test.split("(")[1]
  record[:aka] = part_2.gsub(")","")
  record[:first_name] = part_1.strip
end

  record
