
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.




	exports.merge = function(left,right){
		var leftI = 0;
		var rightI = 0;
		var results =[];
		while(leftI < left.length || rightI < right.length){
			if (leftI === left.length){
				results.push(right[rightI]);
					rightI++;
				} else if (rightI === right.length || left[leftI] <= right[rightI]){
					results.push(left[leftI]);
					leftI++;
				}else{
					results.push(right[rightI]);
					rightI++;
				}
			}
 	   
			return results;
	  };

// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.

/*function sort(arr){
	//base case
		if(arr.legth<2){
			return arr;
		} else {
			var mid = Math.floor(arr.length / 2);
			var left = arr.slice(0, mid);
			var right = arr.slive(mid, arr.length);
			var sortedL = sort(left);
			var sortedR = sort(right);
				return merge (sortedL, sortedR);
	}
}

*/


	exports.mergeSort = function(arr){
	    
	    if (arr.length < 2){
	        return arr;
	    } else {
	    var middleArr = Math.floor(arr.length / 2);
	    var leftArr   = arr.slice(0, middleArr);
	    var rightArr  = arr.slice(middleArr, arr.length);
	    var sortedL = exports.mergeSort(leftArr);
	    var sortedR = exports.mergeSort(rightArr);
	    return exports.merge(sortedL, sortedR);
	    }
	};


//console.log(exports.merge([6,4,9,5,1],[11,7,2,13,3]));