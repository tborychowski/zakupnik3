<?php
class Incomes extends DB {

	private $table = 'incomes';

	public function get ($p) {
		if (!$this->db) return $this;
		if (!empty($p['id'])) {
			$this->get_by_id($this->table, $p['id']);
			$this->integerise('amount');
		}
		else {
			// select * from incomes
			$where = [ /*'LIMIT' => 25*/ ];
			if (!empty($p['date'])) $where['date[~]'] = $p['date'] . '%';
			$columns = [ 'id', 'date', 'description', 'amount' ];

			$this->output = $this->db->select($this->table, $columns, $where);
			$this->integerise('id,amount');
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
