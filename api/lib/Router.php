<?php
class Router {

	private static $index = 'index.php';
	private static $paramName = '_path';
	private static $requestUri;
	public static $routeProccessed = false;


	public static function get ($name, $cb) {
		if (static::isMethod('get')) static::respond($name, $cb);
	}

	public static function post ($name, $cb) {
		if (static::isMethod('post')) static::respond($name, $cb);
	}

	public static function push ($name, $cb) {
		if (static::isMethod('push')) static::respond($name, $cb);
	}

	public static function del ($name, $cb) {
		if (static::isMethod('del') || static::isMethod('delete')) static::respond($name, $cb);
	}

	public static function otherwise ($cb) {
		if (!static::$routeProccessed) static::respond(static::requestUri(), $cb);
	}




	/*** PRIVATE **********************************************************************************/
	private static function isMethod ($m) { return strtolower($_SERVER['REQUEST_METHOD']) == $m; }


	/**
	 * Porcesses the route.
	 * @access private
	 */
	private static function respond ($route, $cb) {
		if (static::$routeProccessed) return;

		$vars = array();
		$params = array();

		// match /api/{name}/{id} to named params
		if (preg_match_all("/{(.*?)}/", $route, $m)) {
			$vars = $m[1];
			$route = preg_replace("/\/?{(.*?)}/", "\/?([\w]*)", $route);
		}
		// echo $route."\n\n";

		// Match the route
		if (preg_match("#^{$route}$#", static::requestUri(), $m)) {
			header('content-type: application/json; charset=utf8');

			array_shift($m);
			if (is_array($m) && count($vars) == count($m)) $params = array_combine($vars, $m);
			$params = array_merge($params, static::readParams());
			$cb($params);
			static::$routeProccessed = true;
		}
	}



	/**
	 * Determines the requested URL.
	 * @return string
	 * @access private
	 */
	public static function requestUri () {
		// if not the first time getting the request uri:
		if (static::$requestUri !== null) return static::$requestUri;

		// Check if there is a PATH_INFO variable
		// Note: some servers seem to have trouble with getenv()
		$path = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : @getenv('PATH_INFO');
		if (trim($path, '/') != '' && $path != static::$index) {
			return static::$requestUri = $path;
		}

		return static::$requestUri = '/';
	}





	/*** Read & parse parameters ******************************************************************/

	private static function readParams () {
		$data = file_get_contents('php://input');
		if (!empty($data)) $data = json_decode($data, true);
		if (empty($data) && !empty($_REQUEST)) $data = $_REQUEST;
		if (!empty($data)) $data = static::sanitizeData($data);
		if (empty($data)) $data = array();
		if (isset($data[static::$paramName])) unset($data[static::$paramName]);
		return $data;
	}

	private static function sanitizeData ($data) {
		$newData = array();
		if (empty($data)) return $newData;
		if (isset($data[0])) {
			foreach ($data as &$row) {
				foreach ($row as $key => $value) {
					$key = static::sanitize($key);
					$row[$key] = static::sanitize($value, $key);
				}
			}
			$newData['data'] = $data;
		}
		else {
			foreach ($data as $key => $value) {
				$key = static::sanitize($key);
				$newData[$key] = static::sanitize($value, $key);
			}
		}
		return $newData;
	}

	private static function sanitize ($val, $type = '') {
		$val = substr($val, 0, 255);
		if ($type === 'url') $val = filter_var($val, FILTER_SANITIZE_URL);
		else $val = filter_var($val, FILTER_SANITIZE_STRING);
		return $val;
	}




}
