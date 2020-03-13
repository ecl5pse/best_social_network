const test = [
  1, 2, 3, 4, {
    test: {
      display () {},
      value: 54,
      items: [{}, 123, 345, 546]
    }
  }, 3, 4, 5, 65];



const [,,,,{test:[value]}] = test;

console.log(value);