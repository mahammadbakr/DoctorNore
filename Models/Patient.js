const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const PatientSchema= new mongoose.Schema({
    appointments: [{
        type: objId,
        ref: 'Appointment'
    }],
    name:{
        type:String,
        required: true,
        trim:true
    },
    image:{
        type:String,
        required: true,
        trim:true
    },
    occupation:{
        type:String,
        trim:true
    },
    city:{
        type:String,
        trim:true
    },
    bloodGroup:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    birthDate:{
        type : Date,
        trim:true
    },
    weight:{
        type:Number,
        trim:true
    },
    height:{
        type:Number,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    phone:{
        type:Number,
        required: true,
        trim:true
    },
    createdDate : { 
        type : Date,
         default: Date.now 
        }
     
})


const  patient=mongoose.model('Patient',PatientSchema)
module.exports=patient;