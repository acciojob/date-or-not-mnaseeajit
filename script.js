var isDate = function (input) {
  // Check if the input is a valid date
  const dateObject = new Date(input);
  
  // Check if the dateObject is a valid date and input is not "Invalid Date"
  if (!isNaN(dateObject.getTime()) && input !== "Invalid Date") {
    return true;
  } else { 
    return false;
  }
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

