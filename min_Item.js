//нахождение минимального массива
var elements =  [1, -2, 3, 4, 6];

//let min = elements[0]
let min = NaN


for(let i = 0; i < elements.length; i++) {
    if(elements[i] < min){
        min = elements[i]
    }
}
console.log(min)

function findMin(elements) {
    let min = elements[0];
    for (let num of elements) {
        if (min > num) {
            min = num;
        }
    }
    return min;
}

console.log(findMin(elements))