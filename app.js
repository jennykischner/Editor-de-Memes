'use strict';

// Abrir y cerrar paneles

const main = document.querySelector(".mainPanel");
const image = document.querySelector("#image");
const text = document.querySelector("#text");
const switchThemeButton = document.querySelector("#switchTheme");
const closeImg = document.querySelector("#closeImg");
const closeText = document.querySelector("#closeText");
const imageEdit = document.querySelector(".imageEdit");

// Edición texto 

const textEdit = document.querySelector(".textEdit");
const topTextEdit = document.querySelector("#topTextEdit");
const bottomTextEdit = document.querySelector("#bottomTextEdit");

const container = document.querySelector(".container");

// Imagenes 

const divImg = document.querySelector("#imgMeme");
const inputUrl = document.querySelector("#url");

// Colores

const backgroundColor = document.querySelector("#backgroundColor");
const backgroundColorNumber = document.querySelector(".backgroundColorNumber");
const backgroundColorText = document.querySelector("#backgroundColorText");
const backgroundColorNumberText = document.querySelector(".backgroundColorNumberText");

// Blend Mode

const backgroundOptions = document.querySelector("#backgroundOptions");

// Filtros

const brightness = document.querySelector("#brightness");
const opacity = document.querySelector("#opacity");
const contrast = document.querySelector("#contrast");
const blur_ = document.querySelector("#blur");
const grayscale = document.querySelector("#grayscale");
const sepia = document.querySelector("#sepia");
const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const negative = document.querySelector("#negative");
const resetFilters = document.querySelector(".resetFilters");


// Texto 

const topText = document.querySelector(".topText");
const bottomText = document.querySelector(".bottomText");
const topTextCheckbox = document.querySelector("#topTextCheckbox");
const bottomTextCheckbox = document.querySelector("#bottomTextCheckbox");

// Fuentes

const fontOptions = document.querySelector("#fontOptions");
const fontSize = document.querySelector("#fontSize");


// Alineado 

const alignLeft = document.querySelector(".alignLeft");
const alignCenter = document.querySelector(".alignCenter");
const alignRight = document.querySelector(".alignRight");

// Cambio color texto 

const textColor = document.querySelector("#textColor");
const textColorNumber = document.querySelector(".textColorNumber");


// Fondo Transparente 

const transparentTextCheckbox = document.querySelector("#transparentTextCheckbox");
const notOutline = document.querySelector(".notOutline");

// Contorno Texto 
const lightOutline = document.querySelector(".lightOutline");
const darkOutline = document.querySelector(".darkOutline");

// Espaciado

const spacing = document.querySelector("#spacing");
const lineSpacing = document.querySelector("#lineSpacing");

// Descarga imagen 

const download = document.querySelector(".download");


// Abrir y cerrar paneles

const abrirPanelImagen = () => {
    imageEdit.classList.add("zIndex4");
    imageEdit.classList.toggle("displayNone");
    main.classList.remove("zIndex4");
    textEdit.classList.toggle("displayNone");
    textEdit.classList.remove("zIndex4");
}
image.addEventListener("click", abrirPanelImagen);

const abrirPanelTexto = () => {
    textEdit.classList.add("zIndex4");
    textEdit.classList.toggle("displayNone");
    main.classList.remove("zIndex4");
    imageEdit.classList.toggle("displayNone");
    imageEdit.classList.remove("zIndex4");
}
text.addEventListener("click", abrirPanelTexto);

const cerrarPanel = () => {
    main.classList.add("zIndex4");
    textEdit.classList.remove("zIndex4");
    imageEdit.classList.remove("zIndex4");
    textEdit.classList.toggle("displayNone");
    imageEdit.classList.toggle("displayNone");
}
closeImg.addEventListener("click", cerrarPanel);
closeText.addEventListener("click", cerrarPanel);

