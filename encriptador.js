const inputText = document.querySelector("#texto-Encriptar");
const buttonEncrypt = document.querySelector(".boton-Encriptar");
const buttonDecrypt =document.querySelector(".boton-Desencriptar");
const outputText = document.querySelector(".cajadetexto-zona2");

const panelInformationZona2 = document.getElementById("informacion-zona2");
const buttonCopy = document.getElementById("boton-copiar");

buttonCopy.style.display = "none";

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

var matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];

function encriptar(stringEncriptar){
    stringEncriptar = stringEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){ 
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}

function desencriptar(stringEncriptar){
    stringEncriptar = stringEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){ 
        if(stringEncriptar.includes(matrizCodigo[i][1])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringEncriptar;
}

function btn_encriptar(){
    if(inputText.value != ""){
        prepararZona2();
        outputText.value = encriptar(inputText.value);
    }
}

function btn_desencriptar(){
    if(inputText.value != ""){
        prepararZona2();
        outputText.value = desencriptar(inputText.value);
    }
}

function btn_copiar(){
    navigator.clipboard.writeText(outputText.value);
}

function prepararZona2(){
    panelInformationZona2.style.display = "none";
    buttonCopy.style.display = "block";
}