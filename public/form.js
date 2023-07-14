var addnew = document.querySelector(".addnew");
var repeat = document.querySelector(".repeat");
let ul = document.querySelector(".cropsadded");
let input = document.querySelector("input[type='button']");
let btn = document.querySelector("button");
let todosList = document.querySelector(".cropsadded");

input.addEventListener("click", function () {
  let crop = document.getElementById("cropn");
  let month = document.getElementById("selectmonth");
  let delet = document.querySelector(".delete");
  let cropname = crop.value;
  let cropmonth = month.value;
  if(cropname==""||cropmonth==""){
      alert("Crop and SellingMonth cannot be empty")
    return;
    }
  crop.value = "";
  month.value = "";


  let todoItemDiv = document.createElement("div");
  todoItemDiv.classList.add("crp");

  let pTag1 = document.createElement("p");
  pTag1.classList.add("cropname");
  pTag1.textContent = cropname;

  let pTag2 = document.createElement("p");
  pTag2.classList.add("month");
  pTag2.textContent = cropmonth;

  let deleteTodoButton = document.createElement("button");
  deleteTodoButton.classList.add("delete-todo");
  deleteTodoButton.textContent = "Delete";

  deleteTodoButton.addEventListener("click", deleteTodo);

  todoItemDiv.append(pTag1);
  todoItemDiv.append(pTag2);
  todoItemDiv.append(deleteTodoButton);

  todosList.append(todoItemDiv);
});

function deleteTodo(e) {
  e.target.parentNode.remove();
}
