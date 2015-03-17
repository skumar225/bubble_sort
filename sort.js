function bubbleSort(array) {
    var n = array.length;
    var k;
    for (var m = n; m >= 0; m--) {
        for (var i = 0; i < m-1; i++) {
            k = i +1;
            if (array[i] > array[k]) {
                swapNumbers(i, k, array);
            }
        }
        return array;
    }
}

function swapNumbers (i, k, array) {

 var temp;
 temp = array[i];
 array[i] = array[k];
 array[k] = temp;
}