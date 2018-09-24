require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { json } = require("body-parser");
const massive = require("massive");
const passport = require("passport");

// AUTH0 Login Setup
const strategy = require("./strategy");

//PORT
const port = 3001;

//CONTROLLERS, endpoint functions
const user_controller = require("./controllers/user_controller");
const { getUser, getUsers } = require("./controllers/auth_controller");
const { getShelters, getShelter } = require("./controllers/shelter_controller");

//SERVER SETUP
const app = express();

//DB CONNECTION
massive(process.env.CONNECTION_STRING)
  .then(dbReturned => app.set("db", dbReturned))
  .catch(err => console.log(err));

app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// Passport Middleware For Auth
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

// What properties do we want our user to have on session?
passport.serializeUser((user, done) => {
  console.log(user);
  const db = app.get("db");
  db.get_user(user.id)
    .then(response => {
      if (!response[0]) {
        db.add_user_auth(user.id)
          .then(res => done(null, res[0]))
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

// Put user on req.session
passport.deserializeUser((user, done) => {
  done(null, user);
});

//our database sql functions gets index by massive, and lives on dbReturned, and is set to db, which is on app, so it is on req.app
// app.get("/api/test", (req, res) => {
//   req.app
//     .get("db")
//     .get_users()
//     .then(response => console.log(response) || res.status(200).send(response))
//     .catch(err => res.status(500).send(err));
// });

//ENDPOINTS ENDPOINTS ENDPOINTS ENDPOINTS
app.post("/api/user", user_controller.createUser);

// Login, redirect to frontend on success or failure
app.get(
  "/newAdoptLogin",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/WizardOneRegistration",
    failureRedirect: "http://localhost:3001/"
  })
);

// Access user
app.get("/api/user", getUser);
app.get("/api/users", getUsers);

//Access shelters
app.get("/api/shelters", getShelters);
app.get("/api/shelter/:id", getShelter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
