import React from 'react';
import '../App.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>Carrito de Compra</h2>
        {carrito.map(producto => (
            <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
    </div>
);
 
export default Carrito;