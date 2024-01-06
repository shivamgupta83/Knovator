const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function (passport) {
  passport.use(
    new JwtStrategy(
      {
        secretOrKey: 'key',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      function (jwt_payload, done) {
        if (jwt_payload) {
          return done(null, jwt_payload);
        } else {
          return done(null, false);
        }
      }
    )
  );
};
