// Immediately Invoked Function Expressions (IIFE)

/* why we are using IIFE?
    1. Avoiding Global Scope Pollution
    2. Data Privacy
*/

(function chai(){
    console.log('DB CONNECTED');
})();

/* ()() -> (function) (function call) */

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("rohit");
