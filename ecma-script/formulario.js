const concatenar = (evt) => {
    evt.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    document.querySelector("#resultado").innerHTML = `${nombre} ${apellido}`;

}
// document.querySelector("#formulario")
document.getElementById("formulario").addEventListener("submit",concatenar)