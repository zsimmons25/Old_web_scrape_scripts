require "csv"
require "fileutils"
system("clear")

filepath = ask_set("Filepath")
csvo = File.open(filepath, "a+")
csv = CSV.read(csvo)
twenty_sets = []

csv.each { |row| twenty_sets << row.to_csv}