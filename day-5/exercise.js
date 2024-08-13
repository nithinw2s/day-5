// arrow function
// used to create instant object creation

// person = (firstname, lastname) => (
//     {first:firstname, last:lastname}
// )

// console.log(person('nithin','bhai'))
// nithin = person('nithin', 'bhai')
// console.log(nithin.first)



// // ternary /conditional operator 
// let result = (10 > 0) ? true : false;
// console.log(result)


// object destructuring 
// let {first, last, age=21} = nithin

// console.log(first, last, age)
// console.log(nithin)


// const marks = {
//     section1: { alpha: 15, beta: 16 },
//     section2: { alpha: -31, beta: 19 }
// };
// const { section1: { alpha: alpha1, beta: beta1 }, section2: { alpha, beta} } = marks;
// console.log(alpha1, beta1, alpha,);



// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// array = [[1,'nithin'],[2,'demi'],[3,'dhanush']]
// console.log(fruits, array)
  
//   // Destructing
// let text = "";
// for (const [key, value] of fruits) {
//   text += "<p>" + key + " is " + value;
// }
  
//   // Display the Values
// document.getElementById("demo").innerHTML = text;



// class 
class OOPs {
    constructor(name) {
        this.name = name;
    }
 
    // Getter method
    get langName() {
        return this.name;
    }
 
    // Setter method
    set langName(x) {
        this.name = x;
    }
    hello(){
        console.log(`Hello ${this.name}`)
    }
}
 
let obj = new OOPs('JavaScript');
console.log(obj);
console.log(obj.name); 

console.log(obj);
 
obj.langName = 'Java';
console.log(obj.name);