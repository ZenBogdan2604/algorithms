// скользящее среднее
function movingAverage(array, windowSize) {
    var result = [];
    array_slice = array.slice(0, windowSize);
    current_sum = array_slice.reduce(function(sum, elem) {
	    return sum + elem;
    }, 0);

    result.push(current_sum / windowSize);
    
    for (let i = 0; i < array.length-windowSize; i++){
		current_sum -= array[i];
        current_sum += array[i+windowSize];
        current_avg = current_sum / windowSize;
        result.push(current_avg);
        console.log(result)
}
    return result;
}

var array = [1, 2, 3, 4, 5, 6, 7];
windowSize = 4;
console.log(movingAverage(array, windowSize))

/*function movingAverage(array, windowSize){
    var result = [];
    
    for (let begin_index = 0; begin_index < array.length-windowSize; begin_index++){
		end_index = begin_index + windowSize;
        current_sum = 0;
        for(let v of array.slice(begin_index, end_index)){
            current_sum += v;
        }
        current_avg = current_sum / windowSize;
        result.push(current_avg)
        
    }
    return result;
}*/

