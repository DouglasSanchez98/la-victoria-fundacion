import React from 'react'

import fondo from '../assets/fondoImpacto.jpg';

import CountUp from 'react-countup';

const stats = [
  { value: 700, label: 'Llamadas/chats al día' },
  { value: 256263, label: 'Peticiones de Ayuda en 2023' },
  { value: 18893, label: 'Casos atendidos en 2023' },
  { value: 2220, label: 'Niños/as acogidos en nuestros Hogares desde 1970' },
  { value: 197572, label: 'Alumnos, profesionales y familias formados en Colegios e Institutos desde 2003' },
  { value: 6.5, suffix: ' mill', label: 'Peticiones de Ayuda atendidas en el Teléfono y Chat desde 1994' },
];


const Impacto = () => {
   
    
      return (
    
        <div name="impacto" className="bg-gradient-to-b from-gray-800 to-green-one w-full h-fit pt-10"
        style={{
                backgroundImage: `url(${fondo})`,
              }}>
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-orange-one">
    
            <div>
              <p className="text-4xl font-bold border-b-4 border-orange-one p-2 inline">Impacto</p>
              <p className="py-6">Conoce los logros que se han desarrollado</p>
            </div>
    
            {/*<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
    
              {
                techs.map(({ id, src, title, style }) => (
                  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto"  />
                    <p className="mt-4">{title}</p>
                  </div>
                ))
              }
    
    
            </div>*/}
            <div className="bg-gray-100 py-10 px-4">
                  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black">
                          <CountUp end={stat.value} duration={2} suffix={stat.suffix || ''} />
                        </h2>
                        <p className="mt-2 text-base sm:text-lg text-orange-one">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
          </div>
        </div>
      )
}

export default Impacto