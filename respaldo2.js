var id_persona_span;

function agregar_persona(list, itemText) {
    var contador = document.getElementById("cant_registros");
    totalItems++;
    totalitems++;
    contador.innerHTML = totalitems;
    var listItem = document.createElement("li");
    listItem.id = "li_" + totalItems;
    var id_person = "id_" + totalItems;
    //console.log("id_person", id_person);
    //   console.log("list item", listItem);

    var span = document.createElement("span");
    span.id = id_persona_span;
    span.innerHTML = itemText;

    var edit = document.createElement("input");
    edit.type = "button";
    edit.value = "Editar";
    edit.id = "edit";
    edit.addEventListener("click", Editar_persona, false);

    var btn_cancelar = document.getElementById("btn_cancelar");
    var btn_aceptar = document.getElementById("btn_aceptar");

    var search = document.getElementById("search"),
        personas = document.getElementsByTagName("span"),
        forEach = Array.prototype.forEach;

    search.addEventListener(
        "keyup",
        function (e) {
            var eleccion = this.value;

            forEach.call(personas, function (f) {
                if (f.innerHTML.toLowerCase().search(eleccion.toLowerCase()) == -1)
                    f.parentNode.style.display = "none";
                else f.parentNode.style.display = "block";
            });
        },
        false
    );
    //var btnVer = document.getElementById("btnVer");

    var deleteBtn = document.createElement("input");
    deleteBtn.value = "Eliminar";
    deleteBtn.type = "button";
    deleteBtn.id = "deleteBtn";
    deleteBtn.addEventListener("click", Sel_para_remover, false);
    // btn_aceptar.addEventListener("click", Sel_para_remover, false);
    btn_cancelar.addEventListener("click", cancelar, false);
    btn_aceptar.addEventListener("click", Aceptar);

    //btnVer.addEventListener("click", funcion_ver);

    listItem.appendChild(span);
    listItem.appendChild(edit);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
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
var id_person = document.getElementById("id_person");

input_name.focus();

var person_array = [];
var persona;

var btnNew = document.getElementById("btnAdd");

btnNew.onclick = function () {
    if (this.value == "Aceptar") {
        //variables
        var input_name = document.getElementById("input_name");
        var input_app = document.getElementById("input_app");
        var input_apm = document.getElementById("input_apm");

        persona = {
            id: totalItems,
            nombre: input_name.value,
            app: input_app.value,
            apm: input_apm.value,
            getFullName: function () {
                return this.nombre + " " + this.app + " " + this.apm;
            }
        };

        id_persona_span = totalItems;
        person_array.push({
            id: persona.id,
            nombre: persona.nombre,
            app: persona.app,
            apm: persona.apm
        });

        agregar_persona(document.getElementById("todolist"), persona.getFullName());
        funcion_ver();
    } else if (this.value == "ACTUALIZAR") {
        this.value = "Aceptar";

        var id_person = document.getElementById("id_person");
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
        resultado_busqueda_array.id = id_person.value;
        resultado_busqueda_array.nombre = input_name.value;
        resultado_busqueda_array.app = input_app.value;
        resultado_busqueda_array.apm = input_apm.value;
        //
        funcion_ver();
        input_name.value = "";
        input_app.value = "";
        input_apm.value = "";
        id_person.value = "";
    }
};
var valid;
var text_span;
var li_id;

function Sel_para_remover() {
    var li = this.parentNode;

    //toma el texto que contiene el elemento span
    text_span = li.children[0].innerHTML;
    //obtengo el id del span
    li_id = li.children[0].getAttribute("id");
    //tomo el id del padre
    valid = li.id;

    //console.log(valid);
    abrir();
}

function abrir() {
    return (document.getElementById("vent").style.display = "block");
}

function eliminar_persona(nombre) {
    person_array = person_array.filter(persona => persona.id != li_id);
    return document.getElementById(nombre).remove();
}

function procesarEliminacion(callback) {
    callback(valid);
    funcion_ver();
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

var obtener_id_span;
var resultado_busqueda_array;

function Editar_persona() {
    btnNew.value = "ACTUALIZAR";
    var li = this.parentNode;
    var item = li.getElementsByTagName("*");

    obtener_id_span = li.children[0].getAttribute("id");
    resultado_busqueda_array = obtiene_objeto_array(obtener_id_span);
    id_person.value = resultado_busqueda_array.id;
    input_name.value = resultado_busqueda_array.nombre;
    input_app.value = resultado_busqueda_array.app;
    input_apm.value = resultado_busqueda_array.apm;
    lastUpdatedItemId = item[0].id;
}

function obtiene_objeto_array(id_persona) {
    var results = person_array.filter(function (res) {
        return res.id == id_persona;
    });
    return results.length > 0 ? results[0] : null;
}

var w = (window.innerWidth / window.innerHeight) * 1000;
var xmls = "http://www.w3.org/2000/svg";

var div = d3.select("#div_svg");

var svg = div
    .append("svg:svg")
    .attr("width", "500px")
    .attr("height", "300px")
    .attr("style", "position: absolute; top: 450px;  left: 100px")
    .attr("viewBox", "0 0 500 500")
    .attr("preserveAspectRatio", "none slice");
var color = d3.scaleOrdinal(d3.schemeCategory10);

var id_persona_svg;
var id_span;

function funcion_ver() {
    d3.select(".c_figuras").remove();
    var elemtnt = document.getElementsByTagName("li");
    svg.append("g").classed("c_figuras", true);
    for (var i = 0; i < person_array.length; i += 1) {
        let figuras = d3.select(".c_figuras");
        var rect = figuras.append("g");
        rect
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 110 + 100 * i)
            .attr("y", 50)
            .attr("fill", color(i));

        rect
            .append("text")
            .attr("id", person_array[i]["id"])
            .attr("dx", 115 + 100 * i)
            .attr("dy", 90)
            .text(person_array[i]["nombre"])
            .on("click", function () {
                btnNew.value = "ACTUALIZAR";
                let this_text = this.parentNode;
                let obtiene_id = this_text.children[1].getAttribute("id");
                resultado_busqueda_array = obtiene_objeto_array(obtiene_id);
                id_person.value = resultado_busqueda_array.id;
                input_name.value = resultado_busqueda_array.nombre;
                input_app.value = resultado_busqueda_array.app;
                input_apm.value = resultado_busqueda_array.apm;
                lastUpdatedItemId = obtiene_id;
            });
        rect
            .append("text")
            .attr("dx", 160 + 100 * i)
            .attr("dy", 50)
            .attr("id", elemtnt[i].getAttribute("id"))
            .text("X")
            .style("cursor", "pointer")
            .on("click", function () {
                var pd = this.parentNode;
                id_persona_svg = pd.children[1].getAttribute("id");
                id_span = this.id;
                console.log("this_", pd);
                pro_Eliminacion(eliminar_person);
                this.parentNode.remove();
            });
    }
}

function eliminar_person(nombre) {
    person_array = person_array.filter(persona => persona.id != id_persona_svg);
    var contador = document.getElementById("cant_registros");
    contador.innerHTML = totalitems-- - 1;
    return document.getElementById(nombre).remove();
}

function pro_Eliminacion(callback) {
    callback(id_span);
    console.log("id_span", id_span);
}