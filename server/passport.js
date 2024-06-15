const passport = require('passport');
const {Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const UzytkownikModel = require('./models/Uzytkownicy');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretkey',
};

passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        UzytkownikModel.findById(jwt_payload.userId)
        .then(user=>{
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => console.error(err));
    })

);

module.exports = passport;