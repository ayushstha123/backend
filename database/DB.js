const mongoose=require("mongoose");
const connectDB=()=>{
mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log(`CONNECTED TO MONGODB`);
});
};
module.exports=connectDB;