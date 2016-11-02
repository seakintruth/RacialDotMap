import csv
import sqlite3

def print_csv():
	conn = sqlite3.connect('rows.db')
	c = conn.cursor()
	rows = c.execute("select * from people_by_race order by quadkey")
	for row in rows:
		print "{},{},{},{}".format(row[0], row[1], row[2], row[3])


print_csv()
