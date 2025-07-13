// src/components/Contacto.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xcsr1jb",      // ⚠️ Reemplaza con tu SERVICE_ID
        "template_9f8pxd9",     // ⚠️ Reemplaza con tu TEMPLATE_ID
        form.current,
        "DFCpUcqvW5sY0FOcM"       // ⚠️ Reemplaza con tu PUBLIC_KEY
      )
      .then(
        () => {
          setEnviado(true);
          setError(false);
          form.current.reset();
        },
        () => {
          setError(true);
          setEnviado(false);
        }
      );
  };

  return (
    <div className="bg-blue-two py-12 px-4" name="contacto">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contáctanos</h2>
      <form ref={form} onSubmit={enviarCorreo} className="space-y-5">
        <div>
          <label htmlFor="nombre" className="block mb-1 font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Escribe tu nombre"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-two"
          />
        </div>

        <div>
          <label htmlFor="correo" className="block mb-1 font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            placeholder="ejemplo@correo.com"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-two"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block mb-1 font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            id="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            rows="5"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-two"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-two text-white font-semibold py-3 rounded-lg hover:bg-blue-one transition duration-300"
        >
          Enviar
        </button>

        {enviado && (
          <p className="text-green-600 text-center mt-2">✅ ¡Mensaje enviado con éxito!</p>
        )}
        {error && (
          <p className="text-red-600 text-center mt-2">❌ Hubo un error al enviar el mensaje.</p>
        )}
      </form>
    </div>
    </div>
  );
};

export default Contacto;
