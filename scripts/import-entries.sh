#! /bin/sh
mongoimport --db zakupnik --collection entries --drop --jsonArray < ../_stuff/zak-entries2.json
