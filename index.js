function bruteForceTwoSum(arr, sum) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (current + arr[j] === sum) {
        pairs.push([current, arr[j]]);
      }
    }
  }

  return pairs;
}

function binarySearchTwoSum(arr, sum) {
  const sortedArray = mergeSort(arr);
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    let target = sum - arr[i];
    let partner = binarySearch(arr, target);

    if (partner) {
      pairs.push([arr[i], arr[partner]]);
    }
  }

  return removeDuplicates(pairs);
}

function binaryMatch(arr, target) {
  const found = binarySearch(arr, target);

  return !!found;
}

function hashTwoSum(arr, sum) {
  let pairs = [];
  let hashValues = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashValues[arr[i]]) {
      pairs.push([hashValues[arr[i]], arr[i]]);
    } else {
      hashValues[sum - arr[i]] = arr[i];
    }
  }

  return pairs;
}

// helpers
function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const guess = Math.floor((min + max) / 2);

    if (arr[guess] < target) {
      min = guess + 1;
    } else if (arr[guess] > target) {
      max = guess - 1;
    } else {
      return guess;
    }
  }

  return false;
}

function mergeSort(arr) {
  const midpoint = arr.length / 2;
  const firstHalf = arr.slice(0, midpoint);
  const secondHalf = arr.slice(midpoint, arr.length);

  if (arr.length < 2) {
    return arr;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

function merge(arr1, arr2) {
  let sortedArr = [];

  while (arr1.length !== 0 && arr2.length !== 0) {
    const min = findAndRemoveMin(arr1, arr2);
    sortedArr.push(min);
  }

  return sortedArr.concat(arr1).concat(arr2);
}

function findAndRemoveMin(arr1, arr2) {
  let min1 = arr1[0];
  let min2 = arr2[0];

  if (min1 < min2) {
    arr1.shift();
    return min1;
  } else {
    arr2.shift();
    return min2;
  }
}

function removeDuplicates(arr) {
  let seen = [];
  let unique = [];

  arr.filter(item => {
    if (seen.indexOf(item.toString()) < 0) {
      seen.push(item.toString());
      unique.push(item);
    }
  });

  return unique;
}
