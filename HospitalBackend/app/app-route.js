module.exports = (app) => {
  const express = require("express");
  const Router = express.Router();

  const PaitentController = require("./patient-controller");
  const ReportGenerateController=require('./reportgeneration-controller')
  const DoctorloginController=require('./doctorlogin-controller')


  //patient API
  Router.post("/patient/register", PaitentController.create);
  Router.get("/patient/details", PaitentController.findAll);
  Router.get("/patient/getsingle/:id",PaitentController.findById)


//ReportGenerate API
Router.post("/patient/report", ReportGenerateController.create);
Router.get("/patient/getallreport",ReportGenerateController.findAll)

//Doctor Login API

Router.post("/doctorlogin", DoctorloginController.create);


  app.use("/app", Router);
};




