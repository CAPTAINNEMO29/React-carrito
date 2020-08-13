import React from 'react';

//function expression
const Footer = ({fecha}) => (
    <footer>
        <p className="App">Todos los derechos reservados &copy; {fecha}</p>
    </footer>
);

export default Footer;