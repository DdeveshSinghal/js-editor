// date

// let myDate = new Date()
// console.log(myDate);

// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreateDate = new Date(2002,0,17)      // format(YMD) to find the day with help of date. format (year,month,date) month starting from - 0
// console.log(myCreateDate.toDateString());

// let withTime = new Date(2002,0,17,9,30)
// console.log(withTime.toLocaleString());

// let myCreateDate = new Date("2002-01-17")
// console.log(myCreateDate.toLocaleString());

// let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreateDate.getTime());



let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long"
})