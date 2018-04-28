/* global describe, it */
const {req, expect} = require('./common');
const base = '/entries';

describe('Entries', () => {
	let itemId, categoryId, groupId;

	const entry = {
		date: '2018-04-01',
		group_id: groupId,
		description: 'local store',
		amount: 100
	};


	it('- shoud be empty', done => {
		req(base, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});


	it('- add a category for reference', done => {
		const params = { name: 'Entries test category' };
		req('/categories', { method: 'post', params }, res => {
			expect(res.body.name).to.eq(params.name);
			categoryId = res.body.id;
			done();
		});
	});

	it('- add a group for reference', done => {
		const params = { name: 'Entries test group', category_id: categoryId };
		req('/groups', { method: 'post', params }, res => {
			expect(res.body.name).to.eq(params.name);
			groupId = res.body.id;
			entry.group_id = groupId;
			done();
		});
	});




	it('- add an entry', done => {
		req(base, { method: 'post', params: entry }, res => {
			expect(res.body.category).to.eq(entry.category);
			expect(res.body.date).to.eq(entry.date);
			expect(res.body.amount).to.eq(entry.amount);
			itemId = res.body.id;
			done();
		});
	});

	it('- shoud NOT be empty', done => {
		req(base, res => {
			expect(res.body.length).to.eq(1);
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



	it('- shoud find by group', done => {
		req(`${base}?group=${groupId}`, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

	it('- shoud NOT find by group', done => {
		req(`${base}?group=x`, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});



	it('- shoud find by category', done => {
		req(`${base}?category=${categoryId}`, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

	it('- shoud NOT find by category', done => {
		req(`${base}?category=x`, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});



	it('- shoud find by group, category and date', done => {
		req(`${base}?date=${entry.date}&category=${categoryId}&group=${groupId}`, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

	it('- shoud NOT find by group, category and date', done => {
		req(`${base}?group=${groupId}&category=${categoryId}&date=2000-00-00`, res => {
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

	it('- shoud be empty again', done => {
		req(base, res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});


	// CLEAN UP

	it('- remove group', done => {
		req(`/groups/${groupId}`, { method: 'delete' }, res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

	it('- remove category', done => {
		req(`/categories/${categoryId}`, { method: 'delete' }, res => {
			expect(res.body.deleted).to.eq(1);
			done();
		});
	});

});
