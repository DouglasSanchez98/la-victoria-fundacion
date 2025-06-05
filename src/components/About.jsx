import React from 'react'

import jovenes from '../assets/grupoJovenes.png'
// Para usar si necesito degradar colores className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
const About = () => {
  return (
    <div
      name="quehacemos"
      className="w-full h-screen bg-gradient-to-b from-white to-blue-two text-white ">
        
       <div className="max-w-screen-lg px-4 mx-auto flex flex-col md:flex-row items-center justify-center w-full h-full gap-8 py-10">
        {/* TEXTO */}
        <div className="w-full md:w-1/2">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-blue-one">
            Nuestro compromiso es no solo con la educación, sino también con el bienestar físico y emocional de cada uno de nuestros beneficiarios.
          </p>

          {/*<p className="text-2xl mt-6 text-black">
            <strong>Misión:</strong> Brindar apoyo integral a niños y adolescentes en situación de vulnerabilidad, promoviendo su desarrollo físico, emocional y educativo.
          </p>
          <p className="text-2xl mt-6 text-black">
            <strong>Visión:</strong> Construir un entorno donde todos los niños tengan oportunidades para un desarrollo digno y pleno.
          </p>*/}
        </div>

        {/* IMAGEN */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={jovenes}
            alt="Niño puño arriba"
            className="rounded-xl object-cover w-full max-w-md h-auto shadow-lg"
          />
        </div>
      </div>

    </div>
    
  )
}

export default About