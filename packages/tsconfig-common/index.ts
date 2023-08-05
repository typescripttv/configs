import {myFunction} from './myFunction.js';

const fs = require('fs');

console.log(fs);

await Promise.resolve();

console.log(myFunction(100, 200));
