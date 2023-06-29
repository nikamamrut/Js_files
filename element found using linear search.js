function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return i;
      }
    }
    return -1;
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const x = 6;
  const index = linearSearch(arr, x);
  
  if (index === -1) {
    console.log(`Element ${x} not found in the array`);
  } else {
    console.log(`Element ${x} found at index ${index}`);
  }
  