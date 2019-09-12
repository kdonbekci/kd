const Counter = (array) => {
    const count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
  }

export default Counter;