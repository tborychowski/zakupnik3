/* global describe, it, before, after */

const {req, expect} = require('./_common');
const {seed, unseed, entry} = require('./_seed');
const base = '/stats/2018';

describe('Stats', () => {

	before(() => seed());
	after(() => unseed());


	it('- shoud return sums', done => {
		req(base, res => {
			expect(res.body.length).to.eq(1);
			expect(res.body[0]).to.eq(entry.amount);
			done();
		});
	});

	it('- shoud return sums by category', done => {
		req(`${base}?category=1`, res => {
			expect(res.body.length).to.eq(1);
			expect(res.body[0]).to.eq(entry.amount);
			done();
		});
	});

	it('- shoud not return sums by category', done => {
		req(`${base}?category=0`, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});

	it('- shoud return sums by group', done => {
		req(`${base}?group=1`, res => {
			expect(res.body.length).to.eq(1);
			expect(res.body[0]).to.eq(entry.amount);
			done();
		});
	});

	it('- shoud not return sums by group', done => {
		req(`${base}?group=0`, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});


});
