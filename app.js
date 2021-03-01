const express=require('express')
const dotenv=require('dotenv')
// const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

// const http=require('http')
// const morgan = require('morgan');
// const logger = require('winston');
// const multer = require('multer');
// const path = require('path');
// const qr = require("qrcode");
// const fs = require('fs')
// const request = require('request')
require('dotenv').config({ path: './.env' });

const app=express();


// Configration
dotenv.config({path:'./config.env'});
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
const config = require('./config')

// print the request log on console
app.use(morgan('dev'))

// set the secret key variable for jwt
app.set('jwt-secret', config.secret)

// index page, just for testing
app.get('/', (req, res) => {
  res.send('Hello JWT')
})

// configure api router
app.use('/api', require('./Router/index'))
// app.use('/api/add', require('./Controller/AddRoute'))

mongoose.connect(config.mongodbUri)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})

// app.engine('html', require('ejs').renderFile);
// app.set("view engine", "html");

// Uploading Images
// var storage = multer.diskStorage({ 
//   destination: function (req, file, cb) { 
//       cb(null, "./uploads/images") 
//   }, 
//   filename: function (req, file, cb) { 
//     cb(null, "IMK" + "-" + Date.now()+".jpg") 
//   } 
// }) 

// const maxSize = 1 * 1000 * 1000; 
    
// var upload = multer({  
//     storage: storage, 
//     limits: { fileSize: maxSize }, 
//     fileFilter: function (req, file, cb){ 
    
//       var filetypes = /jpeg|jpg|png/; 
//         var mimetype = filetypes.test(file.mimetype); 
  
//         var extname = filetypes.test(path.extname( 
//                     file.originalname).toLowerCase()); 
        
//         if (mimetype && extname) { 
//             return cb(null, true); 
//         } 
      
//         cb("Error: File upload only supports the "
//                 + "following filetypes - " + filetypes); 
//       }  
  
// }).single("mypic");   


// app.post("/uploadProfilePicture",function (req, res, next) { 
        
//   upload(req,res,function(err) { 

//       if(err) { 
//           //there is error while uploading
//           res.send(err) 
//       } 
//       else { 

//           // image successfully uploaded 
//           res.send("Success, Image uploaded!") 
//       } 
//   }) 
// }) 

// app.use('/uploads', express.static('uploads'));



// //QR CODE GENERATOR

// app.post("/scan", (req, res) => {
//     const url = req.body.url;

//     if (url.length === 0) res.send("Empty Data!");
//     qr.toDataURL(url, (err, src) => {
//         if (err) res.send("Error occured");

//         res.sendFile('/Resorces/scan.html', {root: '.'},{ src });
//         console.log(src);
//         // res.render("/scan", { src });
//     });
// });

// download the QR image 
// var download = function(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     console.log('content-type:', res.headers['content-type']);
//     console.log('content-length:', res.headers['content-length']);

//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };

// download('https://www.google.com/images/srpr/logo3w.png', './uploads/QRImages/google.png', function(){
//   console.log('done');
// });


// app.use(bodyparser.urlencoded({ extended: false }));
// app.use(bodyparser.json());
// app.use(cors());


// const config = require('./config');
// const {
//   hostname,
//   port,
// } = config.server;


// Setup middleware
// app.use(morgan('common'));

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({
  extended: false,
}));
// parse application/json
app.use(bodyparser.json());

var publicDir = require('path').join(__dirname,'/Uploads'); 
app.use(express.static(publicDir)); 

// ////// routers
// const router=require('./Routers/Router')


// app.use('',router)



// Handle middleware errors
// app.use((req, res, next) => {
//   const message = 'Resource not found';
//   logger.warn(message);
//   res.status(404);
//   res.json({
//     error: true,
//     message,
//   });
// });


// app.use((err, req, res, next) => {
//   let {
//     statusCode = 500,
//   } = err;
//   const {
//     message,
//   } = err;

//   // Validation Errors
//   if (err.message.startsWith('ValidationError')) {
//     statusCode = 422;
//   }

//   logger.error(`Error: ${message}`);
//   res.status(statusCode);
//   res.json({
//     error: true,
//     statusCode,
//     message,
//   });
// });

////listing the api
const PORT=process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})

