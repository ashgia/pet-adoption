const getShelters = (req, res) => {
  const db = req.app.get("db");
  db.get_shelters().then(response => {
    res.status(200).send(response);
  });
};

module.exports = {
  getShelters
};
