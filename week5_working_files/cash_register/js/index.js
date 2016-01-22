//store the running total in this variable
var total = 0;

//bind the 'enter' function to the submit event on the <input>
$('#entry').submit(enter);

function enter() {
  //get the latest inputted value

  //convert into a floating point number

  //run the number through our currency formatter function to get a currency string

  //adding an HTML .entry to the #entries container

  //update the running total variable

  //update the displayed total text

  //reset the input field to empty


  //this is required to stop the page redirecting
  return false;
}

//this function returns a value
//it does the following:
// - receives a number
// - converts to a floating number if it is a string
// - limits the number of digits after the decimal point to two and converts to a string
// - concatenates it to another string starting with a '$' symbol
// - returns the string
function currencyFormat(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '$' + currency;
  return currency;
}
