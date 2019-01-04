/* global describe, it, before, after */

const {req, expect} = require('./_common');
const {seed, unseed, data} = require('./_seed');
const base = '/stats/2018';

describe('Stats', () => {

	before(() => seed());
	after(() => unseed());


	it('- shoud return sums', done => {
		const entry = data.entries[0];
		req(base, res => {
			expect(res.body).to.have.all.keys('expenses', 'income');
			expect(res.body.expenses.length).to.eq(1);
			expect(res.body.expenses[0]).to.eq(entry.amount);
			done();
		});
	});

	it('- shoud return sums by category', done => {
		const entry = data.entries[0];
		req(`${base}?category=2`, res => {
			expect(res.body).to.have.all.keys('expenses', 'income');
			expect(res.body.expenses.length).to.eq(1);
			expect(res.body.expenses[0]).to.eq(entry.amount);
			done();
		});
	});

	it('- shoud return sums by root category', done => {
		const entry = data.entries[0];
		req(`${base}?category=1`, res => {
			expect(res.body).to.have.all.keys('expenses', 'income');
			expect(res.body.expenses.length).to.eq(1);
			expect(res.body.expenses[0]).to.eq(entry.amount);
			done();
		});
	});

	it('- shoud not return sums by category', done => {
		req(`${base}?category=0`, res => {
			expect(res.body).to.have.all.keys('expenses', 'income');
			expect(res.body.expenses.length).to.eq(0);
			done();
		});
	});

});
