$("nav img").click(function () {
  alert("hola");
});

//Inicialización modal
var myModal = document.getElementById("columna2");
var myInput = document.getElementById("botonmodal");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
  
});

//Inicialización popover
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
