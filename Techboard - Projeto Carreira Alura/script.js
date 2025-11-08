const BtnSwitchMode = document.querySelector(".altera_contexto");
const LogoImg = document.querySelector(".logo_image");
const html = document.querySelector('html');

// const darkModeBtn = 'url("./Property 1=Dark.svg")';
// const lightModeBtn = 'url("./Property 1=Light.svg")';



BtnSwitchMode.addEventListener("click", ()=>{
trocaModo()
trocaImagem();
// trocaIconeBotao();
});

function trocaModo(){
    html.classList.toggle("dark-mode");
}


function trocaImagem(){
if(LogoImg.src.includes("logo_a.svg")){
    LogoImg.src = LogoImg.src.replace("logo_a.svg","logo_b.svg");
} else{
    LogoImg.src = LogoImg.src.replace("logo_b.svg","logo_a.svg");
}
}

// function trocaIconeBotao(){
//     if(html.classList.contains("dark-mode")){
//         BtnSwitchMode.style.backgroundImage = lightModeBtn + sharedStyles;
//     }else{
//         BtnSwitchMode.style.backgroundImage = darkModeBtn + sharedStyles;       
//     }
//}