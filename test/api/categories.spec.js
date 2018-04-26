/* global describe, it */

const {req, expect} = require('./common');
const base = '/categories';

describe('Categories', () => {
	let categoryId;

	it('- shoud be empty', done => {
		req(base).then(res => {
			expect(res.body.length).to.eq(0);
			done();
		});
	});

	it('- add a category', done => {
		const params = { name: 'TEST', parent_id: 0 };
		req(base, { method: 'post', params }).then(res => {
			expect(res.body.name).to.eq(params.name);
			categoryId = res.body.id;
			done();
		});
	});


	it('- shoud not be empty', done => {
		req(base).then(res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

	it('- update a category', done => {
		const params = { name: 'TEST2', parent_id: 0 };
		req(`${base}/${categoryId}`, { method: 'put', params }).then(res => {
			expect(res.body.updated).to.eq(1);
			done();
		});
	});

	it('- remove a category', done => {
		req(`${base}/${categoryId}`, { method: 'delete' }).then(res => {
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

});
