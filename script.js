// ----------------------------------------
// Part 1: JavaScript Basics - Variables & Conditionals
// ----------------------------------------
let userName = prompt("Diana:");
let hour = new Date().getHours();
let greetingMessage;

// Conditional logic
if (hour < 12) {
    greetingMessage = `Good morning, ${Diana}!`;
} else if (hour < 18) {
    greetingMessage = `Good afternoon, ${Diana}!`;
} else {
    greetingMessage = `Good evening, ${Diana}!`;
}

// Output to webpage
document.getElementById("greeting").textContent = greetingMessage;

// ----------------------------------------
// Part 2: Functions - Reusability
// ----------------------------------------

// Function to calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function to format text
function formatText(text) {
    return text.toUpperCase();
}

console.log("Total price:", calculateTotal(50, 3)); // Example usage
console.log(formatText("hello world")); // Example usage

// ----------------------------------------
// Part 3: Loops - Repetition
// ----------------------------------------

// For Loop Example - Countdown
document.getElementById("startCountdown").addEventListener("click", function() {
    let countdownElement = document.getElementById("countdown");
    countdownElement.textContent = "";
    
    for (let i = 5; i >= 0; i--) {
        setTimeout(() => {
            countdownElement.textContent = i === 0 ? "Time's up!" : i;
        }, (5 - i) * 1000);
    }
});

// While Loop Example - Adding items dynamically
let items = ["Apple", "Banana", "Orange"];
let index = 0;

document.getElementById("addItem").addEventListener("click", function() {
    if (index < items.length) {
        let li = document.createElement("li");
        li.textContent = items[index];
        document.getElementById("itemList").appendChild(li);
        index++;
    } else {
        alert("No more items to add!");
    }
});

// ----------------------------------------
// Part 4: DOM Manipulation - Interactivity
// ----------------------------------------
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("greeting").textContent = formatText("Welcome to JavaScript!");
});
