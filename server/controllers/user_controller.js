module.exports = {
  createUser: (req, res, next) => {
    console.log(req.body);
    const db = req.app.get("db");
    const {
      fullname,
      city,
      email,
      phoneNumber,
      address,
      photoURL,
      living,
      aboutMe,
      species,
      breed,
      gender,
      color,
      size,
      age,
      goodWith,
      mission,
      policy,
      shelter
    } = req.body;
    db.create_user([
      req.user.authid,
      fullname,
      city,
      email,
      phoneNumber,
      photoURL,
      living,
      aboutMe,
      species,
      breed,
      gender,
      color,
      size,
      age,
      goodWith,
      address,
      mission,
      policy,
      shelter
    ])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("Error");
        console.log(err);
      });
  }
};
