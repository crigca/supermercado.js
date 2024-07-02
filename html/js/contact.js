//elementos dom
let btn_luna = document.getElementById("modoOscuro");
let btn_sol = document.getElementById("modoClaro");
let main = document.getElementById("main");
let textos = document.getElementsByClassName("texto");

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

//Variables.
let form = document.getElementById("contact-form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let messageInput = document.getElementById("message");

//Funcion para agregar datos ingresado.
function addData(){
    let nameValue = nameInput.value;
    let emailValue = emailInput.value;
    let phoneValue = phoneInput.value;
    let messageValue = messageInput.value;

    return[nameValue, emailValue, phoneValue, messageValue];
}

// Funcion crear txt y descargar.   
function createFileText(nameValue, emailValue, phoneValue, messageValue){
    let dataString = `Nombre: ${nameValue}\nEmail: ${emailValue}\nTeléfono: ${phoneValue}\nMensaje: ${messageValue}`;

    let a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(dataString);
    a.download = 'contact_data.txt';
    a.click();
}

//Funcion limpiar formulario.
function cleanForm(){
    form.reset();
}

// Envio del formulario.
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let[nameValue, emailValue, phoneValue, messageValue] = addData();
    createFileText(nameValue, emailValue, phoneValue, messageValue);
    cleanForm();
});

// Chatbot.
        (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '6681436e17a95072bff6ea15' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production'
            });
          }
          v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })(document, 'script');
   

