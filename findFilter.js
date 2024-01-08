//----find() method----//
//Returns the first element from a given array which satisfy a given condition//
//Return a single element//
let ages= [ 10 , 20 , 50, 23 , 16 , 45]
let adultAges=ages.find((adult) => {
    return (adult > 20)
})
console.log(adultAges);



//----filter() method----//
//Returns all element from an array which fulfill a givfen condition--//
//Return an array//

let id= [ 10 , 20 , 50, 23 , 16 , 45]
let newId=id.filter((id) => {
    return (id > 20)
})
console.log(newId);

