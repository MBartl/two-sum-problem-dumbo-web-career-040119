function bruteForceTwoSum(arr, sum) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
};

function binarySearchTwoSum(arr, sum) {
  let pairs = [];
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i]+arr[j] === sum)
        pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}

function binaryMatch(arr, sum) {
  let pairs = [];
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let copy = arr;
    const target = copy.splice(i, 1);
    if (copy.includes(sum-target)) {
      return true;
    };
  }
  return false;
}

function hashTwoSum(arr, sum) {
  const hashPairs = {};
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    let thisNum = arr[i];
    hashPairs[i] = thisNum;
  };

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    a.sort();
    b.sort();

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  let unique = true

  for (let i = 0; i < arr.length; i++) {
    let diff = sum - arr[i]

    if (Object.values(hashPairs).includes(diff)) {
      let copy = Object.values(hashPairs)
      copy.splice(i, 1, 'current target')

      let key = copy.indexOf(diff)
      let potentialPair = [arr[i], hashPairs[key]].sort()

      for (let i = 0; i < pairs.length; i++) {
        if (arraysEqual(pairs[i], potentialPair)) unique = false;
      }

      if (unique) pairs.push(potentialPair)
    };
  };
  
  return pairs;
}
