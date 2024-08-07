//elementos dom
const lista_productos = document.getElementById("lista-productos");
let hoverBlanco = document.getElementsByClassName("hover-blanco");
let max_alert = document.getElementById("max-alert");
let negative_alert = document.getElementById("negative-alert");
let btn_luna = document.getElementById("modoOscuro");
let btn_sol = document.getElementById("modoClaro");
let btn_luna1 = document.getElementById("modoOscuro1");
let btn_sol1 = document.getElementById("modoClaro1");
let main = document.querySelector("body");
let textos = document.getElementsByClassName("texto");
let card_body = document.getElementsByClassName("card-body");
let primary_alert= document.getElementById("alert-primary");
let success_alert= document.getElementById("alert-success");
let btn_dropdown = document.getElementById("boton-dropdown");
let menu_dropdown = document.getElementById("menu-dropdown");
let btn_buy = document.getElementById("btn-buy");

function applyDarkMode() {
    main.classList.add("modoOscuro");
    for (let i = 0; i < textos.length; i++) {
        textos[i].classList.add("textoBlanco");
    }
    for (let i = 0; i < card_body.length; i++) {
        card_body[i].classList.add("modoOscuro");
    }
}

function removeDarkMode() {
    main.classList.remove("modoOscuro");
    for (let i = 0; i < textos.length; i++) {
        textos[i].classList.remove("textoBlanco");
    }
    for (let i = 0; i < card_body.length; i++) {
        card_body[i].classList.remove("modoOscuro");
    }
}

function toggleModoOscuro() {
    if (main.classList.contains("modoOscuro")) {
        removeDarkMode();
        localStorage.setItem("modoOscuro", "false");
    } else {
        applyDarkMode();
        localStorage.setItem("modoOscuro", "true");
    }
    menu_dropdown.style.display = "none";
}

btn_dropdown.addEventListener("click", function(e) {
    menu_dropdown.style.display = "flex";
    document.addEventListener("click", function(e) {
        if (!menu_dropdown.contains(e.target) && !btn_dropdown.contains(e.target)) {
            menu_dropdown.style.display = "none";
        }
    });
});

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

window.addEventListener("resize", function(e) {
    menu_dropdown.style.display = "none";
});

// Revisa si el modo oscuro estaba activo
window.addEventListener("load", function() {
    if (localStorage.getItem("modoOscuro") === "true") {
        applyDarkMode();
        btn_luna.style.display = "none";
        btn_sol.style.display = "block";
    } else {
        btn_luna.style.display = "block";
        btn_sol.style.display = "none";
    }
});

//productos
const productsName = ["Manzana", "Pan", "Huevos", "Uva", "Leche", "Fideos", "Galletitas", "Vino", "Mayonesa", "Pollo"];
const productsPrice = [200, 1500, 2300, 4000, 1100, 800, 1500, 7000, 1400, 2200];
const productsDesc = ["Manzana roja traída de las profundidades del amazonas.", "Pan hecho por los mismos panaderos que hacen el pan bimbo.", "Huevos de calidad provenientes del campo.", "Uva importada de la misma italia patria.", "Leche proveniente de la mismisima serenisima", "Fideos fabricados y distribuidos por la marca marolio", "Galletitas hechas por la marca Mediatarde", "Vinos hechos y refinados por la gran italia", "Pollos de buena calidad provenientes del campo", "pollo de los huevos de oro"]
const productsStock = [3, 15, 8, 12, 19, 6, 4, 10, 17, 11];
let productQuantities = new Array(productsName.length).fill(0);

for (let i=0; i<productsName.length;i++){
    //creo el div contenedor y le agrego las clases y estilos
    let div_card = document.createElement("div");
    div_card.classList.add("card", "mb-2");
    div_card.style.width="18rem";
    div_card.style.maxWidth="22rem"


    //creo la imagen y le asigno la ruta
    let image = document.createElement("img");
    image.src=`imagesProducts/${productsName[i]}.jpg`;
    image.alt=`Foto de ${productsName[i]}`;
    image.style.height="190px"


    //creo el div del cuerpo de la carta con su clase
    let div_card_body=document.createElement("div");
    div_card_body.classList.add("card-body");

    //creo el titulo de la carta con sus clases y texto
    let card_title=document.createElement("h5");
    card_title.classList.add("card-title", "texto");
    let span=document.createElement("span");
    span.classList.add("precio");
    span.innerHTML=" $"+productsPrice[i];
    card_title.innerHTML=`${productsName[i]}`;
  
    //creo el subtitulo de la carta (el stock)
    let card_subtitle = document.createElement("h6");
    card_subtitle.innerHTML=`Stock: ${productsStock[i]}`;
    card_subtitle.classList.add("card-subtitle", "mb-2", "texto");
    card_subtitle.style.opacity=0.5;
  
    //creo el p para la descripcion de los productos y sus clases
    let card_text=document.createElement("p");
    card_text.classList.add("card-text", "texto");
    card_text.innerHTML=productsDesc[i];
    card_text.style.height="48px"

    //creo el input de cantidad
    let input_number= document.createElement("input");
    input_number.setAttribute("type","number");
    input_number.placeholder="Cantidad"
    input_number.classList.add(`input${i}`);  
    input_number.addEventListener("input", function(e){
        let value=parseInt(this.value);
        if (isNaN(value)) {
            value = 0;
            this.value = value;
        }
        if (value>productsStock[i]){
            max_alert.classList.toggle("show");
            setTimeout(() => {
                max_alert.classList.toggle("show");
            }, 2000);
            this.value=productsStock[i];
            value = productsStock[i];
            this.value = value;
        } else if (value < 0) {
            negative_alert.classList.toggle("show");
            setTimeout(() => {
                negative_alert.classList.toggle("show");
            }, 2000);
            value = 0;
            this.value = value;
        }
        productQuantities[i] = value;
        console.log(productQuantities[i]);
    });
    
    //uniones
    lista_productos.appendChild(div_card);
    div_card.appendChild(image);
    div_card.appendChild(div_card_body);
    div_card_body.appendChild(card_title);
    card_title.appendChild(span);
    div_card_body.appendChild(card_subtitle);
    div_card_body.appendChild(card_text);
    div_card_body.appendChild(input_number);
}

let totalCost = 0
let totalProducts = 0

function buyButton() {

    totalCost = 0
    totalProducts = 0

    for (let i = 0; i < productQuantities.length; i++) {
        totalCost += (Number(productsPrice[i]) * Number(productQuantities[i]))
    }

    for (let i = 0; i < productQuantities.length; i++) {
        totalProducts += productQuantities[i]
    }

    console.log(totalCost)
}

//boton comprar cartel
btn_buy.addEventListener("click", function() {
    buyButton();
    alert(`Usted ha comprado ${totalProducts} productos al costo de $${totalCost}`)
    location.reload()
});