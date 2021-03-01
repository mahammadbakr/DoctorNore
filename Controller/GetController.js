const Doctor = require("../Models/Doctor");
const Patient = require("../Models/Patient");
const Visit = require("../Models/Visit");
const Drug = require("../Models/Drug");
const Appointment = require("../Models/Appointment");
const DoctorSpec = require("../Models/DoctorSpec");

exports.getAllDoctor = async (req, res) => {
  try {
      const doctor =Doctor
      .find({})
      .populate('specs')
      .populate('appointments')
      .then(doctors => {
      res.status(200).json({
        status: 200,
        doctors,
      });
      });

 
    if(doctor==null){
      res.status(500).json({
        status: 500,
        data: doctor
    });
    }

   } catch (error) {
     res.status(400).json({
       status: 400,
       error,
     });
   }
  };

  exports.getAllPatient = async (req, res) => {
  try {
    const patient  =Patient 
    .find({})
    .populate('appointments')
    .then(patients => {
    res.status(200).json({
      status: 200,
      subCategories,
    });
    });


  if(patient==null){
    res.status(500).json({
      status: 500,
      data: patient
  });
  }

 } catch (error) {
   res.status(400).json({
     status: 400,
     error,
   });
 }
  };

  exports.getAllAppointment = async (req, res) => {
    try {
      const appointment  =Appointment 
      .find({})
      .populate('doctor')
      .populate("patient")
      .populate("visit")
      .then(appointments => {
      res.status(200).json({
        status: 200,
        appointments,
      });
      });
  
  
    if(appointment==null){
      res.status(500).json({
        status: 500,
        data: appointment
    });
    }
  
   } catch (error) {
     res.status(400).json({
       status: 400,
       error,
     });
   }
  };

  exports.getAllDoctorSpec = async (req, res) => {
    try {
      const doctorSpec=DoctorSpec  
      .find({})
      .then(doctorSpecs => {
      res.status(200).json({
        status: 200,
        doctorSpecs,
      });
      });
  
  
    if(doctorSpec==null){
      res.status(500).json({
        status: 500,
        data: doctorSpec
    });
    }
  
   } catch (error) {
     res.status(400).json({
       status: 400,
       error,
     });
   }
  };


  exports.getAllVisit= async (req, res) => {
    try {
      const visit  =Visit 
      .find({})
      .populate('drugs')
      .then(visits => {
      res.status(200).json({
        status: 200,
        visits,
      });
      });
  
  
    if(visit==null){
      res.status(500).json({
        status: 500,
        data: visit
    });
    }
  
   } catch (error) {
     res.status(400).json({
       status: 400,
       error,
     });
   }
  };

  exports.getAllDrug= async (req, res) => {
    try {
      const drug  =Drug 
      .find({})
      .populate('drugs')
      .then(drugs => {
      res.status(200).json({
        status: 200,
        drugs,
      });
      });
  
  
    if(drug==null){
      res.status(500).json({
        status: 500,
        data: drug
    });
    }
  
   } catch (error) {
     res.status(400).json({
       status: 400,
       error,
     });
   }
  };