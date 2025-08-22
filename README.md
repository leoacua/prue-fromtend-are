# prue-fromtend-are
Prueba técnica gestor de desarrollo web inmobiliaria diseño
.

📂 Estructura del proyecto
frontend/
├── index.html # Landing page
├── inmuebles.html # Listado y buscador de inmuebles
├── detalle.html # Página de detalle de inmueble
├── assets/
│ ├── css/
│ │ └── styles.css # Estilos personalizados PRO
│ ├── js/
│ │ ├── api.js # Configuración Axios + funciones API
│ │ ├── ui.js # Utilidades UI (spinners, mensajes)
│ │ ├── inmuebles.js # Lógica del listado y filtros
│ │ └── detalle.js # Lógica del detalle
│ └── img/ # Imágenes (logo, hero, placeholders)

⚙️ Requisitos

Navegador moderno con soporte ES6.

Backend en ejecución (por defecto en http://localhost:8000).

Servidor local para servir los archivos (Live Server, Python, Node, etc.).

▶️ Ejecución

# Opción Python
python -m http.server 5500


# Opción Node (serve)
npm i -g serve
serve .

html

🔗 Conexión al Backend

Configura la URL base en assets/js/api.js:

const API_BASE = "http://localhost:8000";

Endpoints esperados:

GET /api/inmuebles

GET /api/inmuebles/:id

GET /api/ciudades

GET /api/barrios?ciudad=...

GET /api/tipos

