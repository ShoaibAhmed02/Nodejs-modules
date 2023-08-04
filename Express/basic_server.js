const express = require("express")
const app = express();

app.get("/",function(req,res){
    res.set("<h1>Simple replying to the Home Page :(</h1>")
})
app.listen(3000,function(req,res){
    console.log("Listening to the 3000.")
})