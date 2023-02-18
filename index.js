

const express= require('express');
const body_parser= require('body-parser');
const mongoose= require('mongoose');
const app= express();

app.use(express.urlencoded({extended:true}))
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
    
const webroute= require('./route/web')
app.use(webroute)

const port= 4976;
const dbCon= "mongodb+srv://ankandb:vnkhSzkCKB5LXe20@cluster0.jmt30c3.mongodb.net/apipps"
mongoose.connect(dbCon,({useNewUrlParser:true, useUnifiedTopology:true}))
.then(result=>{
    app.listen(port,()=>{

        console.log(`server running on http://localhost:${port}`)
        console.log("server connected")
    })
}) 
.catch(error=>{
    console.log(error)
})