//elementos dom
let btn_luna = document.getElementById("modoOscuro");
let btn_sol = document.getElementById("modoClaro");
let btn_luna1 = document.getElementById("modoOscuro1");
let btn_sol1 = document.getElementById("modoClaro1");
let main = document.querySelector("body");
let textos = document.getElementsByClassName("texto");
let card_body = document.getElementsByClassName("card-body");
let primary_alert= document.getElementById("alert-primary");
let successs_alert= document.getElementById("alert-success");
let btn_dropdown = document.getElementById("boton-dropdown");
let menu_dropdown = document.getElementById("menu-dropdown");

btn_dropdown.addEventListener("click", function(e){
    menu_dropdown.style.display="flex";
    document.addEventListener("click", function (e) {
        if(!menu_dropdown.contains(e.target) && !btn_dropdown.contains(e.target)){
            menu_dropdown.style.display="none";
        }
    });
})

function toggleModoOscuro() {
    main.classList.toggle("modoOscuro");
    for (let i = 0; i < textos.length; i++) {
        textos[i].classList.toggle("textoBlanco");
    }    
    for (let i=0;i<card_body.length;i++){
        card_body[i].classList.toggle("modoOscuro");
    }
    menu_dropdown.style.display = "none";
}

btn_luna.addEventListener("click", function(e) {
    toggleModoOscuro();
    btn_luna.style.display = "none";
    btn_sol.style.display = "block";
});

btn_sol.addEventListener("click", function(e) {
    toggleModoOscuro();
    btn_luna.style.display = "block";
    btn_sol.style.display = "none";
});

btn_luna1.addEventListener("click", function(e) {
    toggleModoOscuro();
    btn_luna1.style.display = "none";
    btn_sol1.style.display = "block";
});

btn_sol1.addEventListener("click", function(e) {
    toggleModoOscuro();
    btn_luna1.style.display = "block";
    btn_sol1.style.display = "none";
});

window.addEventListener("resize",function(e){
    menu_dropdown.style.display="none";
})