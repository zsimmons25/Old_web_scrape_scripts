record = {
  address1: row.fetch('Street','').strip(),
  city: row.fetch('City','').strip(),
  state: row.fetch('State','').strip(),
  zip: row.fetch('Zip Code','').strip(),
  phone: row.fetch('Phone','').strip(),
}

name_test = row.fetch('Program Name','').strip(),

dba_splitter = Regexp.new(/DBA|AKA|T\/A|D\/B\/A|C\/O|D\.B\.A\.|D\.B\.A/i)

all_names = []
if name_test.match(dba_splitter)
  dba = name_test.split(dba_splitter)
  all_names.push(dba)
end

records = []
if all_names[1].present?
  all_names.each do |full_name|
    dbas = all_names.reject{|name| name==full_name}.join('~')
    nu_record = record.clone
    nu_record[:entity_name] = full_name
    nu_record[:dba] = dbas
    records.push(nu_record)
  end
else
  record[:entity_name] = name_test
  records.push(record)
end
records
