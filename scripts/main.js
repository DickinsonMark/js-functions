 // #1
function sum(firstnum, secondnum) {
  console.log(firstnum + secondnum);
};

sum(3, 5); // 8

 // #2
 function isEqual(argument1, argument2) {
  if (argument1 === argument2) {
    console.log(true);
  } else {
    console.log(false);
  };
};

isEqual(1, 1) // true
isEqual(1, 2) // false
isEqual(1, "1") // false

 // #3
function discountPercentage(amount, discount) {
  if (discount <= 0 || discount >= 100){
    console.log("WARNING UNNACCEPTABLE DISCOUNT");
  } else {
    var decimal = discount / 100;
    console.log("discount is: $" + (amount * decimal));
    var total =  amount -(amount * decimal);
    console.log("total: $" + total);
  }
};

discountPercentage(100, 15); //discount is: $15  total is: $85

// #4
function stringCapitalize(string) {
  var result = ""
  for (i = 0; i < string.length; i++) {
    if (string[i-1] === " " || i === 0) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
};

console.log(stringCapitalize("hello how are you?")); // "Hello How Are You?"

// #5
function evenNumbers(num) {
  if (num <= 100 && num >= 0){
    for (i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  } else {
    console.log("need a number between 0 and 100!");
  }
}

evenNumbers(10); // 0 2 4 6 8 10
evenNumbers(10); // "need a number between 0 and 100!"

// #6
function isDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  };
};

isDivisible(51, 8); // false
isDivisible(36, 12); // true

// #7 Bonus!
function oddNumbers(numb){
  numb = parseInt(numb);
  if (numb.isInteger()) {
    if (numb < 0 || numb > 100) {
      return "number needs to be between 0 - 100";
    } else {
      if (numb < 40) {
        for (i = 0; i <= 40; i++) {
          if (i % 2 !== 0) {
            console.log(i);
          }
        };
      } else {
        for (j = 40; j <= numb; j++) {
          if (j % 2 !== 0){
            console.log(j)
          };
        };
      };
    };
  } else {
    return "input a number!";
  };
};

oddNumbers(38); // 1 3 5 ... 37 39
oddNumbers(68); // 41 43 45 ... 65 67
