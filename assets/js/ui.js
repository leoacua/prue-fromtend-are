export function showSpinner(container) {
container.innerHTML = `
<div class="d-flex justify-content-center py-5">
<div class="spinner-border" role="status"><span class="visually-hidden">Cargando...</span></div>
</div>`;
}


export function showEmpty(container, text = "No hay resultados") {
container.innerHTML = `
<div class="text-center py-5">
<img src="assets/img/empty-state.svg" alt="Vacío" width="120" class="mb-3"/>
<h5 class="text-muted">${text}</h5>
</div>`;
}


export function currencyCOP(valor) {
if (typeof valor !== "number") return valor;
return valor.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
}