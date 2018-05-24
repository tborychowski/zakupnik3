const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const config = require('./util').getConfig();


passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));


passport.use(new LocalStrategy((username, password, done) => {
	if (config && config.username === username && config.password === password) {
		return done(null, { username, password });
	}
	return done(null, false, { message: 'Incorrect credentials.' });
}));

module.exports = passport;
