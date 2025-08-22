const API_BASE = "http://localhost:8000"; // cámbialo si es necesario
const api = axios.create({ baseURL: API_BASE, timeout: 20000 });
api.interceptors.response.use((r)=>r,(e)=>{console.error("API error:", e?.response?.data||e.message); throw e;});


export async function obtenerInmuebles({ciudad="", barrio="", tipo="", precio_min="", precio_max="", page=1, limit=12, orden="recientes"}){
const { data } = await api.get("/api/inmuebles", { params:{ ciudad,barrio,tipo,precio_min,precio_max,page,limit,orden } });
return data;
}
export async function obtenerCiudades(){ const { data } = await api.get("/api/ciudades"); return data; }
export async function obtenerBarrios(ciudad){ const { data } = await api.get("/api/barrios", { params:{ ciudad } }); return data; }
export async function obtenerTipos(){ const { data } = await api.get("/api/tipos"); return data; }
export async function obtenerInmueblePorId(id){ const { data } = await api.get(`/api/inmuebles/${id}`); return data; }