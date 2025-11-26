document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); 

    let nombre = document.getElementById("nombre").value.trim();
    let motivo = document.getElementById("motivo").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje");

    if (nombre === "" || motivo === "" || correo === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "⚠️ Por favor, completa todos los campos.";
    } else {
        mensaje.style.color = "green";
        mensaje.textContent = "✔️ Formulario enviado correctamente.";
        
    }
});