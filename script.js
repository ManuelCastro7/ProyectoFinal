let repetir = true;

while (repetir) {
    let edad = parseFloat(prompt("Ingrese su edad."))

    if (edad >= 18){
        break
    }
    else if(edad <17){
        alert("Debes ser mayor de edad.")
    }
}

document.getElementById("boton").addEventListener("click", function(){
    document.getElementById("redesSociales").style = "display: block";
    document.getElementById("redesSociales").style = "flex-direction: row";
    document.getElementById("boton").style = "display: none";
});