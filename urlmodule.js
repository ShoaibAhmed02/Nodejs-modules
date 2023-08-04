//  const url = require("url");

import {URL} from "url";

const myURL = new URL("https://www.google.com/search?channel=fs&client=ubuntu&q=your");
//console.log(myURL)
// see there is no function brackets () :(
console.log(myURL.hash)
console.log(myURL.protocol)
console.log(myURL.host)
console.log(myURL.hostname)
console.log(myURL.search)
console.log(myURL.searchParams)