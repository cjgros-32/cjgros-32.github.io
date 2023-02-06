//Boton inicio "IR ARRIBA" //

const movimiento_px = 100;
const boton_ir_arriba = document.querySelector(".ir_arriba")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > movimiento_px) {
    boton_ir_arriba.classList.remove("hidden")
  } else {
    boton_ir_arriba.classList.add("hidden")
  }
})

const arriba = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

boton_ir_arriba.addEventListener("click", arriba)

// Evento de validación para formulario //

function validar_formulario() {
  let nombre01 = document.forms["formulario"]["nombre"].value;
  let apellido02 = document.forms["formulario"]["apellido"].value;
  let mail03= document.forms["formulario"]["mail"].value;
  
  if (nombre01 == "") {
    alert("POR FAVOR INGRESE SU NOMBRE");
    return false;
  }
  if (apellido02 == "") {
    alert("POR FAVOR INGRESE SU APELLIDO");
    return false;
  }
  if (mail03 == "") {
    alert("POR FAVOR INGRESE SU MAIL");    
    return false;
  }
}