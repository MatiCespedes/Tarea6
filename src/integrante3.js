import React from 'react';
import Clock from './components/Clock';
import ListaTareas from './components/ListaTareas';

const integrante3 = () => {
  return (
    <div>
      <header>
        <h1 className="title">Felipe Olivares</h1>
        <div className="clock-container">
            <Clock />
          </div>
      </header>

      <div className="nav-bg">
        <nav className="primary-nav content">
          <a href="/index.html">Inicio</a>
          <a href="/integrante1.html">Matias Cespedes</a>
          <a href="/integrante2.html">Felipe Canales</a>
          <a href="/integrante3.html">Felipe Olivares</a>
          <a href="https://www.uai.cl/">UAI</a>
        </nav>
      </div>

      <div className="description">
        <p>Soy Felipe Olivares, tengo 25 años y en estos momentos me encuentro haciendo la doble titulación de ingeniería industrial e informática. En mis tiempos libres me gusta aprovecharlo de las siguientes maneras:</p>
        <div className="bullet-container">
          <ul className="bullet-list">
            <li>Leer</li>
            <li>Ir al gimnasio</li>
            <li>Salir con mis amigos</li>
            <li>Manejar</li>
            <li>Jugar en el PC</li>
            <li>Jugar juegos de mesa con mis amigos</li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img src="img/integrante3.jpeg" alt="" width="300" height="452" />
      </div>

      <ListaTareas />

      <footer className="footer">
        <p>2023-02</p>
      </footer>
    </div>
  );
};

export default integrante3;