import csv
import sqlite3

def put_into_db():
	conn = sqlite3.connect('rows.db')
	c = conn.cursor()
	c.execute( "create table if not exists people_by_race (x text, y text, quadkey text, race_type text)" )
	file = open('converted.csv', 'rb')
	reader = csv.DictReader(file)
	i = 0
	for row in reader:
		c.execute( "insert into people_by_race values (?,?,?,?)", (row['x'], row['y'], row['quad'], row['category']) )
		i = i + 1
		if i % 1000 == 0:
			print "Saving {}".format(i)
			conn.commit()
	
	conn.commit()

put_into_db()
