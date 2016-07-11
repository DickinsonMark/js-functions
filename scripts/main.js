 // #1
function sum(firstnum, secondnum) {
  console.log(firstnum + secondnum);
};
sum(3, 5)

 // #2
 function isEqual(argument1, argument2) {
  if (argument1 === argument2) {
    console.log(true);
  } else {
    console.log(false);
  };
};

 // #3
 function discountPercentage(amount, discount) {
  if (discount <= 0 || discount >= 100){
    console.log("WARNING UNNACCEPTABLE DISCOUNT");
  } else {
    var decimal = discount / 100;
    console.log("discount is: " amount * decimal);

    var total =  amount -(amount * decimal);
    console.log("total: $" + total);
  };
};

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

console.log(stringCapitalize("hello how are you?"));

// #5
function evenNumbers(num) {
  for (i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNumbers(10);
