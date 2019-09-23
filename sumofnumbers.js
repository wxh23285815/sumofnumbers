const testNum = [1, 2, 3, 4];

console.log(testNum);

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNum));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNum));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
  }
}

console.log(sumRecursion(testNum));

function sumTheSimpleWay(nums) {
  const sum = _.reduce(nums, function (total, num) { return total + num; }, 0);
  return sum;
}

console.log(sumTheSimpleWay(testNum));