// app.js - our main application file
//const math = require("./math.mjs");
import {mean, sum} from "./math.js";

const nums = [1, 2, 3, 4, 5];
console.log(`The sum is ${sum(nums)}`);
console.log(`The mean is ${mean(nums)}`);