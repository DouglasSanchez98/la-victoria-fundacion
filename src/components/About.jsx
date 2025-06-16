import React,{ useEffect, useState } from 'react'
//import { TypeAnimation } from 'react-type-animation'
import niños from '../assets/niños.jpg'
import niñas from '../assets/niñas.jpg'
import fondo from '../assets/fondoQuienesSomos.jpg'
// Para usar si necesito degradar colores className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
const AboutRamos = () => {
  const [mostrarPrimeraImagen, setMostrarPrimeraImagen] = useState(true)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarPrimeraImagen(prev => !prev) // Alterna el valor booleano
    }, 3000)

    return () => clearInterval(intervalo) // Limpieza al desmontar
  }, [])

  const imagenActual = mostrarPrimeraImagen ? niños : niñas
  return (
    <div
      name="quienessomos"
      className="w-full h-screen  bg-cover bg-center relative "
      style={{
        backgroundImage: `url(${fondo})`,
      }}>
        

       <div className="max-w-screen-lg px-4 mx-auto flex flex-col md:flex-row items-center justify-center w-full h-full gap-8 py-10">
        {/* TEXTO */}
        <div className="w-full md:w-1/2">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-blue-one">
            Nuestro compromiso es no solo con la educación, sino también
            con el bienestar físico y emocional de cada uno de nuestros
            beneficiarios          </p>

         
        </div>

        {/* IMAGEN */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imagenActual}
            alt="Niño"
            className="rounded-xl object-cover w-full max-w-md h-auto shadow-lg"
          />
        </div>
      </div>

    </div>
    
  )
}

export default AboutRamos