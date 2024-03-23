creds = ["APRN","DDS","DMD","DVM"]
indv = row["individual_name"].to_s.tr('áàâäãåÁÀÂÄÃÅéèêëÉÈÊËíìîïÍÌÎÏóòôöõøÓÒÔÖÕØúùûüÚÙÛÜÿŸçÇñÑſ‘’“”', 'aaaaaaAAAAAAeeeeEEEEiiiiIIIIooooooOOOOOOuuuuUUUUyYcCs\'\'""')&.gsub(/(?:^|[^A-Za-z])(?:J[Rr][\.]?|IV|III|II|S[Rr][\.]?)(?:([^A-Za-z])|$)/, '\1')
elsif indv.to_s.include? "#"
""
elsif creds.any? { |x| indv.to_s.include? x }
name_parts = indv&.split(' ')
name_parts.reject { |part| creds.include?(part) }.join(' ')
elsif indv.to_s.include? "("
indv&.split("(")[0]
elsif indv.to_s.include? "."
indv&.gsub(".","")
elsif indv.to_s.include? "`"
indv&.gsub("`","")
else
indv
end
