const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '1234';
const someOtherPlaintextPassword = 'shoaib';

arr=[1];
const pass="";
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    arr[1]=hash;
    bcrypt.compare(myPlaintextPassword, arr[1], function(err, result) {
    console.log("your password is ",myPlaintextPassword)
    console.log("matched password is",arr[1],result)
});
    
});

// console.log(arr[1])

// bcrypt.compare(someOtherPlaintextPassword, pass, function(err, result) {
//     console.log("password is incorrect",result)
// });