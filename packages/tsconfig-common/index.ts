import {myFunction} from './myFunction.js';

import {SomeValue, type SomeType} from './type-import.js';

console.log(SomeValue);

export function logInput(input: SomeType) {
  console.log(input);
}

await Promise.resolve();

console.log(myFunction(100, 200));
