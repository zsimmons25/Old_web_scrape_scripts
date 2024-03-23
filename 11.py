import csv
import codecs

file_ = open('11.csv', 'r')
new_ = codecs.open('11_Fix.csv', 'w', encoding='utf-8')
reader = csv.reader(file_, delimiter=',')
writer = csv.writer(new_, delimiter=',', quotechar='"')

for row in reader:
	if row[7] == 'Block D"':
		print(row)
		writer.writerow(row[0:7]+[''.join(row[7]+row[8]+row[9])]+['']+row[10:12]+row[13:])
	else:
		writer.writerow(row)