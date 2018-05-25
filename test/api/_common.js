const supertest = require('supertest');
const api = supertest('http://localhost:3000/api');
const expect = require('chai').expect;


function req (url, options, cb) {
	const defaults = { method: 'get', type: 'json', code: 200, params: {} };
	if (typeof cb === 'undefined' && typeof options === 'function') {
		cb = options;
		options = {};
	}

	const {method, params, code, type} = Object.assign({}, defaults, options || {});

	return new Promise(resolve => {
		api[method](url)
			.send(params)
			.expect(code)
			.expect('Content-Type', new RegExp(type))
			.end((err, res) => {
				if (err) throw err;
				if (cb) cb(res);
				else resolve(res);
			});
	});
}



module.exports = {
	expect,
	req
};