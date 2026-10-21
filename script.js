function seleccionarActividad(nombreActividad) {
    document.getElementById("actividad").value = nombreActividad;
    document.getElementById("registro").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const actividad = document.getElementById("actividad").value;

    document.getElementById("mensaje").textContent =
        "¡Gracias, " + nombre +
        "! Tu formulario de prueba para " + actividad +
        " fue completado correctamente.";

    this.reset();
});