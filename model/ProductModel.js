const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({

    productName:{
        type:String,
    
    },
    productPrice:{
        type:String,
        
    },
    productCategory:{
        type:String,
        
    },
    productDescription:{
        type:String,
        
    },
 
    });
    module.exports=mongoose.model('ProductModel',productSchema);