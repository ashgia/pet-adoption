const getShelters = (req, res) => {
  const db = req.app.get("db");
  db.get_shelters().then(response => {
    res.status(200).send(response);
  });
};

const getProfile = (req, res) => {
  const db = req.app.get("db");
  db.get_profile_id(req.params.id).then(response => {
    // console.log(response);
    res.status(200).send(response);
  });
};

const getSocketID = (req, res) => {
  const db = req.app.get("db");
  db.get_profile_id(req.params.id).then(response => {
    // console.log(response);
    res.status(200).send(response);
  });
};

module.exports = {
  getShelters,
  getProfile,
  getSocketID
};
