const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;



passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));


passport.use(new LocalStrategy((username, password, done) => {
	// return done(null, false, { message: 'Incorrect credentials.' });
	return done(null, { username, password });
}));

module.exports = passport;
