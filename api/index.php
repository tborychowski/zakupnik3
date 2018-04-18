<?php
require('lib/_lib.php');
date_default_timezone_set('Europe/Dublin');


//header('content-type: text/plain; charset=utf8');	// XXX: for debug only


/*** EXPENSES *************************************************************************************/
Router::get('/entries/{id}', function ($params) {
	$db = new Entries();
	echo $db->get($params)->to_json();
});

Router::post('/entries/{id}', function ($params) {
	$db = new Entries();
	if (!empty($params['id'])) echo $db->save($params)->to_json();
	else echo $db->add($params['data'])->to_json();
});

Router::del('/entries/{id}', function ($params) {
	$db = new Entries();
	if (!empty($params['id'])) echo $db->del($params['id'])->to_json();
});
/*** EXPENSES *************************************************************************************/




/*** INCOME ***************************************************************************************/
Router::get('/incomes/{id}', function ($params) {
	$db = new Incomes();
	echo $db->get($params)->to_json();
});

Router::post('/incomes/{id}', function ($params) {
	$db = new Incomes();
	if (!empty($params['id'])) echo $db->save($params)->to_json();
	else echo $db->add($params['data'])->to_json();
});

Router::del('/incomes/{id}', function ($params) {
	$db = new Incomes();
	if (!empty($params['id'])) echo $db->del($params['id'])->to_json();
});
/*** INCOME ***************************************************************************************/




/*** STATS ****************************************************************************************/
Router::get('/spendingByCategory', function ($params) {
	$db = new Stats();
	echo $db->spendingByCategory($params)->to_json();
});

Router::get('/incomeVsExpenses', function ($params) {
	$db = new Stats();
	echo $db->incomeVsExpenses($params)->to_json();
});

Router::get('/spendingByDay', function ($params) {
	$db = new Stats();
	echo $db->spendingByDay($params)->to_json();
});
/*** STATS ****************************************************************************************/




/*** CATEGORIES ***********************************************************************************/
Router::get('/categorytree', function ($params) {
	$db = new Categories();
	echo $db->get()->tree()->to_json();
});

Router::get('/categories/{id}', function ($params) {
	$db = new Categories();
	echo $db->get($params['id'])->to_json();
});

Router::post('/categories/{id}', function ($params) {
	$db = new Categories();
	if (!empty($params['id'])) echo $db->save($params)->to_json();
	else echo $db->add($params)->to_json();
});

Router::del('/categories/{id}', function ($params) {
	$db = new Categories();
	if (!empty($params['id'])) echo $db->del($params['id'])->to_json();
});
/*** CATEGORIES ***********************************************************************************/




// Router::get('/debug', function ($params) {
// 	echo "          DEBUG\n===============================\n\n";
// 	$db = new DB();
// 	$res = $db->db->insert('categories', ["parent_id" => 0, "name" => "ABCDEFG"]);
// 	var_dump($res);
// 	// var_dump($db->db->error());
// 	// var_dump($db->db->log());
// });


Router::otherwise(function () {
	echo "404";
	// print_r($params);
});
