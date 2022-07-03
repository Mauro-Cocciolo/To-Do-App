var toDoItems = []
var span = document.querySelector('#createdBy')
span.innerHTML = 'By Mauro Cocciolo. Cosecha 1975'
function ToDo(description) {
  this.description = description;
  this.complete = false;
}
ToDo.prototype.completeToDo = function () {
  return this.complete = true;
}
function buildToDo(todo, index) {
  var toDoShell = document.createElement("div");
  toDoShell.setAttribute("class", "toDoShell");
  var toDoText = document.createElement("span");
  toDoText.innerHTML = todo.description;
  toDoText.setAttribute("id", index);
  if (todo.complete) {
    toDoText.setAttribute("class", "completeText")
  };
  toDoShell.appendChild(toDoText);
  toDoText.addEventListener("click", completeToDo);
  return toDoShell;
}
function buildToDos(toDos) {
  var neWArray = toDos.map((a, index) => buildToDo(a, index));
  return neWArray;
}
function displayToDos() {
  var toDoContainer = document.getElementById("toDoContainer");
  toDoContainer.innerHTML = "";
  var resultado = buildToDos(toDoItems);
  for (let i = 0; i < resultado.length; i++) {
    toDoContainer.appendChild(resultado[i])
  }
}
function addToDo() {
  var input = document.getElementById("toDoInput")
  var neWToDo = new ToDo(input.value);
  toDoItems.push(neWToDo);
  input.value = "";
  displayToDos()
}
var button = document.getElementById("addButton");
button.addEventListener("click", addToDo)
function completeToDo(event) {
  const index = event.target.id;

  toDoItems[index].completeToDo();
  displayToDos();
}
displayToDos()
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
