function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const x = 6;
  const index = binarySearch(arr, x);
  
  if (index === -1) {
    console.log(`Element ${x} not found in the array`);
  } else {
    console.log(`Element ${x} found at index ${index}`);
  }
  