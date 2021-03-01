const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const DoctorSchema= new mongoose.Schema({
    specs: [{
        type: objId,
        ref: 'DoctorSpec'
    }],
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
    description:{
        type:String,
        trim:true
    },
    department:{
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
    lat:{
        type:String,
        trim:true
    },
    lng:{
        type:String,
        trim:true
    },
    city:{
        type:String,
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
    rate:{
        type:String,
        default: "0.0"
    },
    view_number:{
        type:Number,
        default: 0 
    },
    createdDate : { 
        type : Date,
         default: Date.now 
        }
     
})


const  doctor=mongoose.model('Doctor',DoctorSchema)
module.exports=doctor;