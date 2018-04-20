#! /bin/sh
mongoimport --db zakupnik --collection categories --drop --jsonArray < ../_stuff/zak-categories.json
mongoimport --db zakupnik --collection entries --drop --jsonArray < ../_stuff/zak-entries.json
