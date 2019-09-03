function newItem() {
    var item_nom = document.getElementById('input_name').value;
    var item_app = document.getElementById('input_app').value;
    var item_apm = document.getElementById('input_apm').value;
    var btn_aceptar = document.getElementById('btn_aceptar');

    var texto = item_nom + " " + item_app + " " + item_apm;
    var ul = document.getElementById("list");
    var li = document.createElement('li');

    var btn_editar = document.createElement('input');
    btn_editar.type = 'button';
    btn_editar.id = "btn_editar";
    btn_editar.value = "Editar";

    var btn_eliminar = document.createElement('input');
    btn_eliminar.type = 'button';
    btn_eliminar.id = "btn_eliminar";
    btn_eliminar.value = "Eliminar";

    li.appendChild(btn_editar);
    li.appendChild(btn_eliminar);

    li.appendChild(document.createTextNode("-" + texto));
    ul.appendChild(li);
    document.getElementById('input_name').value = "";
    document.getElementById('input_app').value = "";
    document.getElementById('input_apm').value = "";

    //li.onclick = removeItem;
    btn_eliminar.onclick = removeItem;
}
btn_aceptar.addEventListener("click", function () {
    newItem();
})

function removeItem(e) {
    this.parentElement.removeChild(this.parentElement);
    //this.target.parentElement.removeChild(e.target)
    //e.target.parentElement.removeChild(e.target);
}