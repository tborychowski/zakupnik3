/* global describe, it, before, after */

const {req, expect} = require('./_common');
const {seed, unseed} = require('./_seed');
const base = '/entries';

describe('Entries', () => {

	before(() => seed());
	after(() => unseed());


	let itemId;

	const entry = {
		date: '2018-05-01',
		category_id: 1,
		description: 'local store',
		amount: 100
	};


	it('- shoud be seeded', done => {
		req(base, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});


	it('- add an entry', done => {
		req(base, { method: 'post', params: entry }, res => {
			expect(res.body.category_id).to.eq(entry.category_id);
			expect(res.body.date).to.eq(entry.date);
			expect(res.body.amount).to.eq(entry.amount);
			itemId = res.body.id;
			done();
		});
	});

	it('- shoud be added', done => {
		req(base, res => {
			expect(res.body.length).to.eq(2);
			done();
		});
	});


	it('- shoud find by date', done => {
		req(`${base}?date=${entry.date}`, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});


	it('- shoud NOT find by date', done => {
		req(`${base}?date=2000-00-00`, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});


	it('- shoud find by category', done => {
		req(`${base}?category=1`, res => {
			expect(res.body.length).to.not.eq(0);
			done();
		});
	});

	it('- shoud NOT find by category', done => {
		req(`${base}?category=x`, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});


	it('- shoud find by category and date', done => {
		req(`${base}?date=${entry.date}&category=1`, res => {
			expect(res.body.length).to.not.eq(0);
			done();
		});
	});


	it('- shoud NOT find by category and date', done => {
		req(`${base}?category=1&date=2000-00-00`, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});



	it('- update an entry', done => {
		const params = { amount: 200 };
		req(`${base}/${itemId}`, { method: 'put', params }, res => {
			expect(res.body.updated).to.eq(1);
			done();
		});
	});

	it('- remove an entry', done => {
		req(`${base}/${itemId}`, { method: 'delete' }, res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

	it('- shoud be removed', done => {
		req(base, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});


});
