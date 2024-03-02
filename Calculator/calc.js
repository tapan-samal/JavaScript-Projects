const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let currentExpression = "";

const buttonArray = Array.from(buttons);

// Function to handle digit and operator button clicks
function handleButtonClick(value) {
  currentExpression += value;
  input.value = currentExpression;
}

// Function to handle the '=' button click
function handleEqualsButtonClick() {
  try {
    currentExpression = eval(currentExpression);
    input.value = currentExpression;
  } catch (error) {
    input.value = "Error";
    currentExpression = "";
  }
}

// Function to handle the 'AC' button click
function handleClearButtonClick() {
  currentExpression = "";
  input.value = currentExpression;
}

// Function to handle the 'DEL' button click
function handleDeleteButtonClick() {
  currentExpression = currentExpression.slice(0, -1);
  input.value = currentExpression;
}

// Function to handle the '%' button click
function handlePercentageButtonClick() {
  try {
    currentExpression = eval(currentExpression) / 100;
    input.value = currentExpression;
  } catch (error) {
    input.value = "Error";
    currentExpression = "";
  }
}

// Iterate over each button in the array and add event listeners
buttonArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerHTML;

    switch (buttonValue) {
      case "=":
        handleEqualsButtonClick();
        break;
      case "AC":
        handleClearButtonClick();
        break;
      case "DEL":
        handleDeleteButtonClick();
        break;
      case "%":
        handlePercentageButtonClick();
        break;
      default:
        handleButtonClick(buttonValue);
        break;
    }
  });
});
