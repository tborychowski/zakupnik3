/* global describe, it */

const {expect, req} = require('./common');


describe('API', () => {
	it('- connect', done => {
		req('/', { type: 'text' }).then(res => {
			expect(res.text).to.match(/hello/i);
			done();
		});
	});
});
