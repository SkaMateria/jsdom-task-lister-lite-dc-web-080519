document.addEventListener("DOMContentLoaded", () => {
  
  
  taskButton.addEventListener("submit", buttonTest)
  
  
});

let description = document.getElementById("new-task-description")
let tasks = document.getElementById("tasks")
let taskButton = document.querySelector("#create-task-form")
let colors = ["Select", "Red", "Yellow", "Green"]

// "x" delete button functionality
function delete123(e) {
  console.log("hi")
  let value = e.target.parentNode
  value.remove();
}

// "color selector" functionality
function colorChange(event) {
  if(event.target.value == "Red"){
    debugger
  }
  if(event.target.value == "Yellow"){
    console.log("It's Yellow!")
  }
  if(event.target.value == "Green"){
    console.log("It's GREEN, VICTOR! IT'S GREEN!!!")
  }



}

function buttonTest(event) {
  let newRow = document.createElement("li")
  newRow.innerText = description.value
  let deleteButton = document.createElement("button")
  let coloredButton = document.createElement("select");

  deleteButton.className = `${description.value}`;
  deleteButton.innerText = "x"
  newRow.appendChild(deleteButton)
  newRow.appendChild(coloredButton);
  tasks.appendChild(newRow)




  
  
  
  
  
  
  for (var i = 0; i < colors.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", colors[i]);
    option.text = colors[i];
    coloredButton.appendChild(option);
  }
  
  
  coloredButton.addEventListener("change", colorChange)
  deleteButton.addEventListener("click", delete123)
    event.target.reset()
    event.preventDefault();
  }
