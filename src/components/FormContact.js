import React, { useState } from 'react';
import '../css/style.css'; 

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormularioEnviado(true);
    console.log(formData);
  };

  // Funcion para volver atras
  const handleVolverAtras = () => {
    setFormularioEnviado(false);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-form">
      <h2>Contacto</h2>
      {formularioEnviado ? (
        <div>
          <p>¡El formulario se ha enviado con éxito!</p>
          <button onClick={handleVolverAtras}>Enviar otro formulario</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default FormContact;
