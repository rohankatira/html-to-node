//html to ejs
const { log } = require("console");
const express = require("express");
const app = express();
const port = 8081;
app.set("view engine", "ejs");

app.use(express.static("public")) 
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/tables",(req,res)=>{
    res.render("pages/tables")
})
app.get("/form-basic",(req,res)=>{
    res.render("pages/form-basic")
})
app.get("/form-wizard",(req,res)=>{
    res.render("pages/form-wizard")
})
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("sever is started",port);
        
    }
})