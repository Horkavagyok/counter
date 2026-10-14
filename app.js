let counter = 0;
const display = document.getElementById("counter");

document.getElementById("kisminusz").onclick = () => display.textContent = --counter;
document.getElementById("kisplussz").onclick = () => display.textContent = ++counter;
document.getElementById("nagyminusz").onclick = () => display.textContent = counter -= 10;
document.getElementById("nagyplussz").onclick = () => display.textContent = counter += 10;