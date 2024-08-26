let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

// Initialize the memory variable
let memory = 0;

// Get references to the display and memory buttons
const display = document.getElementById("display");
const btnMplus = document.getElementById("btnMplus");
const btnMminus = document.getElementById("btnMminus");

// Add event listeners to the memory buttons
btnMplus.addEventListener("click", addToMemory);
btnMminus.addEventListener("click", subtractFromMemory);

// Function to add the current value to memory
function addToMemory() {
  const currentValue = parseFloat(display.value);
  memory += currentValue;
}

// Function to subtract the current value from memory
function subtractFromMemory() {
  const currentValue = parseFloat(display.value);
  memory -= currentValue;
}
