function iniciarSecion() {
    const n = document.getElementById("nombre").value;
    const nu = document.getElementById("fecha").value;

    if (n.toLowerCase() === "alison" || n.toLowerCase() === "ali" && nu === "07042006") {
        alert("Bienvenida preciosa hermosa ❤️");
        localStorage.setItem("logueado", "true");
        window.location.href = "Galeria.html";
    } else {
        alert("te falla o q");
    }
}
if (window.location.pathname.includes(Galeria.html)) {
    if (localStorage.getItem("logueado") !== "true") {
        window.location.href = "index.html";
    }
}
function salir() {
    localStorage.removeItem("logueado");
    window.location.href = "logInc.html";
}
const nota = document.getElementById("nota");

nota.value = localStorage.getItem("nota") || "";

nota.addEventListener("input", () => {
    localStorage.setItem("nota", nota.value);
});