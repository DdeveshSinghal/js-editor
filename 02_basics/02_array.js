const marvel_heros = ["thor","Ironmen","spiderman"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_newHeros = [...marvel_heros, ...dc_heros]      // spread
// console.log(all_newHeros);


/*
    In these problem situation we use flat() method to add in one array.
*/
const another_array = [1,2,3,[4,5,6],7,8,[2,4]]     
const flat_array = another_array.flat(Infinity)     
console.log(flat_array);

