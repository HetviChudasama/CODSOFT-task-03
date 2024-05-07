let result = document.getElementById("result");

function calculate(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function delChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}