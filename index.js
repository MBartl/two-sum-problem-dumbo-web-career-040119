function bruteForceTwoSum(array, sum) {
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        pairs.push([array[i], array[j]]);
      }
    }
  }
  return pairs;
};

function binarySearchTwoSum(array, sum) {
  let pairs = [];
  array.sort();
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i]+array[j] === sum)
        pairs.push([array[i], array[j]]);
    }
  }
  return pairs;
}

function binaryMatch(array, sum) {
  let pairs = [];
  array.sort();
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i]+array[j] === sum)
        return true;
    }
  }
  return false;
}

function hashTwoSum(array, sum) {
  let pairs = [];
  array.sort();
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i]+array[j] === sum)
        pairs.push([array[i], array[j]]);
    }
  }
  return pairs;
}
