function makeArray(firstArray, secondArray, maxLength) {
  // if (firstArray === undefined || secondArray === undefined || maxLength === undefined) {
  //   return [];
  // }
const newArray = firstArray.concat(secondArray);

if (newArray.length > maxLength) {
const newCopyArray = newArray.slice(0, maxLength);
console.log(newCopyArray);
} else {
  return newArray;
}

}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

