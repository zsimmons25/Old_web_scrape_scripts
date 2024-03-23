record = {
  license_number: row.fetch('License',''),
  first_name: row.fetch('First Name',''),
  last_name: row.fetch('Last Name',''),
  city: row.fetch('City',''),
  status: row.fetch('Status',''),
  discipline: row.fetch('Discipline',''),
  issued: row.fetch('Issued',''),
  expiration: row.fetch('Expiration',''),
  renewed: row.fetch('Renewed',''),
  endorsements: row.fetch('Endorsements',''),
  education: row.fetch('Education',''),
  exams: row.fetch('Exams','')
  }

  name_test = record[:first_name]
  last_name = record[:last_name]
  if name_test.include? '('
  	aka_part = name_test.split('(')[1].chomp(')')
  	first_name = name_test.split('(')[0].strip
  	record[:aka] = aka_part + last_name
    record[:first_name] = first_name
  else
    record[:first_name] = record[:first_name]
  end

  record
