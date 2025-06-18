import React from 'react';
import imagenDonacion from '../assets/laVictoriaLogo.png'; // Cambia esto por tu imagen real

const Donaciones = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-4" name="donaciones">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Columna de imagen + descripción */}
        <div className="flex flex-col items-center text-center">
          <img
            src={imagenDonacion}
            alt="Donaciones"
            className="w-full max-w-sm object-contain mb-4"
          />
          <p className="text-lg text-gray-700">
            Tu aporte transforma vidas. Gracias por ser parte de nuestra misión solidaria.
          </p>
        </div>

        {/* Columna de datos bancarios */}
        <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Datos para Donaciones</h2>
          <p className="text-gray-800 mb-2"><strong>Banco:</strong> Banco Unión</p>
          <p className="text-gray-800 mb-2"><strong>Número de cuenta:</strong> 1234567890123456</p>
          <p className="text-gray-800 mb-2"><strong>Nombre del titular:</strong> Fundación La Victoria</p>
        </div>
        
      </div>
    </div>
  );
};

export default Donaciones;
