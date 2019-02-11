const {get, expect, seed, unseed, data} = require('./_common');
const base = '/api/stats/2018';

describe('Stats', () => {

	beforeAll(() => { process.env.NODE_ENV = 'test'; });
	beforeAll(() => seed());
	afterAll(() => unseed());

	test('- shoud return sums', () =>
		get(base)
			.then(res => {
				expect(res.body).to.have.all.keys('expenses', 'income');
				expect(res.body.expenses.length).to.eq(1);
				expect(res.body.expenses[0]).to.eq(data.entries[0].amount);
			})
	);

	test('- shoud return sums by category', () =>
		get(`${base}?category=2`)
			.then(res => {
				expect(res.body).to.have.all.keys('expenses', 'income');
				expect(res.body.expenses.length).to.eq(1);
				expect(res.body.expenses[0]).to.eq(data.entries[0].amount);
			})
	);

	test('- shoud return sums by root category', () =>
		get(`${base}?category=1`)
			.then(res => {
				expect(res.body).to.have.all.keys('expenses', 'income');
				expect(res.body.expenses.length).to.eq(1);
				expect(res.body.expenses[0]).to.eq(data.entries[0].amount);
			})
	);

	test('- shoud not return sums by category', () =>
		get(`${base}?category=0`)
			.then(res => {
				expect(res.body).to.have.all.keys('expenses', 'income');
				expect(res.body.expenses.length).to.eq(0);
			})
	);

});
