import axios from 'axios';


// Configuración de la instancia de Axios para la API de productos
const productsApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/producto/'
});

export const getProducts = ()=> productsApi.get();