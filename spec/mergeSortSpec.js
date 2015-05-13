var mergeSort = require("../mergeSort.js");

describe('Merge', function(){
	it('should contain a function named merge that takes two arrays', function(){
		expect(mergeSort.merge([],[])).toEqual([]);
	});
});

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });
});

describe('Merge', function(){
	it('should merge two arrays of 5 indexes with unsorted values', function() {
		expect(mergeSort.merge([6,4,9,5,1],[11,7,2,13,3])).toEqual([6,4,9,5,1,11,7,2,13,3]);
	});
});

describe('Merge Sort', function() {
  it('should sort an array', function() {
     expect(mergeSort.mergeSort([2,1])).toEqual([1,2]);
  });
});

describe('Merge Sort', function(){
	it('should sort a larger array with an even number of indexes', function(){
		expect(mergeSort.mergeSort([5,4,7,8,9,10,33,55,1,0,67,99])).toEqual([0,1,4,5,7,8,9,10,33,55,67,99]);
	});
	it('should sort a larger array with an odd number of indexes', function(){
		expect(mergeSort.mergeSort([5,4,7,8,9,10,33,55,1,0,67,99,3])).toEqual([0,1,3,4,5,7,8,9,10,33,55,67,99,]);
	});
});

