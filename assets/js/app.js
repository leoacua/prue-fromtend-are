import { buscarInmuebles } from "./api/inmuebles.api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const filtros = {
    ciudad: "Bogotá",
    tipo: "apartamento",
    operacion: "venta",
    page: 1,
    limit: 9
  };

  const { items, total } = await buscarInmuebles(filtros);

  console.log("🔍 Inmuebles encontrados:", total);
  console.log(items); // aquí los puedes pasar a tu UI
});
