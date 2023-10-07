import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav>
      <Link to="/integrante1">Matias Cespedes</Link>
      <Link to="/integrante2">Felipe Canales</Link>
      <Link to="/integrante3">Felipe Olivares</Link>
    </nav>
  );
}

export default Navegacion;