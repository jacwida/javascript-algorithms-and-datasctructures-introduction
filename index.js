//problem solving techniqes

const charCount = function (str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
};

console.log(charCount('hello'));

//frequency counters

// a function

//naive solution for checking whether an array has the same in another array if squared
const same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
};

console.log(same([1, 2, 3], [1, 4, 9]));

//frequency counter pattern solution

function sameBetter(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

console.log(sameBetter([1, 2, 4], [1, 4, 16]));

//anagrams using frequency counter

const anagram = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequencyCounter = {};

  for (let str of str1) {
    frequencyCounter[str] = (frequencyCounter[str] || 0) + 1;
  }

  for (let str of str2) {
    if (!frequencyCounter[str]) {
      return false;
    } else {
      frequencyCounter[str] -= 1;
    }
  }

  return true;
};

console.log(anagram('caar', 'raca'));

//multiple pointers

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 3, 4, 6, 8, 9]));

// countunique values

function countUnique(arr) {
  let start = 0;
  let second = 1;

  while (second < arr.length) {
    if (arr[start] !== arr[second]) {
      start++;
      arr[start] = arr[second];
      second++;
    } else {
      second++;
    }
  }
  return start + 1;
}

console.log(countUnique([1, 1, 2, 2, 3, 4, 4, 7, 7, 7, 7]));

//using the for loop to do multiple pointers

function sumZeroForMethod(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(sumZeroForMethod([2, 2, 4, 6, 8, 8, 8]));
