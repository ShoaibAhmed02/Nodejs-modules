const args = process.argv
// run like node process_module.js input1 input2 .....
console.log(args,"\n Below has different outputs and me has different output Zara Smbhal Key :(");

//see the difference between
const argss = process.argv.slice(2);
// check for this too :( Udemy Course
for (const iterator of argss) {
        console.log(iterator)
}


// returning just index of the inputs.. 
for (const key in argss) {
        console.log(argss[key])
    
}
