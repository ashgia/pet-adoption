const getUser = (req, res) => {
  // console.log("GET USER", req.session);
  if (!req.user) res.sendStatus(401);
  else res.status(200).send(req.user);
};

const getUsers = (req, res) => {
  // console.log(req);
  const db = req.app.get("db");
  db.get_users().then(response => {
    // console.log(response);
    res.status(200).send(response);
  });
};

// const logout = (req, res) => {
//   // Logout user and send to client
//   req.session.destroy(() => {
//     res.redirect("http://localhost:3000/");
//   });
// };

module.exports = {
  getUser,
  getUsers
};
