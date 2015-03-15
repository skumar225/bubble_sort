function bubbleSort(arr){
// iterative
  var array_length = arr.length,
    swapped,
    swap;

  do {
    swapped = false;
    for(var i=0 ; i < array_length; i++) {
      if (arr[i] > arr[i+1]) {
        swap = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = swap;
        swapped = true;
      }
    }
  } while (swapped === true);

  return arr;
}

// do not touch this
module.exports = bubbleSort

