/* global describe, it */

const {req, expect} = require('./common');
const base = '/groups';

describe('Groups', () => {
	let categoryId, itemId, entryId;

	it('- shoud be empty', done => {
		req(base, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});

	it('- add a category for reference', done => {
		const params = { name: 'Groups test category' };
		req('/categories', { method: 'post', params }, res => {
			expect(res.body.name).to.eq(params.name);
			categoryId = res.body.id;
			done();
		});
	});


	it('- add', done => {
		const params = { name: 'TEST', category_id: categoryId, keywords: 'test,key1,dupa' };
		req(base, { method: 'post', params }, res => {
			expect(res.body.name).to.eq(params.name);
			itemId = res.body.id;
			done();
		});
	});


	it('- shoud not be empty', done => {
		req(base, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

	it('- shoud find by key', done => {
		req(`${base}?key=dupa`, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

	it('- add an entry for reference', done => {
		const params = { date: '2018-04-01', group_id: itemId, amount: 100 };
		req('/entries', { method: 'post', params }, res => {
			entryId = res.body.id;
			done();
		});
	});

	it('- shoud find by key and order by freq', done => {
		req(`${base}?freq&key=dupa`, res => {
			expect(res.body.length).to.eq(1);
			expect(res.body[0].freq).to.eq(1);
			done();
		});
	});


	it('- remove an entry', done => {
		req(`/entries/${entryId}`, { method: 'delete' }, res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

	it('- update', done => {
		const params = { name: 'TEST2' };
		req(`${base}/${itemId}`, { method: 'put', params }, res => {
			expect(res.body.updated).to.eq(1);
			done();
		});
	});

	it('- remove', done => {
		req(`${base}/${itemId}`, { method: 'delete' }, res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

	it('- shoud be empty again', done => {
		req(base, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});


	// CLEAN UP


	it('- remove category', done => {
		req(`/categories/${categoryId}`, { method: 'delete' }, res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

});
