// const user = new Object()       // singleton object 

// const user = {}


const userInfo = {
    email : "devesh@google.com",

    fullName: {
        userFullName: {
            firstName: "devesh",
            lastName: "singhal"
        }
    }
}

// console.log(userInfo.fullName.userFullName.lastName);

// Merge object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}     // using spread
// console.log(obj3);


/*
    Object de-structure and JSON API Intro
*/

const course = {
    courseName : "js in hindi",
    price: "999",
    courseInstructor: "devesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }