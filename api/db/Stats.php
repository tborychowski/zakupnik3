<?php
class Stats extends DB {

	private $table = 'entries';


	public function spendingByCategory ($p) {
		if (!$this->db) return $this;
		$data = [];
		$where = '';
		if (!empty($p['date'])) $where = 'WHERE entries.date LIKE \'' . $p['date'] . '%\' ';

		$q = 'SELECT categories.name as category, SUM(amount) as amount FROM entries ' .
			'LEFT JOIN categories ON categories.id = entries.category_id ' . $where .
			'GROUP BY entries.category_id ORDER BY amount DESC';

		$query = $this->db->query($q);
		if ($query) {
			$data = $query->fetchAll(PDO::FETCH_FUNC, function ($cat, $amount) {
				return [$cat, round($amount) ];
			});
		}
		$this->output = [ 'data' => $data ];
		return $this;
	}




	private function getIncomeForMonth($m) {
		if (!$this->db) return $this;
		return $this->db->sum('incomes', 'amount', [ 'date[~]' => $m . '%' ]);
	}

	private function getExpensesSumForMonth($m) {
		if (!$this->db) return $this;
		return $this->db->sum($this->table, 'amount', [ 'date[~]' => $m . '%' ]);
	}

	public function incomeVsExpenses ($p) {
		if (!$this->db) return $this;
		$y = isset($p['year']) ? $p['year'] : date('Y');
		$income = [];
		$expenses = [];
		for ($m = 1; $m <= 12; $m++) {
			$month = $y . '-' . substr('0' . $m, -2);
			array_push($income, $this->getIncomeForMonth($month));
			array_push($expenses, $this->getExpensesSumForMonth($month));
		}
		$this->output = [
			[ 'name' => 'income', 'data' => $income ],
			[ 'name' => 'expenses', 'data' => $expenses ]
		];

		return $this;
	}




	public function spendingByDay ($p) {
		if (!$this->db) return $this;
		$q = 'SELECT date, SUM(amount) as amount FROM entries GROUP BY date ORDER BY date ASC';

		$query = $this->db->query($q);
		if ($query) {
			$data = $query->fetchAll(PDO::FETCH_FUNC, function ($date, $amount) {
				return [$date, floatval($amount) ];
			});

			// convert ['2015-01-01', 123] => { '2015-01-01': 123 }
			$newData = [];
			foreach ($data as $item) $newData[$item[0]] = $item[1];

			// find all days between first & last and fill the gaps
			$first = strtotime($data[0][0]);
			$last = strtotime($data[count($data)-1][0]);
			$data = [];
			for ($i = $first; $i <= $last; $i += 86400) {
				$day = date('Y-m-d', $i);
				if (isset($newData[$day])) $data[$day] = $newData[$day];
				else $data[$day] = 0;
			}

			// convert { '2015-01-01': 123 } => [1425250800000, 123]
			$newData = [];
			foreach ($data as $d => $v) $newData[] = [strtotime($d . ' 01:00:00') * 1000, $v, $d];
		}

		$this->output = [ 'name' => 'Expenses', 'data' => $newData ];
		return $this;
	}



}
