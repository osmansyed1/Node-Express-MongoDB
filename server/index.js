const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
let data=require("./model/employee")

let app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/newCompany")
mongoose.connection
.once("open",()=>{
    console.log("connected")
})
.on("error",()=>{
    console.log("disconnected")
})


app.post("/user",(req,res)=>{
    //1. console.log(req.body)
    //2 . res.json()
    data.create(req.body)
    .then((u)=>{
        res.json(u)
        console.log("sucess")

    
    })
    //! both 1 and 2 line connected
})

app.get("/user",(req,res)=>{
    data.find()
    .then((u)=>{
        res.json(u)
    })
})

app.get("/edit/:id",(req,res)=>{
       data.findOne({_id:req.params.id})
       .then((u)=>{
        // console.log("got")
        res.json(u)


       })
})

app.put("/edit/:id",(req,res)=>{
    data.updateOne({_id:req.params.id},{$set:{name:req.body.name,salary:req.params.salary}})
    .then(()=>{
        res.json("sucess")
    })
})
app.delete("/user/:id",(req,res)=>{
    data.deleteOne({_id:req.params.id})
    .then(()=>{
        res.json("deleted")
    })
})

app.listen(7000,()=>{
    console.log("server is awake")
})
