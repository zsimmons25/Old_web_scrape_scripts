import csv

with open('12_Techs.csv') as rowFile:
x=0
alpha_ = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
dimensions_ = []

for row in csv_f:
	if row[1] == '500':
		while x<26:
			extra_ = []
			extra_.append(row[2]+alpha_[x])
			rowFileWriter = csv.writer(rowFile)
			rowFileWriter.writerow(extra_)
			dimensions_.append(row[2]+alpha_[x])
			rowFileWriter.writerow(dimensions_)
			x++