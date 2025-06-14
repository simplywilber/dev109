let clearBtn = document.getElementById("clearBtn");
let colorPicker = document.getElementById("colorPicker");
let sizePicker = document.getElementById("sizePicker");

clearBtn.addEventListener("click", function(event) {
  let dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.remove());
  event.stopPropagation();
});

document.body.addEventListener("click", function(event) {

  // Avoids drawing dots on the button or inputs
  if (event.target.tagName === "BUTTON" || event.target.tagName === "INPUT" || event.target.tagName === "LABEL") return;

  let dot = document.createElement("div");
  dot.className = "dot";

  let size = parseInt(sizePicker.value);
  let color = colorPicker.value;

  dot.style.width = dot.style.height = size + "px";
  dot.style.left = (event.pageX - size / 2) + "px";
  dot.style.top = (event.pageY - size / 2) + "px";
  dot.style.background = color;

  document.body.appendChild(dot);
});
