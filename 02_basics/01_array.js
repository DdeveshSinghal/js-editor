// array    

// In javascript array can be stored multiple types of datatypes value in single array.

// Array is resizable we can change data in any time

const myArr = [0,1,2,3,4,5]
// console.log(myArr[1]);

// const mix = [1,2,"kiara","chavi"]
// console.log(mix[2]);

// const arr = new Array(1,2,3,4)
// console.log(arr[1]);

// Array Methods

// myArr.push(6);  // add value in last
// myArr.pop(); // remove value in last

// myArr.unshift(8)  // add value in starting
// myArr.shift();      // remove value in starting

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()     // join() method convert array into string
// console.log(myArr);
// console.log(newArr);


console.log("A", myArr);

const myNewArr1 = myArr.slice(1,3)  // slice()
console.log(myNewArr1);

console.log("B", myArr);

const myNewArr2 = myArr.splice(1,3)
console.log(myNewArr2);

console.log("C", myArr);


