var listaCamposFormulario = document.querySelectorAll(".campos__item");
var botonEnviar = document.querySelector(".enviar");

function validarCampos(evento) 
{
    evento.preventDefault();

    listaCamposFormulario.forEach(function(itemCampo) {
        if(itemCampo.className == "campos__item mensaje") {
            alert("campo mensaje");
        } else if(itemCampo.className != "campos__item enviar") {
            alert("campo cualquiera");
        }

    });

}

function enviarFormulario()
{


}


botonEnviar.onclick = validarCampos;