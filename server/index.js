require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const port = 3001;

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(dbReturned => app.set("db", dbReturned))
  .catch(err => console.log(err));

app.use(json());

//our database sql functions gets index by massive, and lives on dbReturned, and is set to db, which is on app, so it is on req.app
app.get("/api/test", (req, res) => {
  req.app
    .get("db")
    .get_users()
    .then(response => console.log(response) || res.status(200).send(response))
    .catch(err => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
