const db = require("../db/models");
const doctorlogin = require("../db/models/doctorlogin");
const Doctorlogin = db.doctorlogin;

exports.create = (req, res) => {
  const doctorlogin = {
    Email: req.body.Email,
    password: req.body.password,
  };

  Doctorlogin.create(doctorlogin)
    .then((data) => {
      res.json({ message: "Doctor login successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Account.",
      });
    });
};
