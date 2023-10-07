import React from 'react';
import Clock from './components/Clock';
import ListaTareas from './components/ListaTareas';

const integrante1 = () => {
  return (
    <div>
      <header>
        <h1 className="title">Matias Cespedes</h1>
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
        <p>Mi nombre es Matías Céspedes, tengo 24 años y soy de Santiago de Chile. Desde pequeño fui inclinando mis gustos por la construcción, lo que llevó a que estudiara Ingenieria Civil en obras, pero a medida que pasó el tiempo fui apasionandome por la tecnología. Actualmente me encuentro realizando mi doble titulación en Ingenieria Civil informatica e Ingenieria Civil Industrial. Algunos de mis pasatiempos son los siguientes:</p>
        <div className="bullet-container">
          <ul className="bullet-list">
            <li>Jugar fútbol</li>
            <li>Jugar tenis</li>
            <li>Salir con amigos</li>
            <li>Aprender a tocar instrumentos, en especial la batería</li>
            <li>Jugar videojuegos</li>
            <li>Ver películas</li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img src="img/integrante1.jpeg" alt="" width="300" height="452" />
      </div>

      <ListaTareas />


      <footer className="footer">
        <p>2023-02</p>
      </footer>
    </div>
  );
};

export default integrante1;