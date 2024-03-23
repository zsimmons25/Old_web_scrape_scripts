file_names = ['7.txt']

file_names.each do |file_name|
  text = File.read(file_name)
  new_contents = text.gsub(('</td></tr><tr class="hoover"><td>'), ('"'+"\n"+'"')).gsub('</td><td>','","').gsub('<tbody class="hoover"><tr class="hoover"><td>','"').gsub('</td></tr></tbody>','"').gsub('&nbsp;','')
  File.open('7_CSV.txt', 'w') {|file| file.puts new_contents }
end