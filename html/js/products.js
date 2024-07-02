//elementos dom
let btn_luna = document.getElementById("modoOscuro");
let btn_sol = document.getElementById("modoClaro");
let main = document.getElementById("main");
let textos = document.getElementsByClassName("texto");
let card_body = document.getElementsByClassName("card-body");
const lista_productos=document.getElementById("lista-productos");

//modo noche y día
btn_luna.addEventListener("click", function(e){
    main.classList.toggle("modoOscuro");
    for (let i = 0; i < textos.length; i++) {
        textos[i].classList.toggle("textoBlanco");
    }
    for (let i=0;i<card_body.length;i++){
        card_body[i].classList.toggle("modoOscuro");
    }
    btn_luna.style.display="none";
    btn_sol.style.display="block";
})
btn_sol.addEventListener("click",function(e){
    main.classList.toggle("modoOscuro");
    for (let i = 0; i < textos.length; i++) {
        textos[i].classList.toggle("textoBlanco");
    }
    for (let i=0;i<card_body.length;i++){
        card_body[i].classList.toggle("modoOscuro");
    }
    btn_luna.style.display="block";
    btn_sol.style.display="none";
})

//productos
const productsName = ["Manzana", "Pan", "Huevos", "Uva", "Leche", "Fideos", "Galletitas", "Vino", "Mayonesa", "Pollo"];
const productsPrice = [200, 1500, 2300, 4000, 1100, 800, 1500, 7000, 1400, 2200];
const productsDesc = ["Manzana roja traída de las profundidades del amazonas.", "Pan hecho por los mismos panaderos que hacen el pan bimbo.", "Huevos de calidad provenientes del campo.", "Uva importada de la misma italia patria.", "Leche proveniente de la mismisima serenisima", "Fideos fabricados y distribuidos por la marca marolio", "Galletitas hechas por la marca Mediatarde", "Vinos hechos y refinados por la gran italia", "Pollos de buena calidad provenientes del campo"]
            
for (let i=0; i<productsName.length;i++){
    //creo el div contenedor y le agrego las clases y estilos
    let div_card = document.createElement("div");
    div_card.classList.add("card", "mb-2");
    div_card.style.width="18rem";
    //creo la imagen y le asigno la ruta
    let image = document.createElement("img");

    //image.src=`imagesProducts/${productsName[i]}.jpg`;
    image.src ='Fideos.jpg';
    
    image.alt=`Foto de ${productsName[i]}`
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
    //creo el p para la descripcion de los productos y sus clases
    let card_text=document.createElement("p");
    card_text.classList.add("card-text", "texto");
    card_text.innerHTML=productsDesc[i];
    //creo el input de cantidad
    let input_number= document.createElement("input");
    input_number.setAttribute("type","number");
    input_number.placeholder="Cantidad"
    input_number.classList.add(`input${i}`);  
    //uniones
    lista_productos.appendChild(div_card);
    div_card.appendChild(image);
   // div_card.appendChild(div_card_body);
    //div_card_body.appendChild(card_title);
    card_title.appendChild(span);
    div_card_body.appendChild(card_text);
    div_card_body.appendChild(input_number);
}




// document.addEventListener('DOMContentLoaded', (event) => {
//     let inputNumber = []
//     let userInput = ''
    

//     for (let i = 0; i < productsName.length; i++) {
//         inputNumber.push = document.getElementById(`input${i}`);
//     }
    
//     inputNumber[i].addEventListener('input', (event) => {
//         userInput = event.target.value;
//         console.log('Texto actualizado:', userInput)
//     });
// })