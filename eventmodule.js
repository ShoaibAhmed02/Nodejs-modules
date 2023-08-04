
import { EventEmitter } from 'events';
//import { copyFileSync } from 'fs';

const myEE = new EventEmitter();

myEE.on("working",()=>{
    console.log("Hello The event is working :(")

    setTimeout(()=>{
        console.log("After three seconds im running")
    }),3000
})

console.log("This is not working :(")

myEE.emit("working") // parameter passing.


