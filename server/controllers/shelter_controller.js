const getShelters = (req, res) => {
  const db = req.app.get("db");
  db.get_shelters().then(response => {
    res.status(200).send(response);
  });
};

const getShelter = (req, res) => {
  const db = req.app.get("db");
  db.get_shelter_id().then(response => {
    res.status(200).send(response);
  });
};
module.exports = {
  getShelters,
  getShelter
};
