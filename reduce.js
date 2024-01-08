// .reduce() = reduce the  element of an array to a single value
let price = [ 40, 70, 69, 23, 56];
let total = price.reduce((sum , total) =>{
    return ( sum + total)
}
    
)
console.log(total);
