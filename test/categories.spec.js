const {get, post, put, del, expect, seed, unseed, data} = require('./_common');
const base = '/api/categories';

describe('Categories', () => {
	beforeAll(() => { process.env.NODE_ENV = 'test'; });
	beforeAll(() => seed());
	afterAll(() => unseed());

	let itemId;

	test('- shoud be seeded', () =>
		get(base)
			.then(res => {
				expect(res.body.length).to.eq(2);
			})
	);

	test('- add fail', () =>
		post(base)
			.then(res => {
				expect(res.status).to.eq(500);
			})
	);

	test('- should count sum', () => {
		const entry = data.entries[0];
		const date = entry.date.substr(0, 7);
		return get(`${base}?date=${date}`)
			.then(res => {
				expect(res.body[0].sum).to.eq(entry.amount);
				expect(res.body[0].percent).to.eq(100);
			});
	});

	test('- add', () =>
		post(base)
			.send({ name: 'TEST' })
			.then(res => {
				expect(res.body.name).to.eq('TEST');
				itemId = res.body.id;
			})
	);

	test('- shoud be added', () =>
		get(base)
			.then(res => {
				expect(res.body.length).to.eq(3);
			})
	);

	test('- update', () =>
		put(`${base}/${itemId}`)
			.send({ name: 'TEST2' })
			.then(res => {
				expect(res.body.updated).to.eq(1);
			})
	);

	test('- remove', () =>
		del(`${base}/${itemId}`)
			.then(res => {
				expect(res.body.deleted).to.eq(1);
			})
	);

	test('- shoud be removed', () =>
		get(base)
			.then(res => {
				expect(res.body.length).to.eq(2);
			})
	);


});
