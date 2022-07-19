function frequencyCounter(arr) {
  //check if array is empty
  if (arr.length === 0) {
    return 0;
  }
  //define a variable to store the frequency of each element
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] == undefined) {
      map[arr[i]] = 1;
    } else map[arr[i]] += 1;
  }
  return map;
}
