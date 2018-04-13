<?php
class DBMaker {


	// not really needed, but meedo doesn't show "permission denied" error on unix FS
	public static function file ($path = '', $force = false) {
		$exists = file_exists($path);
		if (!$exists || $force) {
			$handle = fopen($path, 'w') or die('Cannot open file: ' . $path);
			fclose($handle);
		}
	}


	public static function ensure_tables ($db) {
		if (!$db) return null;

		$db->query("CREATE TABLE IF NOT EXISTS categories (
			id integer NOT NULL PRIMARY KEY,
			parent_id integer NOT NULL,
			name text NOT NULL
		);");

		$db->query("CREATE TABLE IF NOT EXISTS entries (
			id integer NOT NULL PRIMARY KEY,
			category_id integer NOT NULL,
			date integer NOT NULL,
			amount real NOT NULL,
			description text NOT NULL,
			FOREIGN KEY (category_id) REFERENCES categories (id)
		);");

		$db->query("CREATE TABLE IF NOT EXISTS incomes (
			id integer NOT NULL PRIMARY KEY,
			date integer NOT NULL,
			amount real NOT NULL,
			description text NOT NULL
		);");
	}


}
