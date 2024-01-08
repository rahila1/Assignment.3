//---callback function---//
//The map method calls the callbackfn function one time for each element in the array.
let myNums = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]
let newNums= myNums.map( (num) => (num + 10)
)
console.log(newNums);