//возвращает два числа
var array = [1, 1, -9, -7, 3, -6];
targetSum = 4;

function twoSum (array, targetSum) {
    for (let i = 0; i < array.length; i++) {
    	for (let j = i + 1; j < array.length; j++) {
      		if (array[i] + array[j] == targetSum) {
        		return String(array[i]+""+ array[j]);
      		};
        };
  	};
    return NaN;  
};
//возвращает два числа в массиве

function twoSum (array, targetSum) {
    for (let i = 0; i < array.length; i++) {
    	for (let j = i + 1; j < array.length; j++) {
      		if (array[i] + array[j] == targetSum) {
        		return [array[i], array[j]];
      		};
        };
  	};
    return NaN;  
};