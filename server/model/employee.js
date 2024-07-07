const mongoose=require("mongoose")
   const Schema=mongoose.Schema
        const userSchema=new Schema({
                name:String,
                salary:String

            })

        const usermodel =mongoose.model("company",userSchema)

         module.exports=usermodel