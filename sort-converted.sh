#!/bin/bash

echo Hi Jucia

echo Removing old rows.db...
rm rows.db
echo Creating new rows.db...
python put-to-db.py
echo Creating new sorted.csv...
python sort.py > sorted.csv
echo Have a good day Jucia
