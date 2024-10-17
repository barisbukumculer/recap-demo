const array1 = [1, 2, 3, 4];

const squareArray = [];

array1.forEach((number) => {
  squareArray.push(number * number);
});

console.log(squareArray);

//map

const arrayMap = array1.map((number) => number * 3);

console.log(arrayMap);

//filter

const arrayFilter = array1.filter((number) => number > 2);

console.log(arrayFilter);

//reduce

const arrayReduce = array1.reduce((acc, number) => {
  return acc + number;
}, 10);

console.log(arrayReduce);
