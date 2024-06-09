function check() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;

  // Convert the values to numbers for comparison
  let num1 = parseFloat(value1);
  let num2 = parseFloat(value2);

  // Perform the comparison
  let result;

  if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) {
      result = `TRUE First value: ${value1} is (>) greater than the second value: ${value2}`;
    } else if (num1 < num2) {
      result = `FALSE First value: ${value1} is (<) less than the second value: ${value2}`;
    } else if (num1 === num2) {
      result = `First value: ${value1} is (strictly =) equal to the second value: ${value2}`;
      // Additional comparison
      result += `\n\n Additional comparison`;
      if (num1 >= num2) {
        result += `\n TRUE First value: ${value1} is (>=) greater than or equal to the second value: ${value2}`;
      } else if (num1 <= num2) {
        result += `\n TURE First value: ${value1} is (<=) less than or equal to the second value: ${value2}`;
      }
    }
  } else {
    result = "Please enter valid numbers";
  }
  document.getElementById("result").innerText = result;
}
