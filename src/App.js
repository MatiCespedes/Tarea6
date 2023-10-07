import React from 'react';
import './css/style.css';
import Clock from './components/Clock';
import GaleriaImagenes from './components/Galeria-imagenes';
import FormContact from './components/FormContact';
import ListaTareas from './components/ListaTareas';


function App() {

  return (
      <div className="App">
        <header className="App-header">
          <div className="title-container">
            <h1 className="title">Grupo 18: Tridente Atómico UAI</h1>
          </div>
          <div className="clock-container">
            <Clock />
          </div>
        </header>

        <div className="nav-bg">
          <nav className="primary-nav content">
            <a href="https://www.uai.cl/">UAI</a>
          </nav>
        </div>

        <div className="description">
          <p>La descripción aquí.</p>
          <h3>Nuestros objetivos como grupo son:</h3>
          <div className="bullet-container">
            <ul className="bullet-list">
              <li>Fomentar nuestro trabajo en equipo</li>
              <li>Desarrollar habilidades técnicas</li>
              <li>Crear grandes proyectos</li>
              <li>Prepararnos para el mundo laboral</li>
              <li>Disfrutar el proceso!</li>
            </ul>
          </div>
        </div>

        <h2 className="title">Integrantes</h2>

        <GaleriaImagenes />
        <ListaTareas />
        <FormContact />

        <footer className="footer">
          <p>2023-02</p>
        </footer>
      </div>
  );
}

export default App;