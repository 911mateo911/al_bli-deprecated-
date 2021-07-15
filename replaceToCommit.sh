#!/bin/bash

cp ~/Desktop/commitFiles/production/dbConnection.js ~/Desktop/"React Projects"/al-bli-local/al_bli/utils
echo "u replacua cbConnectioni"
cp ~/Desktop/commitFiles/production/next.config.js ~/Desktop/"React Projects"/al-bli-local/al_bli
echo "u replacua next konfigu"
git rm -rf --cached .
echo "hiq cached files"
git add .
echo "added all files"
git checkout experimental
echo "switched to experimental"
echo "shkruaj emrin e commitit"
read commitName
git commit -m "$commitName"
echo "u commitua"
git push origin experimental