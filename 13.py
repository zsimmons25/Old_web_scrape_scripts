import csv
import itertools
merged_ = []
y = 0
with open('redacted_Data.csv', 'r') as redt, open('redacted_LN.csv', 'r') as reln:
	hfdt_read = csv.reader(hfdt, delimiter=',', quotechar='"')
	hfln_read = csv.reader(hfln, delimiter=',', quotechar='"')
	for row1, row2 in itertools.zip_longest(redt_read, reln_read):
		if row2 != None:
			print(row1[0])
			if row1[0] == row2[0]:
				merged_.append(row1[0]+'|'+row1[1]+'|'+row1[2]+'|'+row1[3]+'|'+row1[4]+'|'+row1[5]+'|'+row1[6]+'|'+row1[7]+'|'+row1[8]+'|'+row1[9]+'|'+row1[10]+'|'+row1[11]+'|'+row1[12]+'|'+row1[13]+'|'+row1[14]+'|'+row1[15]+'|'+row1[16]+'|'+row1[17]+'|'+row1[18]+'|'+row1[19]+'|'+row1[20]+'|'+row2[1]+'|'+row2[2])
			else:
				merged_.append(row1[0]+'|'+row1[1]+'|'+row1[2]+'|'+row1[3]+'|'+row1[4]+'|'+row1[5]+'|'+row1[6]+'|'+row1[7]+'|'+row1[8]+'|'+row1[9]+'|'+row1[10]+'|'+row1[11]+'|'+row1[12]+'|'+row1[13]+'|'+row1[14]+'|'+row1[15]+'|'+row1[16]+'|'+row1[17]+'|'+row1[18]+'|'+row1[19]+'|'+row1[20])


with open('redacted_Merged.csv', 'w') as remg:
	rowFileWriter = csv.writer(remg, delimiter=',', quotechar='"')
	while y<len(merged_):
		rowFileWriter.writerow([merged_[y]])
		y+=1