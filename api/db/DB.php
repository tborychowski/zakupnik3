<?php
class DB {

	public $output = '';
	public $db;

	private $db_cfg = [
		'database_type' => 'sqlite',
		'database_file' => '../assets/database.db'
	];


	public function __construct($options = null) {
		DBMaker::file($this->db_cfg['database_file']);
		try {
			$this->db = new medoo($this->db_cfg);
		}
		catch (Exception $e) {
			$this->db = null;
		}

		if ($this->db) return DBMaker::ensure_tables($this->db);
		else echo 'DB Init error!';

		return null;
	}

	public function __toString () { return print_r($this->output, true); }

	public function to_json ($pretty = true) {
		// $flags = JSON_NUMERIC_CHECK;
		$flags = 0;
		if ($pretty) $flags = $flags | JSON_PRETTY_PRINT;
		if (!$this->output) $this->output = [];
		return json_encode($this->output, $flags);
	}



	public function get_all ($table, $where = []) {
		if (!$this->db) return $this;
		$this->output = $this->db->select($table, '*', $where);
		$this->integerise();
		return $this;
	}

	public function get_by_id ($table, $id) {
		if (!$this->db) return $this;
		$this->output = [];
		$out = $this->db->select($table, '*', [ "id" => $id ]);
		if (!empty($out)) $this->output = $out[0];
		$this->integerise();
		return $this;
	}

	public function insert ($table, $data) {
		if (!$this->db) return $this;


		if (is_array($data) && isset($data[0]['id'])) {
			foreach ($data as &$item) {
				if (empty($item['id'])) unset($item['id']);
			}
		}
		else {
			if (empty($data['id'])) unset($data['id']);
		}

		$res = $this->db->insert($table, $data);
		if (!is_array($res)) $res = [$res];
		if (array_sum($res) === 0) $this->output = ['result' => 'error'];
		else $this->output = ['result' => 'success'];
		return $this;
	}

	public function update ($table, $data) {
		if (!$this->db) return $this;
		$id = $data['id'];
		unset($data['id']);
		$res = $this->db->update($table, $data, [ 'id' => intval($id) ]);
		$this->output = ['result' => 'success'];
		return $this;
	}

	public function delete ($table, $id) {
		if (!$this->db) return $this;
		$res = $this->db->delete($table, [ 'id' => intval($id) ]);
		if ($res == 0) $this->output = ['result' => 'error'];
		else $this->output = ['result' => 'success'];
		return $this;
	}




	public function integerise ($fields = 'id,parent_id') {
		$fields = explode(',', $fields);
		// table
		if (isset($this->output[0])) {
			foreach ($this->output as &$row) {
				foreach ($fields as $f) {
					if (isset($row[$f])) {
						$row[$f] = floatval($row[$f]);
					}
				}
			}
		}
		// single object
		else {
			foreach ($fields as $f) {
				if (isset($this->output[$f])) {
					$this->output[$f] = floatval($this->output[$f]);
				}
			}
		}
		return $this;
	}

}
