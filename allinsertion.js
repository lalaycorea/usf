const insertionSort = require("./insertion")

describe('insertionSort', function () {
  it('should exist', function () {
    expect(typeof insertionSort).toBe('function', "did you remember to define the 'insertionSort' function?");
  });

  it('should sort numbers in ascending order', function () {
    expect(insertionSort([4, 20, 12, 10, 7, 9])).toEqual(
      [4, 7, 9, 10, 12, 20],
      "insertionSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]"
    );
    expect(insertionSort([0, -10, 7, 4])).toEqual(
      [-10, 0, 4, 7],
      "insertionSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
    );
    expect(insertionSort([1, 2, 3])).toEqual(
      [1, 2, 3],
      "insertionSort([1, 2, 3]) should equal [1, 2, 3]"
    );
    expect(insertionSort([])).toEqual(
      [],
      "insertionSort([]) should be []"
    );
    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    expect(insertionSort(nums)).toEqual(
      [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342],
      "insertionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
    );
  });

});
_______________________________________________________


const { merge, mergeSort } = require("./merge")

describe('merge', function () {
  it('should exist', function () {
    expect(typeof merge).toBe('function', "did you remember to define the 'merge' function?");
  });

  it('should be a pure function - in other words, it should not mutate the input arrays', function () {
    var arr1 = [1, 3, 4, 5]
    var arr2 = [2, 4, 6, 8];
    merge(arr1, arr2);
    expect(arr1).toEqual([1, 3, 4, 5], "The first input array should be unaffected by the merge")
    expect(arr2).toEqual([2, 4, 6, 8], "The second input array should be unaffected by the merge")
  });

  it('should merge sorted arrays ', function () {
    expect(merge([1, 3, 4, 5], [2, 4, 6, 8])).toEqual(
      [1, 2, 3, 4, 4, 5, 6, 8],
      "merge([1,3,4,5],[2,4,6,8]) should equal [1,2,3,4,4,5,6,8]"
    );

    expect(merge([-2, -1, 0, 4, 5, 6], [-3, -2, -1, 2, 3, 5, 7, 8])).toEqual(
      [-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8],
      "merge([-2,-1,0,4,5,6],[-3,-2,-1,2,3,5,7,8]) should equal [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]"
    );

    expect(merge([3, 4, 5], [1, 2])).toEqual(
      [1, 2, 3, 4, 5],
      "merge([3, 4, 5], [1, 2]) should equal [1, 2, 3, 4, 5]"
    )
  });
});

describe('mergeSort', function () {
  it('should exist', function () {
    expect(typeof mergeSort).toBe('function', "did you remember to define the 'mergeSort' function?");
  });

  it('should sort numbers in ascending order', function () {
    expect(mergeSort([4, 20, 12, 10, 7, 9])).toEqual(
      [4, 7, 9, 10, 12, 20],
      "mergeSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]"
    );
    expect(mergeSort([0, -10, 7, 4])).toEqual(
      [-10, 0, 4, 7],
      "mergeSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
    );
    expect(mergeSort([1, 2, 3])).toEqual(
      [1, 2, 3],
      "mergeSort([1, 2, 3]) should equal [1, 2, 3]"
    );
    expect(mergeSort([])).toEqual(
      [],
      "mergeSort([]) should be []"
    );
    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    expect(mergeSort(nums)).toEqual(
      [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342],
      "mergeSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
    );
  });

});


_________________________________________________________________________
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

module.exports = { pivot, quickSort };

_______________________________________________________


const { pivot, quickSort } = require("./quick")

describe('pivot', function () {
  function strLength(a, b) {
    return a.length - b.length
  }

  it('should exist', function () {
    expect(typeof pivot).toBe('function', "did you remember to define the 'pivot' function?");
  });

  it('should return the pivot index', function () {
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    expect(pivot(arr1)).toBe(3, "pivot(arr1) should be 3");
    expect(pivot(arr2)).toBe(4, "pivot(arr2) should be 4");
  });

  it('should mutate the array by placing values on either side of the pivot', function () {
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    pivot(arr1);
    pivot(arr2);

    expect(arr1.slice(0, 3).sort((a, b) => a - b)).toEqual(
      [2, 3, 4],
      "After calling pivot, 2, 3, and 4 should be to the left of 5 in arr1."
    );
    expect(arr1.slice(3).sort((a, b) => a - b)).toEqual(
      [5, 7, 8, 9, 10, 20],
      "After calling pivot, 6, 7, 9, 10, and 20 should be to the right of 5 in arr1."
    );
    expect(arr2.slice(0, 4).sort((a, b) => a - b)).toEqual(
      [0, 2, 4, 5],
      "After calling pivot, 0, 2, 4, and 5 should be to the left of 8 in arr2."
    );
    expect(arr2.slice(4).sort((a, b) => a - b)).toEqual(
      [8, 10, 11, 12, 13, 16],
      "After calling pivot, 10, 11, 12, 13, and 16 should be to the right of 8 in arr2."
    );
  });
});

describe('quicksort', function () {
  it('should exist', function () {
    expect(typeof quickSort).toBe('function', "did you remember to define the 'quickSort' function?");
  });

  it('should sort numbers in ascending order', function () {
    expect(quickSort([4, 20, 12, 10, 7, 9])).toEqual(
      [4, 7, 9, 10, 12, 20],
      "quickSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]"
    );
    expect(quickSort([0, -10, 7, 4])).toEqual(
      [-10, 0, 4, 7],
      "quickSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
    );
    expect(quickSort([1, 2, 3])).toEqual(
      [1, 2, 3],
      "quickSort([1, 2, 3]) should equal [1, 2, 3]"
    );
    expect(quickSort([])).toEqual(
      [],
      "quickSort([]) should be []"
    );
    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    expect(quickSort(nums)).toEqual(
      [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342],
      "quickSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
    );
  });
});

_______________________________________________________________________
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };




________________________________________________________________________________________________________

const { getDigit, digitCount, mostDigits, radixSort } = require("./radix")

describe("getDigit", function () {
  it("should exist", function () {
    expect(typeof getDigit).toBe(
      "function",
      "Did you remember to create a 'getDigit' function?"
    );
  });

  it("should return the correct digit for positive integers", function () {
    expect(getDigit(12345, 0)).toBe(5, "getDigit(12345, 0) should be 5.");
    expect(getDigit(12345, 1)).toBe(4, "getDigit(12345, 1) should be 4.");
    expect(getDigit(12345, 2)).toBe(3, "getDigit(12345, 2) should be 3.");
    expect(getDigit(12345, 3)).toBe(2, "getDigit(12345, 3) should be 2.");
    expect(getDigit(12345, 4)).toBe(1, "getDigit(12345, 4) should be 1.");
    expect(getDigit(12345, 5)).toBe(0, "getDigit(12345, 5) should be 0.");
    expect(getDigit(8987, 0)).toBe(7, "getDigit(8987, 0) should be 7.");
    expect(getDigit(8987, 1)).toBe(8, "getDigit(8987, 1) should be 8.");
    expect(getDigit(8987, 2)).toBe(9, "getDigit(8987, 2) should be 9.");
    expect(getDigit(8987, 3)).toBe(8, "getDigit(8987, 3) should be 8.");
    expect(getDigit(8987, 4)).toBe(0, "getDigit(8987, 4) should be 0.");
  });
});

describe("digitCount", function () {
  it("should exist", function () {
    expect(typeof digitCount).toBe(
      "function",
      "Did you remember to create a 'digitCount' function?"
    );
  });

  it("should return the correct count for positive integers", function () {
    expect(digitCount(1)).toBe(1, "digitCount(1) should be 1.");
    expect(digitCount(25)).toBe(2, "digitCount(25) should be 2.");
    expect(digitCount(314)).toBe(3, "digitCount(314) should be 3.");
    expect(digitCount(9)).toBe(1, "digitCount(9) should be 1.");
    expect(digitCount(77777)).toBe(5, "digitCount(77777) should be 5.");
    expect(digitCount(1234)).toBe(4, "digitCount(1234) should be 4.");
  });
});

describe("mostDigits", function () {
  it("should exist", function () {
    expect(typeof mostDigits).toBe(
      "function",
      "Did you remember to create a 'mostDigits' function?"
    );
  });

  it("should return the correct count for arrays of positive integers", function () {
    expect(mostDigits([1, 9, 10, 100, 99])).toBe(
      3,
      "mostDigits([1, 9, 10, 100, 99]) should be 3."
    );
    expect(mostDigits([100, 1010, 1, 500])).toBe(
      4,
      "mostDigits([100, 1010, 1, 500]) should be 4."
    );
    expect(mostDigits([0, 100000, 400, 12, 8])).toBe(
      6,
      "mostDigits(mostDigits([0, 100000, 400, 12, 8])) should be 6."
    );
  });

  it("should return the correct count for empty arrays", function () {
    expect(mostDigits([])).toBe(0, "mostDigits([]) should be 0.");
  });
});

describe("radixSort", function () {
  it("should exist", function () {
    expect(typeof radixSort).toBe(
      "function",
      "Did you remember to create a 'radixSort' function?"
    );
  });

  it("should sort arrays of numbers", function () {
    expect(radixSort([8, 6, 1, 12])).toEqual(
      [1, 6, 8, 12],
      "radixSort([8, 6, 1, 12]) should equal [1, 6, 8, 12]."
    ); //
    expect(radixSort([10, 100, 1, 1000, 10000000])).toEqual(
      [1, 10, 100, 1000, 10000000],
      "radixSort([10, 100, 1, 1000, 10000000]) should equal [1, 10, 100, 1000, 10000000]."
    ); //
    expect(
      radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])
    ).toEqual(
      [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637],
      "radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]) should equal [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]."
    );
    //
  });
});
____________________________________________________________________________________

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
_____________________________________________________________________________

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

module.exports = selectionSort;


