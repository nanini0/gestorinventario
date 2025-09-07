import React from "react";
import { getProducts } from "../api/products.js";

export default function ProductList() {

    const [products, setProducts] = React.useState([]);

 const loadProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
 }
    React.useEffect(() => {
    loadProducts()
    },[]);

    return (
    <div >
        <h1 className="text-3xl font-bold text-sky-900 ">Productos Disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
            {products.map(product => (
                <div key={product.id} className="bg-sky-900 p-4 rounded-b-lg shadow">
                    <p>{product.nombre}</p>
                    <p>{product.precio}</p>
                    <p>{product.descripcion}</p>
            </div>
            ))}
        </div>
    </div>
)}
