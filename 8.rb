file_names = ['8.txt']

file_names.each do |file_name|
  text = File.read(file_name)
  new_contents = text.gsub(('</td></tr><tr class="redacted"><td>'), ('"'+"\n"+'"')).gsub('</td><td>','","').gsub('<tbody class="redacted"><tr class="redacted"><td>','"').gsub('</td></tr></tbody>','"').gsub('&nbsp;','')
  File.open('8_CSV.txt', 'w') {|file| file.puts new_contents }
end