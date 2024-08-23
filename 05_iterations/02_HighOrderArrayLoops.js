const arr = [1,2,3,4,5]

// forof loop
for (const num of arr) {
    // console.log(num);
}

const map = new Map()

map.set("a",1)
map.set("b",2)
map.set("c",3)

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ' : ', value);
    
}


const MyObject = {
    game1: "PUBG",
    game2: "Subway Surfers"
}

// for (const [key,value] of Object.entries(MyObject)) {
//     console.log(key,value);
// }
