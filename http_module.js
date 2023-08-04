const http = require("http")
const server = http.createServer((req,res)=>{
    if (req.url=='/pi/course'){
        res.write(JSON.stringify([1,2,2,2,4]))
        res.write("Hello World :(")
        res.end();
    }
})

server.listen(3000);
console.log("Listening to port 3000");