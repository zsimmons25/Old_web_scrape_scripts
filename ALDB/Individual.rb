require 'net/http'
require 'uri'
require 'json'

def ask_set(s)
  print "#{s}: "
  gets.chomp.strip
end

def msg(m)
  system("clear")
  print "\n   #{m} \n\n"
end

msg("\e[30m\e[37m


   ███   █      ████   ████
  █   █  █      █   █  █   █
  █   █  █      █   █  ████
  █████  █      █   █  █   █
  █   █  █      █   █  █   █
  █   █  █████  ████   ████

1 - Go to https://bdeal.igovsolution.net/Online/Lookups/Individual_Lookup.aspx

2 - Open Network Monitoring F12

3 - Perform a search

4 - Copy the cURL of your net request GetIndv_license

5 - Paste the cURL command here and hit enter


  █████  █   █  ████   █
  █      █   █  █   █  █
  █      █   █  █   █  █
  █      █   █  ████   █
  █      █   █  █  █   █
  █████  █████  █   █  █████  \e[0m\n")

curl_ = ask_set("Enter copied cURL command")

user_agent_ = curl_.to_s.split("User-Agent: ")[1].split("'")[0]
cookie_monster_ = curl_.to_s.split("Cookie: ASP.NET_SessionId=")[1].split("'")[0]

uri = URI.parse("https://bdeal.igovsolution.net/Online/JS_grd/Grid.svc/GetIndv_license")
request = Net::HTTP::Post.new(uri)
request.content_type = "application/json; charset=UTF-8"
request["Cookie"] = "ASP.NET_SessionId="+cookie_monster_
request["Origin"] = "https://bdeal.igovsolution.com"
request["Accept-Language"] = "en-US,en;q=0.9"
request["User-Agent"] = user_agent_
request["Accept"] = "application/json, text/javascript, */*; q=0.01"
request["Referer"] = "https://bdeal.igovsolution.net/Online/Lookups/Individual_Lookup.aspx"
request["X-Requested-With"] = "XMLHttpRequest"
request["Connection"] = "keep-alive"

req_options = {
  use_ssl: uri.scheme == "https",
}

wayback_ = {"App_ID":"wayback", "License_ID":"wayback", "Person_ID":"wayback", "First_Name":"wayback", "LastName":"wayback", "Middle_Name":"wayback", "Name":"wayback", "Lic_no":"wayback", "SSN":"wayback", "Zip":"wayback", "City":"wayback", "Business":"wayback", "Status":"wayback", "Issue_date":"wayback", "Expire_date":"wayback", "License_Type":"wayback", "License_Status":"wayback", "disp":"wayback", "lawfull":"wayback"}

File.open("4187.json", "w+") do |h|
  h.puts(wayback_.to_json)
end

dim = ('a'..'z')
dimensions_ = dim.map{|d1| dim.map{|d2| "#{d1}#{d2}%"}}.flatten

pageSize = 500
total_records = 0
startTime = Time.now

dimensions_.each do |dimension_|
  20.times do |page|
    result_count = 0
    page_ = page + 1
    print "Requesting: #{dimension_} Page: #{page_}"
    request.body = JSON.dump({
      "lnumber" => "",
      "lname" => dimension_,
      "fname" => "",
      "pageSize" => pageSize,
      "lictype" => "-1",
      "page" => page_,
      "sortby" => "",
      "sortexp" => "",
      "sdata" => ""
    })
    start_ = Time.now
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end
    request_time = Time.now - start_
    puts " (#{request_time} seconds retrieving)"
    response_ = JSON.parse(response.body)
    results = JSON.parse(response_["d"])["Response"]
    File.open("4187.json", "a+") do |f|
      JSON.parse(results).each do |line|
        result_count += 1
        # puts line
        f.puts(line.to_json)
      end
    end
    time_taken = Time.now-start_
    puts "   #{result_count} records added in #{time_taken} seconds  ( #{result_count.to_f/time_taken} recs/second)"
    total_records += result_count
    break if result_count < pageSize
  end
end

puts "#{total_records} records written in #{Time.now-startTime} seconds"