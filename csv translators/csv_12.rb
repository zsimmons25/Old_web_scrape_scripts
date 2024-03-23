def build_address(contact,record,address,skip_line_zero)
  phone_match = Regexp.new(/Tel:\s\(\d{3}\)/)
  contact.each_with_index do |x,i|
    next if i == 0 && skip_line_zero
    line = x.fetch('contact line', '').gsub("\n","").strip
    if line.match(phone_match)
      record[:phone_number] = line
    else
      address.push(line)
    end
  end
end


entity_info = row.fetch('entity information', [])

  if entity_info.present?
    phone_match = Regexp.new(/Tel:\s\(\d{3}\)/)
    dba_splitter = Regexp.new(/DBA\s|\sDBA|\sAKA\s|\/DBA|\-DBA\-|DBA\/|T\/A|\(DBA|DBA\,|DBA\:|D\/B\/A|C\/O|D\.B\.A\.|D\.B\.A/i)
    records = []
    entity_info.each do |ent|
      names = []
      address = []
      record = {
        clia_number: ent.fetch('clia number', ''),
        lab_type: ent.fetch('lab type', ''),
        certificate_type: ent.fetch('cert type', ''),
        phone_number: ''
      }

      lab_name = ent.fetch('lab name')
      if lab_name.match(dba_splitter)
        names = lab_name.split(dba_splitter)#.gsub('(','').gsub(')','')
      else
        names = [lab_name]
      end


      contact = ent.fetch('contact info', [])
        case record[:clia_number]
          when "05D1041198"
            addnames = contact[0]['contact line'].split(',')
            if addnames.count == 2 && addnames[1].match(dba_splitter)
              names += addnames[1].split(dba_splitter)
              address.push(addnames[0])
              build_address(contact, record, address, true)
            else
              build_address(contact, record, address, false)
            end
          when "19D0671425"
            addnames = contact[0]['contact line'].split(',')
            if addnames.count == 2 && addnames[1].match(dba_splitter)
              names += addnames[1].split(dba_splitter)
              address.push(addnames[0])
              build_address(contact, record, address, true)
            else
              build_address(contact, record, address, false)
            end
          when "26D0673250"
            addnames = contact[0]['contact line'].split(',')
            if addnames.count == 2 && addnames[1].match(dba_splitter)
              names += addnames[1].split(dba_splitter)
              address.push(addnames[0])
              build_address(contact, record, address, true)
            else
              build_address(contact, record, address, false)
            end
          when "15D0669023"
            addnames = contact[0]['contact line'].split(',')
            if addnames.count == 2 && addnames[0].match(dba_splitter)
              names += addnames[0].split(dba_splitter)
              address.push(addnames[1])
              build_address(contact, record, address, true)
            else
              build_address(contact, record, address, false)
            end
          when "15D0669574"
            addnames = contact[0]['contact line'].split(',')
            if addnames.count == 2 && addnames[0].match(dba_splitter)
              names += addnames[0].split(dba_splitter)
              address.push(addnames[1])
              build_address(contact, record, address, true)
            else
              build_address(contact, record, address, false)
            end
          else
            build_address(contact, record, address, false)
        end

      names = names.map{ |i|
        i.gsub('/','').gsub('(','').gsub(')','').chomp('dba').chomp('Dbaa').chomp('The Dba').
        chomp('dba').gsub('-','').chomp(',').chomp('Dba').strip
      }.reject{|i| i == ""}
      address = address.join(' ')
      record[:address] = address.split("Â ")[0] + address.split("Â ")[1].strip + address.split("Â ")[2].strip
      record[:phone_number] = address.split("Â ")[4]

      names.each do |n|
        nu_record = record.clone
          nu_record[:lab_name] = n
          dba = names.reject{|name| name == n}.join('~')
          nu_record[:dba] = dba

        records.push(nu_record)
      end
    end

  end

  records
