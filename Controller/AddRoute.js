const Doctor = require("../Models/Doctor");
const Patient = require("../Models/Patient");
const Visit = require("../Models/Visit");
const Drug = require("../Models/Drug");
const Appointment = require("../Models/Appointment");
const DoctorSpec = require("../Models/DoctorSpec");

const router = require('express').Router()



const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './Uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



router.post('/doctor',upload.single('image'),async  function  (req, res, next) {
  try {

    const doctor = await Doctor.create({
      name: req.body.name,
      image: req.file.path,
      description: req.body.description,
      department: req.body.department,
      gender: req.body.gender,
      address: req.body.address,
      lat: req.body.lat,
      lng: req.body.lng,
      city:req.body.city,
      email: req.body.email,
      phone: req.body.phone,
      rate: req.body.rate,
      view_number: req.body.view_number,
      createdDate: req.body.createdDate,
      specs: req.body.specs,
      appointments: req.body.appointments,
    })
  

    if(doctor==null){
      res.status(500).json({
          status: 500,
          data: doctor
      });
    }

  res.status(200).json({
    status: 200,
    data: doctor
});
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: error
  });
  }
})






router.post('/patient',upload.single('image'),async function(req, res, next) {
  try {
    const patient = await Patient.create({
      name: req.body.name,
      image: req.file.path,
      occupation: req.body.occupation,
      city: req.body.bloodGroup,
      gender: req.body.gender,
      address: req.body.address,
      birthDate: req.body.birthDate,
      weight: req.body.weight,
      height:req.body.height,
      email: req.body.email,
      phone: req.body.phone,
      createdDate: req.body.createdDate,
      appointments: req.body.appointments,
    })
  

    if(patient==null){
      res.status(500).json({
          status: 500,
          data: patient
      });
    }

  res.status(200).json({
    status: 200,
    data: patient
});
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: error
  });
  }
})
  



router.use('/appointment', exports.addAppointment = async (req, res) => {
  try {
    const appointment =  await Appointment.create({
      date: req.body.date,
      time: req.body.time,
      duration: req.body.duration,
      isAvailable: req.body.isAvailable,
      createdDate: req.body.createdDate,
      doctor: req.body.doctor,
      patient: req.body.patient,
      visit: req.body.visit
    })
  

    if(appointment==null){
      res.status(500).json({
          status: 500,
          data: appointment
      });
    }

  res.status(200).json({
    status: 200,
    data: appointment
});
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: error
  });
  }
  })


  router.use('/doctorSpec', exports.addDoctorSpec = async (req, res) => {

  try {
    const doctorSpec = await DoctorSpec.create({
      name: req.body.name,
      description: req.body.description,
      createdDate: req.body.createdDate,
    })
  

    if(doctorSpec==null){
      res.status(500).json({
          status: 500,
          data: doctorSpec
      });
    }

  res.status(200).json({
    status: 200,
    data: doctorSpec
});
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: error
  });
  }
})




router.use('/visit', exports.addVisit = async (req, res) => {
  try {
    const visit = await Visit.create({
      bill: req.body.bill,
      disease: req.body.disease,
      diseaseDate: req.body.diseaseDate,
      visitDate: req.body.visitDate,
      visitTime: req.body.visitTime,
      createdDate: req.body.createdDate,
      drugs: req.body.drugs,
    })
  

    if(visit==null){
      res.status(500).json({
          status: 500,
          data: visit
      });
    }

  res.status(200).json({
    status: 200,
    data: visit
});
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: error
  });
  }
})

  


router.post('/drug',upload.single('image'),async function(req, res, next) {

    try {
      const drug =  await Drug.create({
        name: req.body.name,
        image:req.file.path,
        type: req.body.type,
        scienceName: req.body.scienceName,
        usageDate: req.body.usageDate,
        note: req.body.note,
        createdDate: req.body.createdDate,
      })
    

      if(drug==null){
        res.status(500).json({
            status: 500,
            data: drug
        });
      }
  
    res.status(200).json({
      status: 200,
      data: drug
  });
    } catch (error) {
      res.status(400).json({
        status: 400,
        data: error
    });
    }
})



  module.exports = router;
