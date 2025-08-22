import { obtenerInmueblePorId } from "./api.js";


function renderDetalle(inm) {
const {
titulo = "Inmueble",
descripcion = "",
ciudad = "",
barrio = "",
tipo = "",
precio = 0,
caracteristicas = {},
imagenes = [],
} = inm;


const imagenPrincipal = imagenes?.[0] || "assets/img/sample-1.jpg";


cont.innerHTML = `
<div class="row g-4">
<div class="col-md-6">
<img src="${imagenPrincipal}" class="w-100 rounded" alt="${titulo}"/>
<div class="d-flex gap-2 mt-2 flex-wrap">
${imagenes.slice(1, 6).map(src => `<img src="${src}" class="rounded" style="width:96px;height:72px;object-fit:cover">`).join("")}
</div>
</div>
<div class="col-md-6">
<h2 class="mb-2">${titulo}</h2>
<p class="fs-4 fw-bold text-success">${currencyCOP(precio)}</p>
<p class="text-muted mb-1">${tipo} · ${barrio} · ${ciudad}</p>
<hr>
<p>${descripcion}</p>
${renderCaracteristicas(caracteristicas)}
<div class="d-grid d-sm-flex gap-2 mt-3">
<a href="inmuebles.html" class="btn btn-outline-secondary">Volver al listado</a>
<a href="#contacto" class="btn btn-primary">Contactar asesor</a>
</div>
</div>
</div>`;
}


function renderCaracteristicas(obj = {}) {
const entries = Object.entries(obj);
if (!entries.length) return "";
return `
<div class="mt-3">
<h6 class="text-uppercase text-muted">Características</h6>
<div class="row row-cols-1 row-cols-sm-2 g-2">
${entries.map(([k,v]) => `
<div class="col">
<div class="border rounded p-2 bg-light">${k}: <strong>${v}</strong></div>
</div>`).join("")}
</div>
</div>`;
}