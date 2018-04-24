#! /bin/sh
mongo zakupnik --eval "db.dropDatabase()"
mongo zakupnik-test --eval "db.dropDatabase()"
