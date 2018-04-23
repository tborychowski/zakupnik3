#! /bin/sh
mongoimport --db zakupnik --collection categories --drop --jsonArray < ../_stuff/zak-categories.json
