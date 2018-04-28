const supertest = require('supertest');
const api = supertest('https://localhost:3000/api');
const expect = require('chai').expect;


function req (url, options, cb) {
	const defaults = { method: 'get', type: 'json', code: 200, params: {} };
	if (typeof cb === 'undefined' && typeof options === 'function') {
		cb = options;
		options = {};
	}

	const {method, params, code, type} = Object.assign({}, defaults, options || {});

	api[method](url)
		.send(params)
		.expect(code)
		.expect('Content-Type', new RegExp(type))
		.end((err, res) => {
			if (err) throw err;
			cb(res);
		});
}



module.exports = {
	expect,
	req
};
