require 'csv'

file_names = ['Medical-Equipment-Suppliers.csv']

file_names.each do |file_name|
  rows = CSV.parse(File.read(file_name), headers: true, quote_char: '"', force_quotes: true)
  rows.each do |row|
  	new_contents = '"'+row["ptan"].to_s+'"' + "," + '"'+row["acceptsassignement"].to_s+'"' + "," + '"'+row["participationbegindate"].to_s+'"' + "," + '"'+(row["businessname"]).to_s+'"' + "," + '"'+(row["practicename"]).to_s+'"' + "," + '"'+row["practiceaddress1"].to_s+'"' + "," + '"'+row["practiceaddress2"].to_s+'"' + "," + '"'+row["practicecity"].to_s+'"' + "," + '"'+row["practicestate"].to_s+'"' + "," + '"'+row["practicezip9code"].to_s+'"' + "," + '"'+row["telephonenumber"].to_s+'"' + "," + '"'+row["specialitieslist"].to_s+'"' + "," + '"'+row["providertypelist"].to_s+'"' + "," + '"'+row["supplieslist"].to_s+'"' + "," + '"'+row["latitude"].to_s+'"' + "," + '"'+row["longitude"].to_s+'"' + "," + '"'+row["is_contracted_for_cba"].to_s+'"'
  	File.open('182055.csv', 'ab') {|file| file.puts new_contents }
  end
end