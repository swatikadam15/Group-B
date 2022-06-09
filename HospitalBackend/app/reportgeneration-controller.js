const db=require('../db/models')
const reportgenerations=require('../db/models/reportgeneration')
const Reportgeneration=db.reportgeneration



//POST
exports.create = (req, res) => {
    const registerPaitent = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
      appointmentdate:req.body.appointmentdate,
      patientdetails:req.body.patientdetails,
      prescription:req.body.prescription
     
    };
  
    Reportgeneration.create(registerPaitent)
      .then((data) => {
        res.json({ message: "report generated successfully" });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Account.",
        });
      });
  };

  //GET
  exports.findAll = (req, res) => {
    Reportgeneration.findAll()
      .then((Patients) => {
        res.json(Patients);
      })
      .catch((err) => {
        res.send(err);
      });
  };
