function bruteForceTwoSum(array, sum) {
  let twoSums = [];
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    for (let n = i + 1; n < array.length; n++) {
      let secondNum = array[n];
      if (firstNum + secondNum === sum) {
        twoSums.push([firstNum, secondNum]);
      }
    }
  }
  return twoSums;
}

function binarySearchTwoSum(array, sum) {
  let sortedArray = mergeSort(array);
  let twoSums = [];
  for (let i = 0; i < sortedArray.length; i++) {
    let difference = sum - sortedArray[i];
    let binaryIndex = binarySearch(sortedArray, difference);
    if (binaryIndex) {
      twoSums.push([sortedArray[i], sortedArray[binaryIndex]]);
    }
  }
  return removeDuplicates(twoSums);
}

//Binary Search - Sort Array
function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

function merge(firstArray, secondArray) {
  let sortedArray = [];
  while (firstArray.length > 0 && secondArray.length > 0) {
    let min = findMinAndRemove(firstArray, secondArray);
    sortedArray.push(min);
  }
  return sortedArray.concat(firstArray).concat(secondArray);
}

function findMinAndRemove(firstArray, secondArray) {
  let firstMin = firstArray[0];
  let secondMin = secondArray[0];
  if (firstMin < secondMin) {
    return firstArray.shift();
  } else {
    return secondArray.shift();
  }
}

//Binary Search - search for match
function binarySearch(sortedArray, target) {
  let min = 0;
  let max = sortedArray.length - 1;
  let guess;
  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (sortedArray[guess] === target) {
      return guess;
    } else {
      if (sortedArray[guess] < target) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return false;
}

//not used in binarySearchTwoSum, returns true instead of guess to pass test
function binaryMatch(sortedArray, target) {
  let min = 0;
  let max = sortedArray.length - 1;
  let guess;
  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (sortedArray[guess] === target) {
      return true;
    } else {
      if (sortedArray[guess] < target) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return false;
}

//Binary Search - remove duplicates
function removeDuplicates(array) {
  let seen = [];
  let unique = [];
  array.filter(element => {
    if (seen.indexOf(element.toString()) < 0) {
      seen.push(element.toString());
      unique.push(element);
    }
  });
  return unique;
}

function hashTwoSum(array, sum) {
  let twoSums = [];
  let hash = {};
  //hash will be formatted {difference: value}
  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]] !== undefined) {
      twoSums.push([hash[array[i]], array[i]]);
    } else {
      hash[sum - array[i]] = array[i];
    }
  }
  return twoSums;
}
