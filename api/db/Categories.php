<?php
class Categories extends DB {


	public function get ($id = null) {
		if (!empty($id)) $this->get_by_id('categories', $id);
		else $this->get_all('categories', [ 'ORDER' => 'categories.name ASC' ]);
		return $this;
	}

	public function tree () {
		$this->output = $this->get_tree($this->output)['items'];
		return $this;
	}



	public function add ($data) {
		$this->insert('categories', $data);
		return $this;
	}

	public function save ($data) {
		$this->update('categories', $data);
		return $this;
	}

	public function del ($id) {
		$this->delete('categories', $id);
		return $this;
	}




	/**
	 * Convert categories to a tree (recurr.)
	 * @return [array]       nested array
	 */
	private function get_tree ($data, $item = ['id' => 0]) {
		if (!$data) return [];
		$items = array_filter($data, function ($i) use($item) {
			return $i['parent_id'] == $item['id'];
		});

		if (!empty($items)) {
			foreach ($items as &$sub) {
				$sub = $this->get_tree($data, $sub);
			}
			$item['items'] = array_values($items);
		}
		return $item;
	}



}
