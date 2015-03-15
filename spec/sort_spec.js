var bubbleSort = require('../sort.js');

describe('Bubble Sort', function () {

    it('should sort an array of numbers', function () {
      expect([1,2]).toEqual([1,2])
      expect(bubbleSort([66,22,67,34])).toEqual([22,34,66,67]);
    });
    it('should return an array of a single number', function () {
      expect(bubbleSort([1])).toEqual([1]);
    });
});
