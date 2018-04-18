<?php

spl_autoload_register(function ($class) {
	$file = 'lib/' . $class . '.php';
	if (!file_exists($file)) {
		$file = 'db/' . $class . '.php';
	}


	if (file_exists($file)) {
		@require_once($file);
	}

});
