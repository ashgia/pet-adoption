require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const { json } = require("body-parser");
const massive = require("massive");
const passport = require("passport");
const path = require("path");

//SOCKETS
const http = require("http");
const socket = require("socket.io");

const server = http.createServer(app);
const io = (module.exports.io = socket(server));
app.use(express.static(path.join(__dirname, "../build")));
app.use(express.static(`${__dirname}/../build`));

//SOCKET PORT
const port = process.env.PORT || 3001;

// AUTH0 Login Setup
const strategy = require("./strategy");

//PORT
// const port = 3001;

//CONTROLLERS, endpoint functions
const user_controller = require("./controllers/user_controller");
const { getUser, getUsers } = require("./controllers/auth_controller");
const {
  getShelters,
  getProfile,
  getSocketID
} = require("./controllers/shelter_controller");
const {
  getChats,
  addChat,
  addMessageToChat,
  addMessage
} = require("./controllers/mysocket_controller");
const SocketManager = require("./controllers/socket_controller");

//SOCKET
io.on("connection", SocketManager);

//SERVER SETUP
// const app = express();

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

//ENDPOINTS ENDPOINTS ENDPOINTS ENDPOINTS
app.post("/api/user", user_controller.createUser);

//Access shelters
app.get("/api/shelters", getShelters);

//Access profiles
app.get("/api/profile/:id", getProfile);

//sockets
app.post("/api/user/chat", addChat);
app.post("/api/user/chat/update", addMessageToChat);
app.put("/api/user/chat", addMessage);
app.get("/api/user/chat/:id", getSocketID);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
