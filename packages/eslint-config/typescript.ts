export const foo = (x: number) => {
  if (x > 0) {
    console.log('positive');
  } else {
    console.log('non-positive');
  }
};
function bar(y: string) {
  return y.toUpperCase();
}
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
