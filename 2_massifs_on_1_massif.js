//обход массива циклом
function zip(a, b) {
	var arr = [];
    for(let index = 0; index < a.length; index++) {
    	arr.push(a[index]);
        arr.push(b[index]);
    }
    return arr;
}