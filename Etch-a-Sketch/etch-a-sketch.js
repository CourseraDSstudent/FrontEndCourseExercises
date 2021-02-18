let container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  container.appendChild(div);
  div.style.cssText =
    "height: 25px; background-color: white; border: 1px solid black;";
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = 'black';
  });
}

let button = document.querySelector("#clearGrid");
button.addEventListener("click", clearGrid);

function clearGrid() {
  container.innerHTML = "";
  let size = prompt("Please enter how many (no more than 100) squares you want to have each side:");
  if (size < 101) {
    let numSquares = size * size;
    let height = [399 - 2 * size] / size;

    for (let i = 0; i < numSquares; i++) {
      let div = document.createElement("div");
      container.appendChild(div);
      div.style.cssText = `height: ${height}px; background-color: white; border: 1px solid black;`;
      container.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
      container.style["width"] = `400px`;
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = 'black';
      });
    }
  } else {
    clearGrid();
  }
}