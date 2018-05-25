/* global describe, it, before, after */

const {req, expect} = require('./_common');
const {seed, unseed} = require('./_seed');
const base = '/groups';

describe('Groups', () => {

	before(() => seed());
	after(() => unseed());


	let itemId;

	it('- shoud be seeded', done => {
		req(base, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

	it('- add', done => {
		const params = { name: 'group 2', category_id: 1, keywords: 'test,key1,dupa' };
		req(base, { method: 'post', params }, res => {
			expect(res.body.name).to.eq(params.name);
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

	it('- shoud find by key', done => {
		req(`${base}?key=dupa`, res => {
			expect(res.body.length).to.eq(1);
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

	it('- shoud be removed', done => {
		req(base, res => {
			expect(res.body.length).to.eq(1);
			done();
		});
	});

});
