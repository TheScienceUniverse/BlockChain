#!/bin/bash
db_un = "root"
db_pw = "password"
echo "Pushing into Database..."
mysql -u $db_un -p auth < db.sql
echo "Table Created";
