import React from "react";
import qrBolivianos from "../assets/qrBolivianos.jpg"; 
import qrDolares from "../assets/qrDolares.jpg"; 
import ReactWhatsapp from "react-whatsapp";

const Donaciones = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-4" name="donaciones">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-10">
          Datos para Donaciones
        </h2>

        {/* Grid para 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Bolivianos */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src={qrBolivianos}
              alt="Donación Bolivianos"
              className="w-60 h-60 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Cuenta en Bolivianos
            </h3>
            <p className="text-gray-800 mb-2">
              <strong>Banco:</strong> Banco Bisa
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Número de cuenta:</strong> 6746490028
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Nombre del titular:</strong> FUNDACION LA VICTORIA
            </p>
            <ReactWhatsapp
              number="+59165069109"
              message="Saludos quisiera apoyar con esta donación en Bs."
              element="text"
            >
              <p className="cursor-pointer text-gray-800 mb-2 hover:scale-105 duration-200">
                <strong>Enviar Comprobante:</strong> +59165069109
              </p>
            </ReactWhatsapp>
          </div>

          {/* Card Dólares */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src={qrDolares}
              alt="Donación Dólares"
              className="w-60 h-60 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Cuenta en Dólares
            </h3>
            <p className="text-gray-800 mb-2">
              <strong>Banco:</strong> Banco Bisa
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Número de cuenta:</strong> 6746490028
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Nombre del titular:</strong> FUNDACION LA VICTORIA
            </p>
            <ReactWhatsapp
              number="+59165069109"
              message="Saludos quisiera apoyar con esta donación en $us."
              element="text"
            >
              <p className="cursor-pointer text-gray-800 mb-2 hover:scale-105 duration-200">
                <strong>Enviar Comprobante:</strong> +59165069109
              </p>
            </ReactWhatsapp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donaciones;
