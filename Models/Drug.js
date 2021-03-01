const  mongoose=require('mongoose');
const objId = mongoose.SchemaTypes.ObjectId

const DrugSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    image:{
        type:String,
        trim:true
    },
    type:{
        type:String,
        trim:true
    },
    scienceName:{
        type:String,
        trim:true
    },
    usageDate : { 
        type : Date,
         default: Date.now 
    },
    note:{
        type:String,
        trim:true
    },
    createdDate : { 
        type : Date,
         default: Date.now 
    }
     
})


const  drug=mongoose.model('Drug',DrugSchema)
module.exports=drug;