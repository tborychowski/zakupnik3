/* global describe, it */
const {req, expect} = require('./common');
const base = '/entries';

describe('Entries', () => {
	let itemId, categoryId, groupId;

	it('- shoud be empty', done => {
		req(base).then(res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});


	it('- add a category for reference', done => {
		const params = { name: 'Entries test category' };
		req('/categories', { method: 'post', params }).then(res => {
			expect(res.body.name).to.eq(params.name);
			categoryId = res.body.id;
			done();
		});
	});

	it('- add a group for reference', done => {
		const params = { name: 'Entries test group', category_id: categoryId };
		req('/groups', { method: 'post', params }).then(res => {
			expect(res.body.name).to.eq(params.name);
			groupId = res.body.id;
			done();
		});
	});


	it('- add an entry', done => {
		const params = {
			date: '2018-04-01',
			group_id: groupId,
			description: 'local store',
			amount: 100
		};
		req(base, { method: 'post', params }).then(res => {
			expect(res.body.category).to.eq(params.category);
			expect(res.body.date).to.eq(params.date);
			expect(res.body.amount).to.eq(params.amount);
			itemId = res.body.id;
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
			expect(res.body.updated).to.eq(1);
			done();
		});
	});

	it('- remove an entry', done => {
		req(`${base}/${itemId}`, { method: 'delete' }).then(res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

	it('- shoud be empty again', done => {
		req(base).then(res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});


	// CLEAN UP

	it('- remove group', done => {
		req(`/groups/${groupId}`, { method: 'delete' }).then(res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

	it('- remove category', done => {
		req(`/categories/${categoryId}`, { method: 'delete' }).then(res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

});