record = {
  name: row.fetch("Name ", ""),
  license_number: row.fetch("License #", ""),
  license_type: row.fetch("License Type", ""),
  status: row.fetch("Status", ""),
  issued: row.fetch("Issued", ""),
  expiration: row.fetch("Expiration", ""),
  discipline: row.fetch("Discipline", "")
}

name_test = record[:name]

if name_test.include?("(")
    no_aka = full_name.split("(")[0]
    yes_aka = full_name.split("(")[1].chomp(")")
    record[:aka] = no_aka.gsub(full_name.split(" ")[1],yes_aka).strip
    record[:name] = no_aka.strip
end

record
