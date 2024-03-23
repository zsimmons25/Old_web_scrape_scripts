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


   ███   █      ████   █████  █████
  █   █  █      █   █  █   █  █   █
  █   █  █      ████   █   █  █   █
  █████  █      █   █  █   █  █████
  █   █  █      █   █  █   █  █
  █   █  █████  ████   █████  █

1 - Go to https://albop.igovsolution.net/online/Lookups/Business_Lookup.aspx

2 - Open Network Monitoring F12

3 - Perform a search

4 - Copy the cURL of your net request GetIndv_Business

5 - Paste the cURL command here and hit enter


  █████  █   █  ████   █
  █      █   █  █   █  █
  █      █   █  █   █  █
  █      █   █  ████   █
  █      █   █  █  █   █
  █████  █████  █   █  █████  \e[0m\n")

curl_ = ask_set("Enter copied cURL command")

user_agent_ = curl_.to_s.split("User-Agent: ")[1].split("'")[0]
cookie_monster_ = curl_.to_s.split("ASP.NET_SessionId=")[1].split("'")[0]
vid_ = curl_.to_s.split('vid":"')[1].split('"')[0]

uri = URI.parse("https://albop.igovsolution.net/online/JS_grd/Grid.svc/GetIndv_Business")
request = Net::HTTP::Post.new(uri)
max_retries=(15)
request.content_type = "application/json; charset=UTF-8"
request["Cookie"] = "ASP.NET_SessionId="+cookie_monster_
request["Origin"] = "https://albop.igovsolution.net"
request["Accept-Language"] = "en-US,en;q=0.9"
request["User-Agent"] = user_agent_
request["Accept"] = "application/json, text/javascript, */*; q=0.01"
request["Referer"] = "https://igovsolution.net/albop_online/Lookups/Business_Lookup.aspx"
request["X-Requested-With"] = "XMLHttpRequest"
request["Connection"] = "keep-alive"

req_options = {
  use_ssl: uri.scheme == "https",
}

redacted_ = {"App_ID":"redacted", "License_ID":"redacted", "Person_ID":"redacted", "First_Name":"redacted", "LastName":"redacted", "Middle_Name":"redacted", "Name":"redacted", "Lic_no":"redacted", "SSN":"redacted", "Zip":"redacted", "City":"redacted", "Business":"redacted", "Status":"redacted", "Issue_date":"redacted", "Expire_date":"redacted", "License_Type":"redacted", "License_Status":"redacted", "disp":"redacted", "lawfull":"redacted"}

File.open("179303.json", "w+") do |h|
    h.puts(redacted_.to_json)
end

dim = [*:a..:z, *0..9]
dimensions_ = dim.map{|d1| dim.map{|d2| "#{d1}#{d2}%"}}.flatten

pageSize = 500
total_records = 0
startTime = Time.now

dimensions_.each do |dimension_|
  20.times do |page|
    result_count = 0
    page_ = page + 1
    puts "Requesting: " + dimension_+ " Page: "+page_.to_s
    request.body = JSON.dump({
      "licno" => "",
      "bname" => dimension_,
      "county" => "-1",
      "city" => "",
      "zip" => "",
      "vid" => vid_,
      "pageSize" => pageSize,
      "page" => page_,
      "sortby" => "",
      "sortexp" => "",
      "sdata" => ""
    })
    start_ = Time.now
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end
    redo if response.body.eql? ''
    result = JSON.parse(response.body)
    File.open("179303.json", "a+") do |f|
      JSON.parse(JSON.parse(result["d"])["Response"]).each do |line|
        result_count += 1
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