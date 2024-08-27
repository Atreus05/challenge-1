
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Función para encriptar
function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.innerText = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

// Función de encriptación
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

// Función para desencriptar
function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.innerText = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

// Función de desencriptación
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

// Función para copiar texto
function copiarTexto() {
    const textoTemporal = document.createElement("textarea");
    textoTemporal.value = mensaje.innerText;
    document.body.appendChild(textoTemporal);

    textoTemporal.select();
    textoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles

    document.execCommand("copy");
    document.body.removeChild(textoTemporal);

    mensaje.innerText = "";
    mensaje.style.backgroundImage = "url('imagenes/Hacker.png')";

    mensaje.innerHTML = `
        <div class="mensaje-texto" id="mensaje-texto">
            <strong>Ningún mensaje fue encontrado</strong>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        </div>
    `;
}

// Validación para permitir solo letras minúsculas y números
textArea.addEventListener("input", function() {
    const regex = /[^a-z0-9\s]/g;
    textArea.value = textArea.value.replace(regex, '');
});