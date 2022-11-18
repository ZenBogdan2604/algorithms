//минимальный массив
var elements =  [1, -2, 3, 4, 6];

//let min = elements[0]
let min = NaN


for(let i = 0; i < elements.length; i++) {
    if(elements[i] < min){
        min = elements[i]
    }
}
console.log(min)