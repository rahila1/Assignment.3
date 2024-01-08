let arr= ["areena", "aleena" , "shibra", "labo" ,"nabo", "rabo"]
let a= arr.filter((names) => {
    if (names.length < 5 ){
        return names;
    }
}
)
console.log(a);
let b= arr.map((upper) =>{
    if (upper.length > 5 ){
        return upper.toUpperCase();
    }
})
console.log(b);