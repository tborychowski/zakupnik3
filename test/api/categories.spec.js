/* global describe, it, before, after */

const {req, expect} = require('./_common');
const {seed, unseed, entry} = require('./_seed');
const base = '/categories';

describe('Categories', () => {

	before(() => seed());
	after(() => unseed());


	let itemId;

	it('- shoud be seeded', done => {
		req(base, res => {
			expect(res.body.length).to.eq(2);
			done();
		});
	});

	it('- add fail', done => {
		req(base, { method: 'post', params: {}, code: 500 }, () => {
			done();
		});
	});


	it('- should count sum', done => {
		req(`${base}?date=${entry.date.substr(0, 7)}`, res => {
			expect(res.body[0].sum).to.eq(entry.amount);
			expect(res.body[0].percent).to.eq(100);
			done();
		});
	});


	it('- add', done => {
		const params = { name: 'TEST' };
		req(base, { method: 'post', params }, res => {
			expect(res.body.name).to.eq(params.name);
			itemId = res.body.id;
			done();
		});
	});


	it('- shoud be added', done => {
		req(base, res => {
			expect(res.body.length).to.eq(3);
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
			expect(res.body.length).to.eq(2);
			done();
		});
	});

});
