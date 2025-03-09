// Testing "Import Assertions"
// @see https://typescript.tv/new-features/what-are-ecmascript-modules/
import user from './user.json' assert {type: 'json'};

export function myFunction(a: number, b: number) {
  console.log(user.age);
  return a + b;
}
