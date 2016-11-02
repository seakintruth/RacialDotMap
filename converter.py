import sys
import csv
from osgeo import ogr
from shapely.wkb import loads
from shapely.geometry import *
from random import uniform

# Import the module that converts spatial data between formats

#sys.path.append("filepath")
from globalmaptiles import GlobalMercator

# Main function that reads the shapefile, obtains the population counts,
# creates a point object for each person by race, and exports to a SQL database.

#def main(input_filename, output_filename):

def read():
    print(row['long'], row['lat'], row['group'])


def main():
    
    merc = GlobalMercator()

    file = open('pts1990.csv', 'rb')
    reader = csv.DictReader(file, delimiter=',')
    print "x,y,quad,category"

    for row in reader:
	    lat = float(row['lat'])
	    long = float(row['long'])
	    x, y = merc.LatLonToMeters(lat, long)
	    tx,ty = merc.MetersToTile(x, y, 21)
		
	    # Create a unique quadkey for each point object
		
	    quadkey = merc.QuadTree(tx, ty, 21)
		
	    # Create categorical variable for the race category
		   
	    # Export data to the database file

	    print "{},{},{},{}".format(x,y,quadkey,row['group'])

# Execution code...

if __name__=='__main__':
    
	main()
