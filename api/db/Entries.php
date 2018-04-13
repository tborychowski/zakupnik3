<?php
class Entries extends DB {

	private $table = 'entries';

	public function get ($p) {
		if (!$this->db) return $this;
		if (!empty($p['id'])) {
			$this->get_by_id($this->table, $p['id']);
			$this->integerise('category_id,amount');
		}
		else {
			// select entries.*, categories.name as category from entries
			// join categories on entries.category_id = categories.id

			$where = [ /*'LIMIT' => 25*/ ];
			if (!empty($p['date'])) $where['date[~]'] = $p['date'] . '%';

			$join = [ '[>]categories' => ['category_id' => 'id'] ];

			$columns = [
				'entries.id',
				'entries.date',
				'categories.name(category)',
				'entries.description',
				'entries.amount'
			];

			$where["ORDER"] = ["entries.date" => "DESC", "entries.id" => "DESC"];

			$this->output = $this->db->select($this->table, $join, $columns, $where);
			$this->integerise('id,category_id,amount');
			$total = 0;
			foreach ($this->output as &$e) {
				$total += $e['amount'];
				$e['amount_str'] = number_format($e['amount'], 2, '.', ',');
			}
			$this->output = [
				'total' => $total,
				'total_str' => number_format($total, 2, '.', ','),
				'items' => $this->output
			];
		}
		return $this;
	}

	public function add ($data) {
		$this->insert($this->table, $data);
		return $this;
	}

	public function save ($data) {
		$this->update($this->table, $data);
		return $this;
	}

	public function del ($id) {
		$this->delete($this->table, $id);
		return $this;
	}


}
