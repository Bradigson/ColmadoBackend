const mongoose = require('mongoose');


const colmadoSchema = mongoose.Schema({
    productName : {
        type:String,
        require:true,
        unique:true
    },
    productExpireDate:{
        type:String,
        require:true
    },
    productAmount:{
        type:Number,
    },
    productIMG:{
        type:String,
        require:true,
        unique:true
    },
    productPrice:{
        type:String,
        require:true
    },
    productDescription:{
        type:String
    }
});



const colmadoSchemaModels = mongoose.model('products', colmadoSchema);

module.exports = colmadoSchemaModels;