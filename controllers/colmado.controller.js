
const colmadoSchema = require('../models/colmado.models');




class colmadoControllers{
   
    //POST
    async insertProducts(req, res){
        const date = new Date();
        await colmadoSchema(req.body)
        .save()
        .then(()=>{
            res.status(200).json({
                code:200,
                message:'Products added',
                date : `${date.getUTCDay()}${'/'}${date.getMonth() + 1}${'/'}${date.getFullYear()}`
            })
        })
        .catch(err=>{
            res.status(400).json({
                error: {
                    code: 400,
                    message: "Product no added",
                    details: {
                      missing_parameter: err,
                      errorMessage:"Products already exist or missing some parameters"
                    }
                  }
            })
        })
    }



    //GET
    async getProducts(req, res){
        await colmadoSchema.find()
        .then((data)=>{
            res.status(200).json({
                products:data
            })
        })
        .catch((err)=>{
            res.status(200).json({
                error: {
                    code: 400,
                    message: "Product no found",
                    details: {
                      errorMessage: err,
                    }
                  }
            })
        })
    }





    //PUT
    async updateProducts(req, res){

        const {id} = req.params;
        const {productName, productExpireDate, productAmount, productIMG, productPrice, productDescription} = req.body;

        await colmadoSchema.findByIdAndUpdate(id, {productName, productExpireDate, productAmount, productIMG, productPrice, productDescription})
        .then(()=>{
            res.status(200).json({
                code:200,
                message : `Product ${productName} updated`
            })
        })
        .catch((err)=>{
            res.status(400).json({
                error: {
                    code: 400,
                    message: "Product no updated",
                    details: {
                      errorMessage: err,
                    }
                  }
            })
        })
    }






    //DELETE
    async deleteproduct(req, res){
        const {id} = req.params;

        await colmadoSchema.findOneAndDelete(id)
        .then(()=>{
            res.status(200).json({
                code:200,
                message: `Products ${id} deleted`
            })

        })
        .catch((err)=>{
            res.status(400).json({
                error: {
                    code: 400,
                    message: "Product no deleted",
                    details: {
                      errorMessage: err,
                    }
                  }
            })
        })
    }
}

module.exports = new colmadoControllers;