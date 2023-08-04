const expres = require("express")
const app = expres();

app.get("/",function(req,res){
      res.set("<h1>Welcome to the home page</h1>");
})

app.get("/about",function(req,res){
     res.set("<h3><h1>Information!!</h1><h2>Name is : Shoaib Ahmed</h2><h2>Skills : MERN Developer :( </h2> </h3>")})



app.get("./contact",function(req,res){
    res.set("<h1>contact me @ : Shoaibahmed@gmail.com </h1>")
    res.send("Check this send function too")// this is something right method to work with ...... not the set method 
    
})


app.listen(3000,()=>{
    console.log("Listening to the port number 3000")
})