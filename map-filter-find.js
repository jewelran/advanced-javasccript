const numbers= [3,4,5,6,7,8,8];
const output=[];
for(let i = 0; i < numbers.length;i++){
    const elements = numbers[i];
    const result = elements  * elements;
    output.push(result);
}
console.log(output);
// -------------------------
numbers.map(function(elements,  index,array){
    console.log(elements, index,array)
})
// -------------------------------------
const result = numbers.map(function(elements){
    return  elements* elements;
})

console.log(result)
// --------------------------------------
const result =numbers.map(x => x*x)

console.log(result)
// -----------------------------------------

const result = numbers.filter(x => x > 5);
console.log(result)
// ------------------------------------------
const result = numbers.filter(x => x > 5);
console.log(result)
// -------------------------------------------
const result = numbers.find(x => x > 5);
console.log(result)