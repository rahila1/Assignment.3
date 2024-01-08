const price = ["390 ", "580" , "750", "208"]
let sorted= price.sort((a , b) => {
    return (b - a)
});
console.log(sorted);

