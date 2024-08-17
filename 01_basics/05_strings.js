const name = "Devesh"

const currentRepo = 9

// console.log(name + currentRepo + " value");  // old version

// new version
console.log(`Hi! My name is ${name} & my total git repo is ${currentRepo}`);

const gameName = new String('dkkaidkdie')

// console.log(gameName[0]);
// console.log(gameName[4]);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0,5)
// console.log(newString);

// const sliceMethod = gameName.slice(-8,7)
// console.log(sliceMethod);

const trimMethod = "    chotu     "
console.log(trimMethod.trim());

const url = "https://devesh.com/devesh%10singhal"
console.log(url.replace('%10','-'));

const str = "The quick brown fox jumps over the lazy dog."  // put substring into an array & return array
console.log(str.split(' '))

