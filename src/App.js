import React, { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {

  //lista de productos
  //cada producto va a ser un objeto
  const [ productos, setProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 50 },
    { id: 3, nombre: 'Camisa SvelteJS', precio: 50 },
    { id: 4, nombre: 'Camisa AngularJS', precio: 50 },
  ]);

  //State para un carrito de compras
  const [carrito, agregarProducto] = useState([

  ]);  

  //obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
        numero={20}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aplicacion de Carrito</h1>
      </header>
      <div className="App-producto">
        <h1>Lista de Productos</h1>
          {productos.map(producto => (
          <Producto
              key={producto.id}
              producto={producto}
              carrito={carrito}
              productos={productos}
              agregarProducto={agregarProducto}
          />
      ))}
      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      </div>
      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
