import React, { useState } from 'react';
import '../css/style.css'; 

const GaleriaImagenes = () => {
  const [imagenActual, setImagenActual] = useState(1); 

  const totalImagenes = 3; 

  const cambiarImagen = (indice) => {
    // Función para cambiar la imagen actual
    setImagenActual(indice);
  };

  const mostrarSiguienteImagen = () => {
    // Función para mostrar la siguiente imagen
    if (imagenActual < totalImagenes) {
      cambiarImagen(imagenActual + 1);
    }
  };

  const mostrarImagenAnterior = () => {
    // Función para mostrar la imagen anterior
    if (imagenActual > 1) {
      cambiarImagen(imagenActual - 1);
    }
  };

  return (
    <div className="galeria-imagenes">
      <div className="imagen-container">
        <img src={require(`../images/Integrante${imagenActual}.jpg`)}  alt={`Imagen ${imagenActual}`} />
      </div>
      <div className="controles">
        <button onClick={mostrarImagenAnterior}>Anterior</button>
        <span>{imagenActual} de {totalImagenes}</span>
        <button onClick={mostrarSiguienteImagen}>Siguiente</button>
      </div>
    </div>
  );
};

export default GaleriaImagenes;
