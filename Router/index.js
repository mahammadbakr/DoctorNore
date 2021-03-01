const router = require('express').Router()
const authMiddleware = require('../Middlewares/Auth')
const auth = require('./auth')
const user = require('./user')

const addRoute = require('../Controller/AddRoute')


const {
    getAllDoctor,getAllPatient,getAllAppointment,getAllDoctorSpec,getAllVisit,getAllDrug
} = require('../Controller/GetController')

//Auth
router.use('/auth', auth)
router.use('/user', authMiddleware)
router.use('/user', user)

// Adding Routes
router.use('/add', addRoute)


//GetAll Routes
router.use('/getAllDoctor', getAllDoctor)
router.use('/getAllPatient', getAllPatient)
router.use('/getAllAppointment', getAllAppointment)
router.use('/getAllDoctorSpec', getAllDoctorSpec)
router.use('/getAllVisit', getAllVisit)
router.use('//getAllDrug', getAllDrug)


module.exports = router