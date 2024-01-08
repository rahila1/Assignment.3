myArray = [
    {'id1':'73'},
    {'id2':'45'}, 
    {'id3' : '46'}]
let bar = myArray.find(ob=>(ob.id2 == 45));

myArray.id2= "48"
console.log(bar);

// let userOne= {
//     email: 'someone@gmail.com',
//     name: 'someOne',
//   login(){
//     console.log(this.email, 'has logged in');
//   },
//   logout(){
//     console.log(this.email, 'has logged out');

//   }
// }
// userOne.name = "rOMAN"
// console.log(userOne.name);