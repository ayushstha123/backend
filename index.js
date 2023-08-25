// step 1: import packages
const express = require('express');//using express
const cors=require('cors');
const cloudinary=require('cloudinary');
const multipart=require('connect-multiparty');


// const mongoose=require('mongoose');//using mongooes
const connectDB = require('./database/DB');

//dotenv config
require('dotenv').config();
//step 2:use express
const app=express();

/*connect to mongodb
mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
console.log(`DB CONNECTED : ${process.env.MONGO_DB_URL}`);
 })  db.js bata hamley tesma yo code haley ani import garey*/ 

 //cors config
const corsOptions={
    origin:true,
    credentials:true,
    optionSuccessStatus:200
};
app.use(cors(corsOptions));


//ejs config
app.set('view engine',"ejs");
app.use(express.urlencoded({extended:true}))

connectDB();

//middleware json
app.use(express.json());
app.use(multipart());

//all route configuration
app.use('/api/users', require('./controllers/userControllers'));
app.use('/api/products', require('./controllers/productController'));
app.use('/api/orders', require('./controllers/orderController'));

//api
// '/' means route k ko lagi api banairachau bhanera ,route banauda ki request lincha ki response dincha
//cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

app.get('/',(req,res)=>{
    res.send("welcome to flybuy api");
});

//listen to port 
app.listen(process.env.PORT,()=>{
console.log(`Server is running on port ${process.env.PORT}`);
});