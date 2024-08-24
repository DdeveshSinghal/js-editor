const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter()
// const newNums = myNums.filter((value) => value > 4)
// console.log(newNums);


// map()
// const newNums = myNums.map((value) => value + 10)
// console.log(newNums);


// const newNums = myNums.map((num) => num*10)
//                     .map((num) => num+1)
//                     .filter((num) => num >= 40)
// console.log(newNums);



// reduce()

const sum = myNums.reduce((acc,curr) => {
    return acc + curr
},0)
console.log(sum);
