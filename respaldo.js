function agregar_persona(list, itemText) {
    var contador = document.getElementById("cant_registros");
    totalItems++;
    totalitems++;
    contador.innerHTML = totalitems;
    var listItem = document.createElement("li");
    listItem.id = "li_" + totalItems;
    var id_person = "id_" + totalItems;
    console.log("id_person", id_person);
    // console.log("list item", listItem);

    var span = document.createElement("span");
    span.id = "item_" + totalItems;
    span.innerHTML = itemText;

    var edit = document.createElement("input");
    edit.type = "button";
    edit.value = "Editar";
    edit.id = "edit";
    edit.addEventListener("click", Editar_persona, false);

    var btn_cancelar = document.getElementById("btn_cancelar");
    var btn_aceptar = document.getElementById("btn_aceptar");

    var deleteBtn = document.createElement("input");
    deleteBtn.value = "Eliminar";
    deleteBtn.type = "button";
    deleteBtn.id = "deleteBtn";
    deleteBtn.addEventListener("click", Sel_para_remover, false);
    // btn_aceptar.addEventListener("click", Sel_para_remover, false);
    btn_cancelar.addEventListener("click", cancelar, false);
    btn_aceptar.addEventListener("click", Aceptar);

    listItem.appendChild(span);
    listItem.appendChild(edit);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    //limpiar los campos una ve var contador = document.getElementById("cant_registros");z re
    input_name.value = "";
    var contador = document.getElementById("cant_registros");
    input_app.value = "";
    var contador = document.getElementById("cant_registros");
    input_apm.value = "";
    var contador = document.getElementById("cant_registros");
}
var totalItems = 0;
var totalitems = 0;
var lastUpdatedItemId = "";
var input_name = document.getElementById("input_name");
var input_app = document.getElementById("input_app");
var input_apm = document.getElementById("input_apm");

input_name.focus();

var person_array = [];

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function () {
    if (this.value == "Aceptar") {
        //variables
        var input_name = document.getElementById("input_name");
        var input_app = document.getElementById("input_app");
        var input_apm = document.getElementById("input_apm");
        /**
         * registro con objeto
         * id
         * nombre
         * apellido
         *
         *
         */

        var persona = {
            id: totalItems,
            nombre: input_name.value,
            app: input_app.value,
            apm: input_apm.value,
            getFullName: function () {
                return this.id + " " + this.nombre + " " + this.app + " " + this.apm;
            }
        };
        console.log("objeto persona", persona.getFullName());
        person_array.push(persona.getFullName());

        var itemText =
            input_name.value + " " + input_app.value + " " + input_apm.value;
        // person.push(itemText);
        if (!itemText || itemText === "" || itemText === " ") {
            return false;
        }

        agregar_persona(
            document.getElementById("todolist"),
            person_array[person_array.length - 1]
        );

        console.log("array", person_array);
        // agregar_persona(document.getElementById("todolist"), itemText);
    } else if (this.value == "ACTUALIZAR") {
        this.value = "Aceptar";

        var input_name = document.getElementById("input_name");
        var input_app = document.getElementById("input_app");
        var input_apm = document.getElementById("input_apm");

        var itemText =
            input_name.value.trim() +
            " " +
            input_app.value.trim() +
            " " +
            input_apm.value.trim();

        if (!itemText || itemText === "" || itemText === " ") {
            return false;
        }

        document.getElementById(lastUpdatedItemId).innerHTML = itemText;
        input_name.value = "";
        input_app.value = "";
        input_apm.value = "";
    }
};
var valid;
var text_span;

function Sel_para_remover() {
    var li = this.parentNode;
    text_span = li.children[0].innerHTML;
    console.log(text_span);
    valid = li.id;
    abrir();
}

function abrir() {
    return (document.getElementById("vent").style.display = "block");
}

function eliminar_persona(nombre) {
    removeItemArray(person_array, text_span);
    console.log("persona array", person_array);
    return document.getElementById(nombre).remove();
}

function procesarEliminacion(callback) {
    callback(valid);
}

function Aceptar() {
    procesarEliminacion(eliminar_persona);
    document.getElementById("vent").style.display = "none";
    var contador = document.getElementById("cant_registros");
    contador.innerHTML = totalitems-- - 1;
}

function cancelar() {
    document.getElementById("vent").style.display = "none";
}

function removeItemArray(arr, item) {
    var i = arr.indexOf(item);
    if (i !== -1) {
        arr.splice(i, 1);
    }
}

function Editar_persona() {
    btnNew.value = "ACTUALIZAR";
    var li = this.parentNode;
    var item = li.getElementsByTagName("*");
    var todo = item[0].innerHTML;
    var split = todo.split(" ");
    input_name.value = split[0];
    input_app.value = split[1];
    input_apm.value = split[2];
    lastUpdatedItemId = item[0].totalItems;

    // var index = person_array.indexOf(todo);
    // if (index !== -1) {
    // person_array[index] = "okok";
    //}
}

// console.log(split);
// console.log((lastUpdatedItemId = item[0].id));
// var indice = person.indexOf(3); // obtenemos el indice
// person.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

// console.log(person);
// Aceptar(li.id);
// li.remove();