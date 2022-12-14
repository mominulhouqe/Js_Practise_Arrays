
let names = [ "anisul ", "mominul ", "rabiya"];
console.log(names);

// removing element from array
names.shift();
console.log(names);
// adding element from array
names.unshift("rayan bhai","Fahim Khan");
console.log(names);

// Add & Removing from array splice method
names.splice(2,0," Naim Khan");
console.log(names);

names.splice(2,1);
console.log(names);


// Sorting Alphabate
let  namess = ["Habibul", "Mominul HOuqe", "Js conding "];
console.log(namess);
let sortArray = namess.sort();

console.log(namess);
namess.reverse();
console.log(namess);

// sorthing Numbers
let number = [ 34,34 ,32,562,1,34,7];
console.log(number);
number.sort(function(a,b){
    return a-b;
});
console.log(number);
number.sort(function(a,b){
    return b-a;
});
console.log(number);



