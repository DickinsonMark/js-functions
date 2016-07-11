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
  var result =
  if
