const db=require('../db/models')
const patient=require('../db/models/patient')
const Patient = db.Patient;


//POST
exports.create = (req, res) => {
    const registerPaitent = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
     
    };
  
    Patient.create(registerPaitent)
      .then((data) => {
        res.json({ message: "Patient register successfully" });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Account.",
        });
      });
  };


  //GET ALL
  exports.findAll = (req, res) => {
    Patient.findAll()
      .then((Patients) => {
        res.json(Patients);
      })
      .catch((err) => {
        res.send(err);
      });
  };

  //Get single details
  
exports.findById = (req, res) => {
    const id = parseInt(req.params.id);
    Patient.findByPk(id)
      .then((Patient) => {
        res.json(Patient);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  