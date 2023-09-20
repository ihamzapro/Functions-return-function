/* <---------------------------Function returning function ----------------------------> */

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hi");

greetHey("Hamza the fast bowler. How are you?");
greetHey("Talha");
greetHey("Umar");
greetHey("Babar");

/* Do with Arrow fuction*/

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Pakistan");
