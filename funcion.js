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

function validacion_formulario() {
  let x = document.form["formulario"]["nombre"];
  if (x == "") {
    alert("por favor ingrese su nombre, apellido y mail");
    return false;
  }
}

