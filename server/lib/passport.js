const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

passport.use(new LocalStrategy((username, password, done) => {
	const {LOGIN, PASSWORD} = process.env;
	if (username === LOGIN && password === PASSWORD) return done(null, { username, password });
	return done(null, false, { message: 'Incorrect credentials.' });
}));

module.exports = passport;
