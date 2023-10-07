import React from 'react';
import Clock from './components/Clock';
import ListaTareas from './components/ListaTareas';

const integrante2 = () => {
  return (
    <div>
      <header>
        <h1 className="title">Felipe Canales</h1>
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
        <p>Mi nombre es Felipe Canales. Nacido y criado en La Serena, pero actualmente vivo en Santiago para dedicarme a los estudios. Actualmente, estudio ingeniería civil informática en la UAI. Mis pasatiempos se basan en el deporte, amigos, estudios y hobbies. Algunos ejemplos de mis pasatiempos son los siguientes:</p>
        <div className="bullet-container">
          <ul className="bullet-list">
            <li>Salir de fiesta con mis amigos</li>
            <li>Cocinar</li>
            <li>Practicar artes marciales</li>
            <li>Compartir con mi familia</li>
            <li>Ver a mi polola</li>
            <li>Escalar</li>
            <li>Jugar simulador de carreras</li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img src="img/integrante2.png" alt="" width="300" height="452" />
      </div>

      <ListaTareas />

      <footer className="footer">
        <p>2023-02</p>
      </footer>
    </div>
  );
};

export default integrante2;