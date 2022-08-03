function DivideAndConquerBinarySearch(array, target) {
  //check if array is empty
  if (array.length === 0) {
    return 0;
  }
  //define variables for the left, right and middle pointers
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);

  //check if target is equal to the middle element
  while (array[middle] !== target && left <= right) {
    //check if target is less than the middle element
    if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    //update the middle pointer
    middle = Math.floor((left + right) / 2);
  }
  //check if target is equal to the middle element
  if (array[middle] === target) return middle;
  else return -1;
}
