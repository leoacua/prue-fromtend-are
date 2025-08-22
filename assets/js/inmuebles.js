import { obtenerInmuebles, obtenerCiudades, obtenerBarrios, obtenerTipos } from "./api.js";
})();


if(selectCiudad && selectBarrio){
selectCiudad.addEventListener("change", async()=>{
try{ renderOptions(selectBarrio, await obtenerBarrios(selectCiudad.value)); }
catch{ selectBarrio.innerHTML = '<option value="">Todos</option>'; }
});
}


function renderOptions(select, items=[]){ select.innerHTML = '<option value="">Todos</option>' + items.map(v=>`<option value="${v}">${v}</option>`).join(""); }


async function cargarInmuebles(page=1){
paginaActual = page; showSpinner(grid);
try{
const filtros = {
ciudad: selectCiudad?.value || "",
barrio: selectBarrio?.value || "",
tipo: selectTipo?.value || "",
precio_min: inputMin?.value || "",
precio_max: inputMax?.value || "",
page: paginaActual, limit: limite,
orden: selectOrden?.value || "recientes",
};
const data = await obtenerInmuebles(filtros);
const items = data.items || data.results || [];
const total = data.total || 0;
if(!items.length){ showEmpty(grid, "No encontramos inmuebles con esos filtros"); paginacion.innerHTML = ""; return; }
grid.innerHTML = items.map(cardInmueble).join("");
renderPaginacion(total, paginaActual, limite);
}catch(e){ console.error(e); showEmpty(grid, "Ocurrió un error cargando inmuebles"); paginacion.innerHTML = ""; }
}


function cardInmueble(inm){
const { id, _id, titulo="Inmueble", ciudad="", barrio="", tipo="", precio=0, estado_publicacion="venta", destacado=false, nuevo=false, imagen_url="assets/img/sample-1.jpg" } = inm;
const ident = id || _id;
const badgeEstado = estado_publicacion === "arriendo" ? "bg-primary" : "bg-success";
const estadoTexto = estado_publicacion === "arriendo" ? "En arriendo" : "En venta";
return `
<div class="col">
<div class="card h-100">
<div class="position-relative">
<img src="${imagen_url}" class="card-img-top object-fit-cover" alt="${titulo}" style="height:220px;">
<span class="badge ${badgeEstado} position-absolute top-0 start-0 m-2">${estadoTexto}</span>
${destacado ? '<span class="badge bg-warning text-dark position-absolute top-0 end-0 m-2">Destacado</span>' : ''}
${nuevo ? '<span class="badge bg-info text-dark position-absolute bottom-0 end-0 m-2">Nuevo</span>' : ''}
</div>
<div class="card-body">
<h5 class="card-title text-truncate" title="${titulo}">${titulo}</h5>
<p class="mb-1 fw-semibold">${currencyCOP(precio)}</p>
<p class="text-muted small mb-2">${tipo} · ${barrio} · ${ciudad}</p>
<a class="stretched-link" href="detalle.html?id=${ident}"></a>
</div>
</div>
</div>`;
}


function renderPaginacion(total, page, limit){
const totalPaginas = Math.ceil(total/limit) || 1;
const prevDisabled = page<=1?"disabled":"";
const nextDisabled = page>=totalPaginas?"disabled":"";
paginacion.innerHTML = `
<nav aria-label="Paginación">
<ul class="pagination justify-content-center mb-0">
<li class="page-item ${prevDisabled}"><button class="page-link" data-page="${page-1}">Anterior</button></li>
<li class="page-item disabled"><span class="page-link">Página ${page} de ${totalPaginas}</span></li>
<li class="page-item ${nextDisabled}"><button class="page-link" data-page="${page+1}">Siguiente</button></li>
</ul>
</nav>`;
paginacion.querySelectorAll('[data-page]').forEach(btn=>btn.addEventListener('click',e=>{ const p=parseInt(e.currentTarget.dataset.page,10); if(!isNaN(p)) cargarInmuebles(p); }));
}


if(form){ form.addEventListener('submit', (e)=>{ e.preventDefault(); cargarInmuebles(1); }); }
if(grid){ cargarInmuebles(1); }