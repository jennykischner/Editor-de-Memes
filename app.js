// ?? por que agregaste esto?
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
    // los nombres de clase siempre con-guiones
    imageEdit.classList.add("zIndex4");
    imageEdit.classList.toggle("displayNone");
    main.classList.remove("zIndex4");
    textEdit.classList.toggle("displayNone");
    textEdit.classList.remove("zIndex4");
}
image.addEventListener("click", abrirPanelImagen);

// Son tan parecidas las funciones abrirPanelImagen y abrirPanelTexto que podriamos 
// abstraerlas en una sola funcion que reciba parametros. Asi:

// const abrirPanel = (panelAbrir, panelCerrar) => {
//     panelAbrir.classList.add("zIndex4");
//     panelAbrir.classList.toggle("displayNone");
//     main.classList.remove("zIndex4");
//     panelCerrar.classList.toggle("displayNone");
//     panelCerrar.classList.remove("zIndex4");
// }
// image.addEventListener("click", () => abrirPanel(imageEdit, textEdit));
// text.addEventListener("click", () => abrirPanel(textEdit, imageEdit));

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


// Modo oscuro

// esta muy rara esta función. no sé si es un resabio de la 7ma o un codigo sacado de internet
// En todo caso, queda en vos si la entendés del todo o no, pero no es buena idea usar funciones
// que no entendés del todo. 
// Hacete estas preguntas:
// 1. por que usas la sintaxis de funciones vieja?
// 2. porque usas el param e?
// 3. Por qué usas data-theme en lugar de agregar una clase o un id?
// 4. Que es targetTheme? 
// Si no las podes responder, es momento de replantear esta funcion
function switchTheme(e) {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    switchThemeButton.innerHTML = `<i class="fa fa-lightbulb-o" aria-hidden="true"></i> Modo oscuro`;

    if(currentTheme ==  "light" ||  currentTheme == undefined){
        targetTheme = "dark"
        switchThemeButton.innerHTML = `<i class="fa fa-lightbulb-o" aria-hidden="true"></i> Modo claro`;
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    }
    switchThemeButton.addEventListener('click', switchTheme);
    

// Edicion imagen

// Agrego imagen
// ojo con la sintaxis, dejá espacio entre tus conectores. 
// Si no es dificil leer, es como si yo teescribieratodoasi. 
// inputUrl.addEventListener("input", () => {
inputUrl.addEventListener("input",()=>{
    const url = inputUrl.value;
    divImg.style.backgroundImage = `url(${url})`;
});

// Cambio color de fondo
backgroundColor.addEventListener("input",()=>{
    const color = backgroundColor.value;
    divImg.style.backgroundColor = color;
    backgroundColorNumber.textContent = color;
});

// Blend Mode
backgroundOptions.addEventListener("change", () => {
    divImg.style.backgroundBlendMode = backgroundOptions.value;
});

// Filtros
const actualizarFiltros = ()=>{
    divImg.style.filter = `brightness(${brightness.value}) 
    opacity(${opacity.value}) contrast(${contrast.value}%) 
    blur(${blur_.value}px) grayscale(${grayscale.value}%) 
    sepia(${sepia.value}%) hue-rotate(${hue.value}deg) 
    saturate(${saturation.value}%) invert(${negative.value})`;
}
brightness.addEventListener("change", actualizarFiltros);
opacity.addEventListener("change", actualizarFiltros);
contrast.addEventListener("change", actualizarFiltros);
blur_.addEventListener("change", actualizarFiltros);
grayscale.addEventListener("change", actualizarFiltros);
sepia.addEventListener("change", actualizarFiltros);
hue.addEventListener("change", actualizarFiltros);
saturation.addEventListener("change", actualizarFiltros);
negative.addEventListener("change", actualizarFiltros);


// Reestablecer filtros

const inicializarFiltros = ()=>{
    brightness.value = "1";
    opacity.value = "1";
    contrast.value = "1000";
    blur_.value = "0";
    grayscale.value = "0";
    sepia.value = "0";
    hue.value = "0";
    saturation.value = "100";
    negative.value = "0";
}

resetFilters.addEventListener("click", () => {
    inicializarFiltros();
    actualizarFiltros();
});


// Edicion texto

// Agregar texto
topTextEdit.addEventListener("input", () =>{
    topText.innerText = topTextEdit.value;
});

bottomTextEdit.addEventListener("input", () =>{
    bottomText.innerText = bottomTextEdit.value;
});


//  Checkbox con o sin texto
topTextCheckbox.addEventListener("change", () =>{
    // espacios!
    // if () {

    // }
    // else {

    // }
    if(topTextCheckbox.checked){
        topTextEdit.disabled = true;
        topText.classList.add("displayNone");
    } else{
        topTextEdit.disabled = false;
        topText.classList.remove("displayNone");
    }
});

bottomTextCheckbox.addEventListener("change", () =>{
    if(bottomTextCheckbox.checked){
        bottomTextEdit.disabled = true;
        bottomText.classList.add("displayNone");
    } else{
        bottomTextEdit.disabled = false;
        bottomText.classList.remove("displayNone");
    }
});

// Fuente
fontOptions.addEventListener("change", () =>{
    topText.style.fontFamily = fontOptions.value;
    bottomText.style.fontFamily = fontOptions.value;
});

// Cambio Font Size en textos
const actualizarFontSize = ()=>{
    topText.style.fontSize = `${fontSize.value}px`;
    bottomText.style.fontSize = `${fontSize.value}px`;
}

// Cambia Font Size value dependiendo el tamaño
    if(container.offsetWidth < 350){
        fontSize.value = 15;
        actualizarFontSize();
    } else{
        fontSize.value = 25;
        actualizarFontSize();
    }
    
// Font Size input
fontSize.addEventListener("change", () =>{
    actualizarFontSize();
});

// Align text
alignLeft.addEventListener("click",() =>{
    // no uses backticks a menos que estes interpolando variables. 
    topText.style.textAlign = `left`;
    bottomText.style.textAlign = `left`;
});

alignCenter.addEventListener("click",() =>{
    topText.style.textAlign = `center`;
    bottomText.style.textAlign = `center`;
});

alignRight.addEventListener("click",() =>{
    topText.style.textAlign = `right`;
    bottomText.style.textAlign = `right`;
});

// Cambio color de fondo de texto
backgroundColorText.addEventListener("input",()=>{
    const color = backgroundColorText.value;
    topText.style.backgroundColor = color;
    bottomText.style.backgroundColor = color;
    backgroundColorNumberText.textContent = color;
});

// Cambio color de texto
textColor.addEventListener("input",()=>{
    const color = textColor.value;
    topText.style.color = color;
    bottomText.style.color = color;
    textColorNumber.textContent = color;
});

// Fondo transparente
transparentTextCheckbox.addEventListener("change", () =>{
    // No uses backticks a menos que estes interpolando variables. Privilegia comillas simples o dobles
    if(transparentTextCheckbox.checked){
        topText.style.backgroundColor = `transparent`;
        bottomText.style.backgroundColor = `transparent`;
        topText.style.position = `absolute`;
        bottomText.style.position = `absolute`;
        backgroundColorText.disabled = true;
    } else{
        topText.style.backgroundColor = `${backgroundColorText.value}`;
        bottomText.style.backgroundColor = `${backgroundColorText.value}`;
        topText.style.position = `static`;
        bottomText.style.position = `static`;
        backgroundColorText.disabled = false;
    }
});

// Contorno texto
lightOutline.addEventListener("click", () =>{
    topText.style.textShadow = `-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white`;
    bottomText.style.textShadow = `-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white`;
});

darkOutline.addEventListener("click", () =>{
    topText.style.textShadow = `-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black`;
    bottomText.style.textShadow = `-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black`;
});

notOutline.addEventListener("click", () =>{
    topText.style.textShadow = ``;
    bottomText.style.textShadow = ``;
});

// Espaciado
spacing.addEventListener("input",()=>{
    const paddingText = spacing.value;
    topText.style.padding = `${paddingText}px 30px`;
    bottomText.style.padding = `${paddingText}px 30px`;
});

lineSpacing.addEventListener("change", () =>{
    const lineSpace = lineSpacing.value;
    topText.style.lineHeight = lineSpace;
    bottomText.style.lineHeight = lineSpace;
});

//Descarga de imagen
download.addEventListener("click",()=>{
    domtoimage.toBlob(container)
      .then(function (blob) {
      window.saveAs(blob, 'meme.png');
    });
  });

  




