export const add = (x, y) => {
  return x + y;
};

export const substract = (x, y) => {
  return x - y;
};

export const multiply = (x, y) => {
  return x * y;
};

export const divide = (x, y) => {
  return x / y;
};

export const pow = (x, y) => {
  let value = x;
  for (var i = 0; i < y - 1; i++) {
    value *= x;
  }
  return value;
};

export const sqrt = (x) => {
  const square = (n, i, j) => {
    let mid = (i + j) / 2;
    let mul = mid * mid;
    if (mul === n || Math.abs(mul - n) < 0.00001) {
      return mid;
    } else if (mul < n) {
      return square(n, mid, j);
    } else {
      return square(n, i, mid);
    }
  };
  let i = 1;
  const found = false;
  while (!found) {
    if (i * i === x) {
      return i;
    } else if (i * i > x) {
      let value = square(x, i - 1, i);
      return value;
    }
    i++;
  }
};
