const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

let calculation = [];
let accumulativeCalculation = "";

function calculate(button) {
  const value = button.textContent;

  if (value === "CLEAR") {
    calculation = [];
    accumulativeCalculation = "";
    screenDisplay.textContent = ".";
    return;
  } else if (value === "=") {
    try {
      accumulativeCalculation = eval(accumulativeCalculation);
      screenDisplay.textContent = accumulativeCalculation;
    } catch (error) {
      screenDisplay.textContent = "Error";
    }
    return;
  }

  calculation.push(value);
  accumulativeCalculation += value;
  screenDisplay.textContent = accumulativeCalculation;

  console.log(calculation);
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
