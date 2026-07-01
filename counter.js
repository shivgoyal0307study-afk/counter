let count = 0;
let counter = document.getElementById("counter");
let entries = document.getElementById("entries");

function increment() {
    count += 1;
    counter.textContent = count;
}

function save() {
    let entry = count + " - ";
    entries.textContent += entry;
    count = 0;
    counter.textContent = 0;
}