/* global describe, it, before, after */

const {expect, req} = require('./_common');

describe('API', () => {

	it('- connect', done => {
		req('/', { type: 'text' }, res => {
			expect(res.text).to.match(/hello/i);
			done();
		});
	});
});
