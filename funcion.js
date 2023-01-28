//Boton inicio "IR ARRIBA" //

const showOnPx = 100;
const boton_ir_arriba = document.querySelector(".ir_arriba")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
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


