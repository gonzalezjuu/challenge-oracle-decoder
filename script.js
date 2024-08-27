
function encriptarTexto(texto) {
    const Codigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    Codigo.forEach(([vocal, reemplazo]) => {
        const regex = new RegExp(vocal, 'g');
        texto = texto.replace(regex, reemplazo);
    });

    return texto;
}


function encriptar() {

    const textArea = document.querySelector(".text-area").value;
    const seccionEcriptacion = document.querySelector(".encriptacion");
    const mensaje = document.querySelector(".mensaje");

    if (textArea) {

        const textoEncriptado = encriptarTexto(textArea);


        seccionEcriptacion.style.display = 'none';
        mensaje.textContent = textoEncriptado
    } else {

        const textoEncriptadoElement = "Por favor, introduce un texto para encriptar.";
        console.log(textoEncriptadoElement);
    }
}

function desencriptarTexto(texto) {
    const Codigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];


    Codigo.reverse().forEach(([vocal, reemplazo]) => {
        const regex = new RegExp(reemplazo, 'g');
        texto = texto.replace(regex, vocal);
    });

    return texto;
}

function desencriptar() {
    const mensaje = document.querySelector(".mensaje");
    const textoEncriptado = mensaje.innerHTML;

    if (textoEncriptado) {
        const textoDesencriptado = desencriptarTexto(textoEncriptado);
        mensaje.textContent = textoDesencriptado;
    } else {
        const textoEncriptadoElement = "Por favor, debe encriptar antes un texto.";
        console.log(textoEncriptadoElement);
    }

}