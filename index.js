let countEl = document.getElementById("count-el");
let welcomEl = document.getElementById("welcome-el");
let saveEl = document.getElementById("save-el");
console.log(saveEl);

let count = 0;
let named = "Clinton";
let Greeting = "Hi!, Welcome ";

let messaged = Greeting + named;

messaged += "😊";
console.log(messaged);
welcomEl.innerText = messaged;

function increment() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  count = 0
  countEl.textContent = count
}
save();
