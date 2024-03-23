import csv
dimensions_ = []
extra_ = []
alpha_ = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
x=0
y=0
z=0
with open('16_DLM.csv', 'r') as mstechs:
	rowFileReader = csv.reader(mstechs, delimiter=',', quotechar='"')
	for row in mstechs:
		if row.split(',')[0] == '100':
			while x<26:
				extra_.append(row.split(',')[1].replace("%","")+alpha_[x]+'%')
				x+=1
		elif row.split(',')[0] == '0':
			print ("No results for this search")
		else:
			dimensions_.append(row.split(',')[1])
		x=0

print(dimensions_)
print(extra_)

with open('16_Dimensions.csv', 'w') as msdimensions:
	rowFileWriter = csv.writer(msdimensions, delimiter=',', quotechar='"')
	while y<len(extra_):
		rowFileWriter.writerow([extra_[y]])
		y+=1
	while z<len(dimensions_):
		rowFileWriter.writerow([dimensions_[z]])
		z+=1