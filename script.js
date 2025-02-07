// declaring array

let list = ["schools", "books", "cars","countries", "jobs"];
console.log(list);
// accessing array

const education= list[0];
const object=list[2];
const income =list[4];
console.log(education);
console.log(object);
console.log(income);

// using array properties

console.log(list, "my array length is = ", list.length);


// array methods

console.log("last item removed from array = " ,list.pop());
console.log ("new array list= " , list);
console.log("first item removed from array = " ,list.shift());
console.log("new array list = " , list);
console.log("new array length = " ,list.push("sports"));
console.log("new array list = ", list);

// iterating through array

let numbers = [ 2,3,6,7,8,9,10] ;
// using for loop
console.log(" using for loop to print the array :");
for(let i = 0; i< numbers.length; i++)
{

    console.log(numbers[i]);
    
} 

// using forEach()

console.log(" using forEach() to print the array :");

numbers.forEach((element) => console.log(element));

// array destructuring
 let [firstList,secondList,...rest] = list;
 console.log("selected from the list array:",firstList,",",secondList);
 console.log("what remains in the array = ",rest);
 

