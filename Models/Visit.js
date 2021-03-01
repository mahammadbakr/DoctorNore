const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const VisitSchema= new mongoose.Schema({
    drugs: [{
        type: objId,
        ref: 'Drug'
    }],

    bill:{
        type:String,
        trim:true
    },
    disease:{
        type:String,
        trim:true
    },
    diseaseDate : { 
        type : Date,
        trim:true
    },
    visitDate : { 
        type : Date,
        trim:true
    },
    //24  Hour Type    e.g :  "11:59" or "21:59"
    visitTime: {
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
    createdDate : { 
        type : Date,
         default: Date.now 
    }
     
})


const  visit=mongoose.model('Visit',VisitSchema)
module.exports=visit;