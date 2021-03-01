const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const AppointmentSchema= new mongoose.Schema({
    doctor: {
        type: objId,
        ref: 'Doctor'
    },
    patient: {
      type: objId,
      ref: 'Patient'
    }, 
   date:{
        type : Date,
        trim:true
    },
    visit: {
      type: objId,
      ref: 'Visit'
    },
  
    //24  Hour Type    e.g :  "11:59" or "21:59"
    time: {
        type: String,
        validate: {
          isAsync: true,
          validator: function(v, cb) {
            setTimeout(function() {
              var timeRegex =  /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
              var msg = v + ' is not a valid time format!';
              cb(timeRegex.test(v), msg);
            }, 5);
          },
          message: 'Default error message'
        },
        required: [true, 'Time is required']
      },
    duration:{
        type:String,
        trim:true
    },
    isAvailable:{
        type:Boolean,
        default: true
    },
    createdDate : { 
        type : Date,
         default: Date.now 
     }
     
})


const  appointment=mongoose.model('Appointment',AppointmentSchema)
module.exports=appointment;