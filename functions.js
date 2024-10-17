var hellofunc = function hello() {
  console.log("Hello World");
};

const hellofunc2 = () => {
  console.log("Hello World 2");
};

const hellofunc3 = (message) => {
  console.log(message);
};

var addition = (number1, number2) => {
  return number1 + number2;
};

let total = addition(3, 4);

hellofunc();
hellofunc2();
hellofunc3("Hello world");
console.log(total);
