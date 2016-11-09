#!/bin/bash

cd tiles
echo {
for year in `ls`; do
    cd $year
    echo "$year": {
    for zoomlevel in `ls`; do
        cd $zoomlevel
            echo $zoomlevel: \[\[
            first_dir=`ls | head -1`
            cd $first_dir
                first_file=`ls *.png | head -1 | grep -Po '\d+'`
                echo $first_dir, $first_file
            cd ..

            echo \], \[
            last_dir=`ls -r | head -1`
            cd $last_dir
                last_file=`ls -r *.png | head -1 | grep -Po '\d+'`
                echo $last_dir, $last_file
            cd ..
        echo \]\],
        cd ..
    done
    echo },
    cd ..
done
echo }
cd ..


            



