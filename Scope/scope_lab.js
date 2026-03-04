//Global scope
var globalVar = "I'm a global variable";
let globalLet = "I am global, but scoped with let";
const globalConst = "I am global, but constant, cannot change";

{
    //Block Scope
    var blockVar ="Block-scoped Var";
    let blockLet = "Block-scloped Let";
    const blockConst = "Block-scoped constant";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
console.log(blockLet);

