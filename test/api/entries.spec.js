/* global describe, it */

const {req, expect} = require('./common');
const base = '/entries';

describe('Entries', () => {
	let itemId;

	it('- shoud be empty', done => {
		req(base).then(res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});

	it('- add an entry', done => {
		const params = {
			date: '2018-04-01',
			category: 'Groceries',
			parent_category: 'Food',
			description: 'lidl',
			amount: 100
		};
		req(base, { method: 'post', params }).then(res => {
			expect(res.body.category).to.eq(params.category);
			expect(res.body.date).to.eq(params.date);
			expect(res.body.amount).to.eq(params.amount);
			itemId = res.body._id;
			done();
		});
	});

	it('- shoud not be empty', done => {
		req(base).then(res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

	it('- update an entry', done => {
		const params = { amount: 200 };
		req(`${base}/${itemId}`, { method: 'put', params }).then(res => {
			expect(res.body.amount).to.eq(params.amount);
			done();
		});
	});

	it('- remove an entry', done => {
		req(`${base}/${itemId}`, { method: 'delete' }).then(res => {
			expect(res.body.ok).to.eq(1);
			expect(res.body.n).to.eq(1);
			done();
		});
	});

	it('- shoud be empty again', done => {
		req(base).then(res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});

});
