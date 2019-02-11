const {get, post, put, del, expect, seed, unseed} = require('./_common');
const base = '/api/entries';

describe('Entries', () => {

	beforeAll(() => { process.env.NODE_ENV = 'test'; });
	beforeAll(() => seed());
	afterAll(() => unseed());

	let itemId;

	const entry = {
		date: '2018-05-01',
		category_id: 1,
		description: 'local store',
		amount: 100
	};


	test('- shoud be seeded', () =>
		get(base)
			.then(res => {
				expect(res.body.length).to.eq(1);
			})
	);

	test('- add an entry', () =>
		post(base)
			.send(entry)
			.then(res => {
				expect(res.body.category_id).to.eq(entry.category_id);
				expect(res.body.date).to.eq(entry.date);
				expect(res.body.amount).to.eq(entry.amount);
				itemId = res.body.id;
			})
	);

	test('- shoud be added', () =>
		get(base)
			.then(res => {
				expect(res.body.length).to.eq(2);
			})
	);

	test('- shoud find by date', () =>
		get(`${base}?date=${entry.date}`)
			.then(res => {
				expect(res.body.length).to.eq(1);
			})
	);

	test('- shoud NOT find by date', () =>
		get(`${base}?date=2000-00-00`)
			.then(res => {
				expect(res.body.length).to.eq(0);
			})
	);

	test('- shoud find by category', () =>
		get(`${base}?category=1`)
			.then(res => {
				expect(res.body.length).to.not.eq(0);
			})
	);

	test('- shoud NOT find by category', () =>
		get(`${base}?category=x`)
			.then(res => {
				expect(res.body.length).to.eq(0);
			})
	);

	test('- shoud find by category and date', () =>
		get(`${base}?date=${entry.date}&category=1`)
			.then(res => {
				expect(res.body.length).to.not.eq(0);
			})
	);

	test('- shoud NOT find by category and date', () =>
		get(`${base}?category=1&date=2000-00-00`)
			.then(res => {
				expect(res.body.length).to.eq(0);
			})
	);

	test('- update an entry', () =>
		put(`${base}/${itemId}`)
			.send({ amount: 200 })
			.then(res => {
				expect(res.body.updated).to.eq(1);
			})
	);

	test('- remove an entry', () =>
		del(`${base}/${itemId}`)
			.then(res => {
				expect(res.body.deleted).to.eq(1);
			})
	);

	test('- shoud be removed', () =>
		get(base)
			.then(res => {
				expect(res.body.length).to.eq(1);
			})
	);

});
