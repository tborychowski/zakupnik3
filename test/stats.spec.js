/* global describe, test, beforeAll, afterAll */

const request = require('supertest');
const app = require('../server');
const expect = require('chai').expect;
const {seed, unseed, data} = require('./_seed');
const base = '/api/stats/2018';


describe('Stats', () => {

	beforeAll(() => { process.env.NODE_ENV = 'test'; });
	beforeAll(() => seed());
	afterAll(() => unseed());

	test('- shoud return sums', () =>
		request(app)
			.get(base)
			.then(res => {
				expect(res.body).to.have.all.keys('expenses', 'income');
				expect(res.body.expenses.length).to.eq(1);
				expect(res.body.expenses[0]).to.eq(data.entries[0].amount);
			})
	);

	test('- shoud return sums by category', () =>
		request(app)
			.get(`${base}?category=2`)
			.then(res => {
				expect(res.body).to.have.all.keys('expenses', 'income');
				expect(res.body.expenses.length).to.eq(1);
				expect(res.body.expenses[0]).to.eq(data.entries[0].amount);
			})
	);

	test('- shoud return sums by root category', () =>
		request(app)
			.get(`${base}?category=1`)
			.then(res => {
				expect(res.body).to.have.all.keys('expenses', 'income');
				expect(res.body.expenses.length).to.eq(1);
				expect(res.body.expenses[0]).to.eq(data.entries[0].amount);
			})
	);

	test('- shoud not return sums by category', () =>
		request(app)
			.get(`${base}?category=0`)
			.then(res => {
				expect(res.body).to.have.all.keys('expenses', 'income');
				expect(res.body.expenses.length).to.eq(0);
			})
	);

});
