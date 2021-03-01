const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const DoctorSpecSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    description:{
        type:String,
        required: true,
        trim:true
    },
    createdDate : { 
        type : Date,
         default: Date.now 
    }   
})


const  doctorSpec=mongoose.model('DoctorSpec',DoctorSpecSchema)
module.exports=doctorSpec;