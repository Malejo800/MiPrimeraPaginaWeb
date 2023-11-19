//alert ("Hola este es mi Javascript, Soy Mario");

//let nombre = ("Mario-Alejandro");
//nombre = ("Don Alvaro");

//console.log (nombre);
//alert(nombre);


//Ocultar las imágenes cuando el menú está activado dandole una clase
document.addEventListener("DOMContentLoaded", function() {
    var check = document.getElementById("check");
    var body = document.body;

    check.addEventListener("change", function() {
        if (check.checked) {
            // Menú activado, añade una clase al cuerpo
            body.classList.add("menu-activo");
        } else {
            // Menú desactivado, quita la clase del cuerpo
            body.classList.remove("menu-activo");
        }
    });
});

// Cambiar parte del texto del parrafo descripcion mia //
//let NombreMio = "Lengua Arango";
//let Ciudad = "Caldas";
//let Frase = "DISFRUTAR Y VIVIR DE LA PROGRAMACION";

//let Parrafo = document.querySelector(".Descripcion-mia");

//function cambiarTexto (NombreMio, Ciudad, Frase) {
//    let contenido = `${NombreMio}. Actualmente trabajo como auxiliar de arquitectura. Vivo en la ciudad de ${Ciudad}. ¿Y Por qué ahora programación? Me encanta crear, ser libre, aprender nuevas cosas y desde pequeño me ha fascinado. Y ahora que puedo, me estoy adentrando en este gran mundo. No miento, estoy asustado, pero siendo sincero, toda gran aventura empieza así, con el protagonista un poco nervioso, pero con un norte claro. Y el mio es. ${Frase}.`;

//    return contenido;

//}
//Parrafo.innerText = cambiarTexto(NombreMio, Ciudad, Frasetw);



//Responsive Hamburgueza
var navBtns = document.querySelectorAll(".nav-btns li a");
var list = document.getElementById("nav-btns");
var listbtn = document.querySelector(".checkbtn");

var size = window.innerWidth;
var flag = false;

window.addEventListener("resize", () => {
  list.style.right = "100%";
  size = window.innerWidth;
  flag = false;
  console.log(flag);
});

if (window.innerWidth < 881) {

  for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener("click", () => {
      list.style.left = size + "px";
      flag = false;
      console.log(flag);
    });
  }

  function buttons() {
    if (flag) {
      flag = false;
      list.style.left = size + "px";
      console.log(flag);
    } else {
      flag = true;
      list.style.left = size - 160 + "px";
      console.log(flag);
    }
  }
}






































// Codigo formulario //
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
}); 

