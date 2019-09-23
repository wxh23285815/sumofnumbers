
// eslint-disable-next-line no-unused-vars
function sumFor(data) {
  let sum = 0;
  let i;
  for (i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

// eslint-disable-next-line no-unused-vars
function sumWhile(data) {
  let i = 0;
  let sum = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

// eslint-disable-next-line no-unused-vars
function sumRecursion(data) {
  return (data.length === 0) ? 0 : data[0] + sumRecursion(data.slice(1));
}

// eslint-disable-next-line no-unused-vars
function sumTheSimpleWay(data) {
  const sum = _.reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0);
  return sum;
}
