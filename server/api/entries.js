const {db, Model} = require('./db');

const Entry = Model('Entry', {
	date: String,			// YYYY-MM
	category: String,
	description: String,
	amount: Number
});



function get (req, res) {
	const params = {};
	if (req.params.id) {
		params._id = req.params.id;
	}
	else if (req.query.date) {
		params.date = { $regex: new RegExp('^' + req.query.date) };
	}
	Entry
		.find(params)
		.sort({ date: -1 })
		.exec((err, items) => {
			if (err) return console.error(err);
			res.status(200).json({ total_str: 100, items });
		});
}

function post (req, res) {

}

function put (req, res) {

}

function del (req, res) {

}


module.exports = {
	get,
	post,
	put,
	del
};
