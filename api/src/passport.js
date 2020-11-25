const jwt = require("jsonwebtoken"),
  { User } = require("./db"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  BearerStrategy = require("passport-http-bearer").Strategy;

const SECRET = process.env.AUTH_SECRET || "secret";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    async (email, password, done) => {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user)
        return done(null, false, {
          message: "Username or password is incorrect",
        });
      if (!user.compare(password))
        return done(null, false, {
          message: "Username or password is incorrect",
        });
      const { id, firstName, lastName, isAdmin, shippingAdress } = user;
      return done(null, {
        id,
        firstName,
        lastName,
        isAdmin,
        shippingAdress,
      });
    }
  )
);

// passport.use(
// new GoogleStrategy(
//   {
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/login/google/callback",
//     session: false,
//   },
//   async (token, tokenSecret, profile, done) => {
//     let user = await getOneByGoogleId(profile.id);
//     if (!user)
//       user = await createOne(
//         profile.displayName,
//         profile.emails[0].value,
//         null,
//         "GUEST",
//         profile.id,
//         null
//       );
//     const { id, name, email, role, status, createdAt, updatedAt } = user;
//     return done(null, {
//       id,
//       name,
//       email,
//       role,
//       status,
//       createdAt,
//       updatedAt,
//     });
//   }
// )
// );

// passport.use(
// new FacebookStrategy(
//   {
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: "/auth/login/facebook/callback",
//     profileFields: ["id", "emails", "displayName"],
//   },
//   async function (accessToken, refreshToken, profile, done) {
//     console.log(profile);
//     let user = await getOneByFacebookId(profile.id);
//     if (!user)
//       user = await createOne(
//         profile.displayName,
//         profile.emails,
//         null,
//         "GUEST",
//         null,
//         profile.id
//       );
//     const { id, name, email, role, status, createdAt, updatedAt } = user;
//     return done(null, {
//       id,
//       name,
//       email,
//       role,
//       status,
//       createdAt,
//       updatedAt,
//     });
//   }
// )
// );

passport.use(
  new BearerStrategy((token, done) => {
    jwt.verify(token, SECRET, function (err, user) {
      if (err) return done(err);
      return done(null, user ? user : false);
    });
  })
);

module.exports = passport;
