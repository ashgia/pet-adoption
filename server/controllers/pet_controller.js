module.exports = {
  addPet: (req, res, next) => {
    console.log("HELLO", req.body);
    const {
      petspecies,
      petbreed,
      petname,
      petgender,
      petsize,
      petcolor,
      petage,
      petgoodWith,
      petphotoURL,
      userid
    } = req.body;
    const db = req.app.get("db");
    db.create_pet([
      petspecies,
      petbreed,
      petname,
      petgender,
      petsize,
      petcolor,
      petage,
      petgoodWith,
      petphotoURL,
      userid
    ])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("Error");
        console.log(err);
      });
  }
};
