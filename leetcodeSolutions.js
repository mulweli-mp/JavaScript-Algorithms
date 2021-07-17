const turingTest = () => {
  const ops = ["5", "2", "C", "D", "+"];
  const ops2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
  const op3 = ["1"];

  let newOPS = [];
  ops.forEach((item) => {
    if (item == "C") {
      newOPS.pop();
    } else if (item == "D") {
      let lastItem = newOPS[newOPS.length - 1];
      newOPS.push(2 * parseInt(lastItem));
    } else if (item == "+") {
      let lastItem = newOPS[newOPS.length - 1];
      let seconLlastItem = newOPS[newOPS.length - 2];
      let sumValue = parseInt(lastItem) + parseInt(seconLlastItem);
      newOPS.push(parseInt(sumValue));
    } else {
      //It's an interger
      newOPS.push(parseInt(item));
    }
  });

  const result = newOPS.reduce((a, b) => a + b, 0);
  return result;
};

//https://leetcode.com/problems/two-sum/submissions/
var twoSum1 = function (nums, target) {
  console.time("LoopTime");
  let result = false;
  nums.forEach((number, index) => {
    nums.forEach((secondNumber, index2) => {
      if (number + secondNumber == target) {
        if (!result) {
          if (index != index2) {
            result = [index, index2];
          }
        }
      }
    });
  });
  console.timeEnd("LoopTime");
  return result;
};

var forLoopsPractice = function (nums, target) {
  console.time("LoopTime");
  let result = false;
  // for (number of nums) {
  //   console.log(number);
  // }

  // nums.forEach((number) => {
  //   console.log(number);
  // });

  // for (let i = 0; i < nums.length; i++) {
  //   console.log(nums[i]);
  // }

  //result = nums.map((num) => "Winner " + num);

  // result = nums.filter((num) => num >= 3);

  // result = nums.reduce((acc, element) => {
  //   console.log(acc, element);
  //   return acc + element;
  // }, target);

  console.timeEnd("LoopTime");

  return result;
};

//https://leetcode.com/problems/two-sum/submissions/
var twoSum = function (nums, target) {
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (nums.includes(complement) && nums.indexOf(complement) != i) {
      result = [nums.indexOf(complement), i];
      break;
    }
  }
  return result;
};

//https://leetcode.com/problems/add-two-numbers/
var addTwoNumbers1 = function (l1, l2) {
  let firstNumber = ``;
  for (let i = l1.length - 1; i >= 0; i--) {
    firstNumber = firstNumber + l1[i];
  }

  let secondNumber = ``;
  for (let i = l2.length - 1; i >= 0; i--) {
    secondNumber = secondNumber + l2[i];
  }

  let sumValue = parseInt(firstNumber) + parseInt(secondNumber);
  sumValue = `${sumValue}`;

  let sumArray = [];

  for (num of sumValue) {
    sumArray.push(num);
  }

  let result = [];
  for (let i = sumArray.length - 1; i >= 0; i--) {
    result.push(parseInt(sumArray[i]));
  }

  return result;
};

//https://leetcode.com/problems/add-two-numbers/
const addTwoNumbers = (l1, l2) => {
  const intRes = +l1.reverse().join("") + +l2.reverse().join("");
  const arr = intRes.toString().split("");
  return arr.reverse().map(Number);
};

//https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
  let stringArray = s.split("");
  let longestLength = s == "" ? 0 : 1;

  stringArray.forEach((letter, index) => {
    //longestArray.push(letter)
    let variablesToIterate = s.slice(index);
    let subArray = [];
    for (let i = 0; i < variablesToIterate.length; i++) {
      let character = variablesToIterate[i];
      if (!subArray.includes(character)) {
        subArray.push(character);
        if (i + 1 == variablesToIterate.length) {
          longestLength =
            subArray.length >= longestLength ? subArray.length : longestLength;
        }
      } else {
        longestLength =
          subArray.length >= longestLength ? subArray.length : longestLength;
        break;
      }
    }
  });

  return longestLength;
};

//https://leetcode.com/problems/median-of-two-sorted-arrays/
var findMedianSortedArrays = function (nums1, nums2) {
  let array = [...nums1, ...nums2].sort((a, b) => a - b);
  let arrayMidian = array.length / 2;

  if (Number.isInteger(arrayMidian)) {
    let sumValue = array[arrayMidian - 1] + array[arrayMidian];
    return sumValue / 2;
  } else {
    return array[parseInt(arrayMidian)];
  }
};
