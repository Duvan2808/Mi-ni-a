document.addEventListener("DOMContentLoaded", function () {

    const marcoPrincipal = document.getElementById("marcoPrincipal");
    const tituloContenido = document.getElementById("tituloContenido");
    const botones = document.querySelectorAll("[data-page]");

    botones.forEach(function (boton) {

        boton.addEventListener("mouseenter", function () {
            boton.classList.add("boton-hover-js");
        });

        boton.addEventListener("mouseleave", function () {
            boton.classList.remove("boton-hover-js");
            boton.classList.remove("boton-presionado-js");
        });

        boton.addEventListener("click", function () {
            const pagina = boton.dataset.page;
            const titulo = boton.dataset.title || boton.textContent.trim();

            // Esta línea es la que cambia el iframe
            if (marcoPrincipal) marcoPrincipal.src = pagina;

            // Esta línea actualiza el título
            if (tituloContenido) tituloContenido.textContent = titulo;

            botones.forEach(function (otroBoton) {
                otroBoton.classList.remove("activo");
            });

            boton.classList.add("activo");
        });
    });
});
