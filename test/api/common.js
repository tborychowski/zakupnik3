const supertest = require('supertest');
const api = supertest('https://localhost:3000/api');
const expect = require('chai').expect;


function req (url, { method = 'get', type = 'json', code = 200, params } = {}) {
	return new Promise(resolve => {
		api[method](url)
			.send(params)
			.expect(code)
			.expect('Content-Type', new RegExp(type))
			.end((err, res) => {
				if (err) throw err;
				resolve(res);
			});
	})
		.catch(e => console.error(e));
}



module.exports = {
	expect,
	req
};
