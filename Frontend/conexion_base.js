const API_URL = "http://localhost:3000/api/users";

async function obtenerUsuarios() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const contenedor = document.getElementById("usuarios");
  contenedor.innerHTML = "";

  data.forEach(u => {
    const div = document.createElement("div");
    div.classList.add("usuario");
    div.innerHTML = `
      <h3>${u.nombre}</h3>
      <p>${u.correo}</p>
      <p>Edad: ${u.edad}</p>
    `;
    contenedor.appendChild(div);
  });
}

async function crearUsuario() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value; // corregido de email a correo
  const edad = document.getElementById("edad").value;

  // Validación simple
  if (!nombre || !correo || !edad) {
    alert("Por favor, completa todos los campos");
    return;
  }

  //  Enviar POST al backend
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, correo, edad })
  });

  // Limpiar campos y recargar lista
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("edad").value = "";

  obtenerUsuarios();
}

obtenerUsuarios(); // cargar al inicio