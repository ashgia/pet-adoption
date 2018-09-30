module.exports = {
  addPet: (req, res, next) => {
    // console.log("HELLO", req.body);
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
  },
  getPets: (req, res) => {
    const db = req.app.get("db");
    // console.log(req.user, "REQ USER");
    db.get_pets(req.user.userid).then(response => {
      res.status(200).send(response);
    });
  },
  getPetsShelterDetails: (req, res) => {
    const db = req.app.get("db");
    // console.log("USERID:", req.params);
    db.get_pets_shelterdetails(req.params.id).then(response => {
      console.log("PETS:", response);
      res.status(200).send(response);
    });
  },
  deletePet: (req, res) => {
    const db = req.app.get("db");
    // console.log("PETNAME: ", req.body.petname);
    db.delete_pet(req.body.petname).then(response => {
      res.status(200).send(response);
    });
  }
};
