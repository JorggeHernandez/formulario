//variables
var input_name = document.getElementById("name_persona"); //nombre.
var input_app = document.getElementById("app_persona"); //Apellido Paterno.
var input_apm = document.getElementById("apm_persona"); //Apellido Materno.
var nuevaPersona = document.getElementById("btn-agregar");

var addButton = document.getElementById("btn-agregar"); //boton agregar
var listadePersonas = document.getElementById("lista"); //ul de #lista de personas

//New task list item
var crearElementoPersona = function(personaString) {
  var listItem = document.createElement("li");
  var label = document.createElement("label"); //label
  var editInput = document.createElement("input"); //text
  var btn_eliminar = document.createElement("button"); //button eliminar
  var btn_editar = document.createElement("button"); //boton editar

  label.innerText = personaString;

  //Each elements, needs appending
  editInput.type = "text";
  btn_editar.innerText = "Editar"; //innerText encodes special characters, HTML does not.
  btn_editar.className = "edit";
  btn_eliminar.innerText = "Eliminar";
  btn_eliminar.className = "delete";

  //and appending.
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(btn_editar);
  listItem.appendChild(btn_eliminar);
  return listItem;
};

var agregar_persona = function() {
  var tod = input_name.value + " " + input_app.value + " " + input_apm.value;
  var listItem = crearElementoPersona(tod);
  listadePersonas.appendChild(listItem);
  bindTaskEvents(listItem);

  input_name.value = "";
  input_app.value = "";
  input_apm.value = "";
};

//Edit an existing task.

var EditarPersona = function() {
  //console.log("Edit Task...");
  //console.log("Change 'edit' to 'save'");
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var select = label.innerText;
  var selects = select.split(" ");

  input_name.value = selects[0];
  input_app.value = selects[1];
  input_apm.value = selects[2];

  var containsClass = listItem.classList.contains("editMode");
  if (containsClass) {
    //switch to .editmode
    //label becomes the inputs value.
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }

  //toggle .editmode on the parent.
  listItem.classList.toggle("editMode");
};

//Delete person.
var EliminarPersona = function() {
  //console.log("Delete Task...");
  var option = confirm("Deseas eliminar esta persona?");
  if (option == true) {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
  } else {
    console.log("cancelado");
  }
};

//Set the click handler to the agregar_persona function.
addButton.onclick = agregar_persona;
//addButton.addEventListener("click", agregar_persona);

var bindTaskEvents = function(taskListItem) {
  // console.log("bind list item events");
  //select ListItems children
  var btn_editar = taskListItem.querySelector("button.edit");
  var btn_eliminar = taskListItem.querySelector("button.delete");

  //Bind EditarPersona to edit button.
  btn_editar.onclick = EditarPersona;
  //Bind EliminarPersona to delete button.
  btn_eliminar.onclick = EliminarPersona;
};
