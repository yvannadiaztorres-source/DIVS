document.getElementById("formularioLogin").addEventListener("submit", function(event)) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contrasena").value;

if (usuario === "admin" && contraseña === "12345") {
   alert ("Inicio de sesión exitoso, ¡Bienvenido!") ;
   window.location.href = index.html;
} else {
    alert ("Usuario o contraseña incorrectos. Intenta nuevamente")
}
}
;