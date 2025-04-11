// backend/config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log('Google profile:', profile);

        // Check if user already exists
        let user = await User.findOne({ googleId: profile.id });

        if (user) return done(null, user);

        // Check if user exists with same email
        const existingUser = await User.findOne({ email: profile.emails[0].value });

        if (existingUser) {
          existingUser.googleId = profile.id;
          await existingUser.save();
          return done(null, existingUser);
        }

        // Create new user
        user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        });

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
