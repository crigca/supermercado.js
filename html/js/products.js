//elementos dom
let btn_luna = document.getElementById("modoOscuro");
let btn_sol = document.getElementById("modoClaro");
let main = document.getElementById("main");
let textos = document.getElementsByClassName("texto");
let card_body = document.getElementsByClassName("card-body");

btn_luna.addEventListener("click", function(e){
    main.classList.toggle("modoOscuro");
    for (let i = 0; i < textos.length; i++) {
        textos[i].classList.toggle("textoBlanco");
    }
    btn_luna.style.display="none";
    btn_sol.style.display="block";
})
btn_sol.addEventListener("click",function(e){
    main.classList.toggle("modoOscuro");
    for (let i = 0; i < textos.length; i++) {
        textos[i].classList.toggle("textoBlanco");
    }
    btn_luna.style.display="block";
    btn_sol.style.display="none";
})