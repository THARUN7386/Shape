let button = document.getElementById("button");
var numberInShape = 1;
var oldvalue = 0;

button.onclick = () => {
  let n = document.getElementById("number").value;
  const Circle = document.getElementById("Circle");
  const Square = document.getElementById("Square");
  const Rectangle = document.getElementById("Rectangle");
  const box = document.getElementById("box");

  n = Number(n) + Number(oldvalue);

  for (let j = numberInShape; j <= n; j++) {
    let shape = document.createElement("div");
    shape.innerHTML += numberInShape;
    if (Circle.checked) shape.classList.add("Circle");
    else if (Square.checked) shape.classList.add("Square");
    else if (Rectangle.checked) shape.classList.add("Rectangle");
    else document.write("Invalid Input");

    numberInShape++;
    box.appendChild(shape);
    oldvalue = document.getElementById("box").lastElementChild.innerHTML;
  }
};