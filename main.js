// function getResult(a, b, c, d, e, f, g) {
//   var total = getTotal(a, b, c, d, e, f, g);
//   var percentage = getPercentage(total);
//   var status = getStatus(a, b, c, d, e, f, g);
//   console.log(
//     "total :" + total + " percentage :" + percentage + " status:" + status
//   );
// }

// function getTotal(a, b, c, d, e, f, g) {
//   return a + b + c + d + e + f + g;
// }
// function getPercentage(total) {
//   return total / 7;
// }

// function getStatus(a, b, c, d, e, f, g) {
//   if (a > 35 && b > 35 && c > 35 && d > 35 && e > 35 && f > 35 && g > 35) {
//     return "pass";
//   } else {
//     return "fail";
//   }
// }

// getResult(56, 40, 78, 45, 89, 36, 39);
// getResult(100,100,100,100,100,100,100);

// function wish(name1,name2){
// console.log(name1 + " & " + name2 + " are friends");
// }
// wish("praveen","vijaay")

// function wish(name,age){
// console.log(" hai " +name);
// }
// wish("praveen",23);

// var person = name,age;
// function wish(name,age){
//     console.log(" hi " +name );
// }
// wish("praveen",23)

// var person = {
//   name: "praveen",
//   age: 35,
//   gender: "male",
// };
// var person1 = {
//   name: "rohini",
//   age: 15,
//   gender: "female",
// };
// var person2 = {
//   name: "rohin",
//   age: 45,
//   gender: "male",
// };
// function wish(person){
//   console.log(" hi " +person.name);
// }
// wish(person);

// function check(person) {
//   if (person.age > 18) {
//     if (person.gender == "male") {
//       console.log(" mr. " + person.name + " is a major");
//     } else {
//       console.log(" ms. " + person.name + " is a major");
//     }
//   } else {
//     if (person.gender == "male") {
//       console.log(" mr. " + person.name + " is a minor");
//     } else {
//       console.log(" ms. " + person.name + " is a minor");
//     }

//   }
// }

// function check(person) {
//   var postfix = "";
//   if (person.age > 18) {
//     postfix = "major";
//   } else {
//     postfix = "minor";
//   }
//   console.log(person.name + " is a " + postfix);
// }

// check(person);
// check(person1);
// check(person2);

// function wish(name1 , name2){
// console.log(" hi " +name1 +" "+name2 );
// }
// wish("praveen","kumar");

// function getFullName(firstname ,lastname){

//     if(lastname == undefined){

//         lastname = ""
//     }
// return "mr " + firstname+" "+ lastname;

// }

// var name = getFullName("kumar");

// console.log(name);
// console.log(getFullName(name ));

// var fruits = ["BANANA", "APPLE"];
// let capitals = fruits;
// console.log(fruits);
// console.log(fruits[1]);

// fruits[fruits.length - 1] = "orange";
// console.log(fruits);
// print fruit names in capitals
// var add = {
//   name : "hemanth",
//   age : 22
// }
// var add1 = {
//   name : "ganesh",
//   age : 23
// }

// var users = new Map()

// users.set(add, "hemanth")
// users.set(add1, "ganesh")

// console.log(users.keys());

var fruitsMap = [
  {
    name: "banana",
    quantity: 30,
    price: 5,
  },
  {
    name: "apple",
    quantity: 20,
    price: 15,
  },
  {
    name: "orange",
    quantity: 50,
    price: 10,
  },
  {
    name: "strawberry",
    quantity: 20,
    price: 50,
  },
  {
    name: "grapes",
    quantity: 30,
    price: 45,
  },
  {
    name: "pineapple",
    quantity: 40,
    price:35,
  },
  {
    name: "pomegranate",
    quantity: 50,
    price: 25,
  },
];

// fruitsMap.forEach((fruit,i)=>{
   // console.log(fruitsMap.name , fruitsMap.price);
   // if(fruit.name == "pomegranate"){

   //    fruit.price=30
   // }
   // console.log(fruitsMap.name , fruitsMap.price);
// }

// )

fruitsMap.forEach((fruit)=>{

fruit.total = fruit.price * fruit.quantity

})
console.log(fruitsMap);
//console.log(fruitsMap);
// fruitsMap = "names".toUpperCase(fruitsMap)



// for(i=0;i<fruitsMap.length;i++){
   // total = total + fruitsMap[i].price
   // console.log(fruitsMap, fruitsMap[i].price," + ", 5);
//   fruitsMap[i].price = fruitsMap[i].price+5
//     console.log(fruitsMap[i].price);
// }
// console.log(total);
// console.log(fruitsMap[i].price);
// for(i=0;i<fruitsMap.length;i++){
//    console.log(i+1,fruitsMap[i].name);

// }

// print total number of fruits
// price of all fruits
// price of individual fruits
// total = 0;
// for (i = 0; i < fruitsMap.length; i++) {
// console.log(fruitsMap[i].price);

// if(fruitsMap[i].price>25){
   
//    console.log(fruitsMap[i]);
//    total= total+fruitsMap[i].price * fruitsMap[i].quantity ;
// }
// }
// console.log(total);


  //   console.log(fruitsMap[i].name+" " +fruitsMap[i].quantity+  " " + fruitsMap[i].price);
//   console.log(
//     fruitsMap[i].name,
//     ":",
//     fruitsMap[i].price * fruitsMap[i].quantity
//   );
  // total= total+fruitsMap[i].quantity;
  // console.log(fruitsMap[i].price);
//   total = total + fruitsMap[i].price * fruitsMap[i].quantity;
// }

// console.log(total);

//  var arr = [1,33,34,22]
// arr.map(value=>console.log(value));
// list = arr.map(value=>value+10);
// console.log(list);

// persons = [
//    {name :"praveen",age : 23},
//    {name :"suresh",age : 43},
//    {name :"ganesh",age : 51}
// ]

// console.log(persons[0]);
// console.log(persons[1]);

// persons.map(person => person.gender = " male ")
// console.log(persons);
// persons.map(p => console.log(p))

// persons.map(p => p.age = p.age+10);

// var arr=[1,2,3,4]
// for(i=0;i<4;i++){
//    console.log(arr[i]);
// }

//  var arr=[1,2,3,4]
// arr.forEach((n)=>{
//    console.log(n);
// }
// )


// fruit ={
//    name:"banana",
//    price:15
// }
// fruit.price = fruit.price + 5;
// fruit.name = "Apple";
// fruit.quantity = 50;
// console.log(fruit);